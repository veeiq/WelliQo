import React, { useEffect } from 'react';
import { LoginForm } from '../../../../(auth)/login/LoginForm';

interface SaveReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SaveReportModal({ isOpen, onClose }: SaveReportModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors z-10 shadow-sm"
        >
          ✕
        </button>
        
        {/* We use the exact same LoginForm, but pass onSuccess so it doesn't redirect away from the report */}
        <LoginForm onSuccess={onClose} />
      </div>
    </div>
  );
}
