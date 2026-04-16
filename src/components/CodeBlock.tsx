import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'html' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-3 max-w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700/50 dark:bg-slate-950">
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700/50">
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="max-w-full min-w-0 overflow-x-auto px-3 py-3 text-[13px] leading-relaxed">
        <code className="text-emerald-700 dark:text-emerald-300 font-mono">{code}</code>
      </pre>
    </div>
  );
}
