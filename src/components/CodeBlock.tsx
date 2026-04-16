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
    <div className="group relative my-3 max-w-full min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700/50 dark:bg-slate-950">
      <div className="flex min-w-0 items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-700/50 dark:bg-slate-900/80">
        <span className="min-w-0 truncate text-[11px] font-mono uppercase tracking-wider text-slate-500">{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex shrink-0 items-center gap-1 text-[11px] text-slate-500 transition-colors hover:text-slate-700 dark:hover:text-slate-300"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre
        className="max-w-full min-w-0 px-3 py-3 text-[13px] leading-relaxed whitespace-pre-wrap break-words [overflow-wrap:anywhere] sm:overflow-x-auto sm:whitespace-pre sm:break-normal sm:[overflow-wrap:normal]"
      >
        <code className="block min-w-0 font-mono text-emerald-700 dark:text-emerald-300">{code}</code>
      </pre>
    </div>
  );
}
