-- Create the assessment_leads table
CREATE TABLE IF NOT EXISTS assessment_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    coach_selected TEXT NOT NULL,
    primary_goal TEXT,
    assessment_data JSONB NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE assessment_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since it's a public lead form)
CREATE POLICY "Allow public inserts" ON assessment_leads
    FOR INSERT
    WITH CHECK (true);

-- Create policy to allow only authenticated admins to view the leads
CREATE POLICY "Allow admins to read" ON assessment_leads
    FOR SELECT
    USING (auth.role() = 'authenticated');
