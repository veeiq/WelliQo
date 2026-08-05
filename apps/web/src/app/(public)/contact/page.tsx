import React from 'react';
import { Metadata } from 'next';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | WelliQo',
  description: 'Get in touch with the WelliQo team for support, questions, or partnerships.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-balance">
            Let's <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">connect.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-balance">
            Have a question about your assessment? Want to learn more about our coaching programs? We're here to help.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                  <input type="text" id="firstName" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                  <input type="text" id="lastName" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                <input type="email" id="email" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <select id="subject" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none">
                  <option value="" disabled selected>Select a topic</option>
                  <option value="support">General Support</option>
                  <option value="coaching">Coaching Inquiry</option>
                  <option value="business">Business / Partnerships</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea id="message" rows={5} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-emerald-500">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl p-8 sm:p-10 border border-emerald-100 dark:border-emerald-900/30">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Email Us</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Our team typically responds within 24 hours.</p>
                    <a href="mailto:support@welliqo.com" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline mt-2 inline-block">support@welliqo.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Live Chat</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Chat directly with our support team during business hours.</p>
                    <button className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline mt-2 inline-block">Start Chat</button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Office</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Global operations, fully remote team.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-slate-900/10">
              <h3 className="text-xl font-bold mb-4">Are you a wellness professional?</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Join our network of certified coaches and professionals. Build your business and help others achieve their wellness goals.
              </p>
              <button className="w-full rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-emerald-50 transition-colors">
                Partner with us
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
