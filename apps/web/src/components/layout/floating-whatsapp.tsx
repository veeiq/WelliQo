import React from 'react';

export function FloatingWhatsApp() {
  const phoneNumber = '+919337616265';
  const rawMessage =
    'Hi, I was exploring WelliQo and would like some guidance regarding my wellness journey.';
  const message = encodeURIComponent(rawMessage);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-5 sm:bottom-10 sm:right-8 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:shadow-[0_0_25px_rgba(37,211,102,0.7)] hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-green-300 group"
      aria-label="Chat with a Wellness Coach on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 sm:w-8 sm:h-8"
      >
        <path d="M12.031 2c-5.466 0-9.886 4.417-9.886 9.878 0 1.745.457 3.447 1.328 4.948L2.09 21.841l5.127-1.345a9.851 9.851 0 0 0 4.814 1.258h.004c5.462 0 9.885-4.418 9.885-9.879 0-2.645-1.029-5.132-2.898-7.001A9.82 9.82 0 0 0 12.031 2zm0 18.115h-.003a8.212 8.212 0 0 1-4.185-1.144l-.3-.178-3.11.815.831-3.033-.195-.31a8.169 8.169 0 0 1-1.253-4.385c0-4.529 3.684-8.21 8.217-8.21 2.196 0 4.258.855 5.81 2.408a8.156 8.156 0 0 1 2.405 5.803c0 4.528-3.682 8.21-8.217 8.234z" />
        <path d="M16.545 13.567c-.247-.124-1.465-.724-1.693-.807-.227-.083-.393-.124-.558.124-.165.247-.64 .807-.785.972-.144.165-.29.186-.537.062-.247-.124-1.045-.386-1.99-1.23-.736-.657-1.232-1.47-1.376-1.718-.144-.248-.016-.381.108-.505.111-.11.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.042-.31-.02-.433-.062-.124-.558-1.343-.765-1.838-.2-.485-.403-.42-.558-.427-.144-.007-.31-.009-.475-.009a.91.91 0 0 0-.66.31c-.227.248-.868.847-.868 2.065s.888 2.395 1.012 2.56c.124.165 1.745 2.663 4.227 3.734.59.255 1.05.407 1.408.521.593.189 1.134.162 1.56.098.476-.071 1.465-.599 1.672-1.177.206-.578.206-1.074.144-1.177-.062-.104-.227-.166-.475-.29z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm font-medium py-2 px-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
        Need Wellness Guidance?
      </span>
    </a>
  );
}
