import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface MDXRendererProps {
  source: string;
}

const components = {
  h1: (props: any) => <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-50 mt-10 mb-6 tracking-tight" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-medium text-slate-800 dark:text-slate-100 mt-10 mb-4 tracking-tight" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mt-8 mb-3 tracking-tight" {...props} />,
  p: (props: any) => <p className="text-[1.125rem] leading-[1.8] text-slate-600 dark:text-slate-400 mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-8 space-y-3 text-[1.125rem] leading-[1.8] text-slate-600 dark:text-slate-400 marker:text-indigo-300 dark:marker:text-indigo-700" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-8 space-y-3 text-[1.125rem] leading-[1.8] text-slate-600 dark:text-slate-400 marker:text-indigo-300 dark:marker:text-indigo-700" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  a: (props: any) => (
    <a 
      className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 underline underline-offset-4 decoration-indigo-200/50 dark:decoration-indigo-900/50 hover:decoration-indigo-400 dark:hover:decoration-indigo-600 transition-all duration-300" 
      {...props} 
    />
  ),
  strong: (props: any) => <strong className="font-semibold text-slate-900 dark:text-slate-200" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-indigo-300 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20 px-6 py-4 my-8 rounded-r-2xl italic text-[1.125rem] leading-[1.8] text-slate-700 dark:text-slate-300" {...props} />
  ),
};

export function MDXRenderer({ source }: MDXRendererProps) {
  if (!source) return null;
  
  return (
    <div className="mdx-content">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
