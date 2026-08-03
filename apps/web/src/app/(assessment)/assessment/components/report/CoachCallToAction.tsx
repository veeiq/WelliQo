import React, { useState } from 'react';
import { useAssessmentStore, AssessmentData } from '../../../../../store/assessment-store';
import { PhoneCall } from 'lucide-react';
import { Button } from '@welliqo/ui/components/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function CoachCallToAction({ data }: { data: AssessmentData }) {
  const { goal, answers, weight, targetWeight, height, age, gender } = useAssessmentStore();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    coach: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.coach) {
      alert("Please fill in all fields.");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          phoneNumber: formData.phone,
          coachSelected: formData.coach,
          primaryGoal: goal || 'Not Selected',
          assessmentData: {
            weight,
            targetWeight,
            height,
            age,
            gender,
            answers
          }
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
          setFormData({ name: '', phone: '', coach: '' });
        }, 3000);
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-3xl p-6 sm:p-8 mt-12 border border-emerald-100 dark:border-emerald-900/50">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex-1 space-y-4 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
            <PhoneCall className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            Ready for Real Results?
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Get a personalized nutrition plan and daily guidance from an expert Herbalife Coach to reach your goals faster.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <Button 
            onClick={() => setIsOpen(true)}
            size="lg" 
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 dark:shadow-none font-semibold text-lg px-8 py-6 rounded-2xl"
          >
            Request a Free Consultation
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md border-0 shadow-2xl">
          <DialogHeader className="space-y-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <DialogTitle className="text-2xl text-center">Connect with a Coach</DialogTitle>
          </DialogHeader>
          
          {isSuccess ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Request Sent!</h3>
              <p className="text-center text-slate-500 dark:text-slate-400">Your selected coach will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp / Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+91 99999 99999" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coach">Select Your Coach</Label>
                <Select required value={formData.coach} onValueChange={(value) => setFormData({...formData, coach: value})}>
                  <SelectTrigger id="coach" className="h-12">
                    <SelectValue placeholder="Choose a coach" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Alok">Coach Alok (+91 9114211911)</SelectItem>
                    <SelectItem value="Priya">Coach Priya (+91 9337616265)</SelectItem>
                    <SelectItem value="Dipti">Coach Dipti (+91 7008183356)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-lg">
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
