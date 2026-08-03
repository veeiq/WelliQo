import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, phoneNumber, coachSelected, primaryGoal, assessmentData } = data;

    if (!fullName || !phoneNumber || !coachSelected) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabase = await createClient();

    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from('assessment_leads')
      .insert([
        {
          full_name: fullName,
          phone_number: phoneNumber,
          coach_selected: coachSelected,
          primary_goal: primaryGoal,
          assessment_data: assessmentData,
        },
      ]);

    if (dbError) {
      console.error('Supabase Insert Error:', dbError);
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }

    // 2. Send Email via Resend (only if RESEND_API_KEY is configured)
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'YOUR_RESEND_API_KEY_HERE') {
      try {
        await resend.emails.send({
          from: 'WelliQo Assessment <onboarding@resend.dev>', // Use a verified domain in production
          to: 'contact@welliqo.com',
          subject: `New Lead: ${fullName} (${primaryGoal})`,
          html: `
            <h2>New Assessment Lead Received!</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
            <p><strong>Coach Selected:</strong> ${coachSelected}</p>
            <p><strong>Primary Goal:</strong> ${primaryGoal}</p>
            <br/>
            <h3>Assessment Metrics</h3>
            <ul>
              <li><strong>Current Weight:</strong> ${assessmentData.weight} kg</li>
              <li><strong>Target Weight:</strong> ${assessmentData.targetWeight} kg</li>
              <li><strong>Height:</strong> ${assessmentData.height} cm</li>
              <li><strong>Age:</strong> ${assessmentData.age}</li>
              <li><strong>Gender:</strong> ${assessmentData.gender}</li>
            </ul>
            <p><em>Check the Supabase dashboard for their full assessment answers.</em></p>
          `,
        });
      } catch (emailError) {
        console.error('Resend Email Error:', emailError);
        // We don't want to fail the whole request just because the email failed
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
