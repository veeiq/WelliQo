import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface MDXRendererProps {
  source: string;
}

const components = {
  h1: (props: any) => <h1 className="text-3xl font-semibold text-slate-900 dark:text-white mt-8 mb-4 tracking-tight" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-600 dark:text-slate-400" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  a: (props: any) => (
    <a 
      className="text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4 decoration-indigo-200 dark:decoration-indigo-800 transition-colors" 
      {...props} 
    />
  ),
  strong: (props: any) => <strong className="font-semibold text-slate-900 dark:text-slate-200" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-indigo-200 dark:border-indigo-900 pl-6 my-6 italic text-slate-700 dark:text-slate-300" {...props} />
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
