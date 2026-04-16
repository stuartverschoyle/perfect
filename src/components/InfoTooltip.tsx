import { useState, useRef, useEffect } from 'react';
import { Info, X } from 'lucide-react';

interface InfoTooltipProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'success';
}

export default function InfoTooltip({ title, children, variant = 'default' }: InfoTooltipProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const variantStyles = {
    default: 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700',
    warning: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
    success: 'bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800',
  };

  const iconStyles = {
    default: 'text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-400/10',
    warning: 'text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-400/10',
    success: 'text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-400/10',
  };

  const headerStyles = {
    default: 'text-sky-600 dark:text-sky-400',
    warning: 'text-amber-600 dark:text-amber-400',
    success: 'text-emerald-600 dark:text-emerald-400',
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <span className="relative inline-flex items-center">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 ${iconStyles[variant]}`}
        aria-label={`Info: ${title}`}
      >
        <Info size={14} strokeWidth={2.5} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setOpen(false)} />
          <div
            ref={panelRef}
            className={`absolute z-50 w-80 sm:w-96 rounded-xl border shadow-2xl ${variantStyles[variant]} left-0 top-full mt-2`}
            style={{ maxHeight: '80vh' }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/50 dark:border-white/10">
              <h4 className={`font-semibold text-sm ${headerStyles[variant]}`}>{title}</h4>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed overflow-y-auto" style={{ maxHeight: '60vh' }}>
              {children}
            </div>
          </div>
        </>
      )}
    </span>
  );
}
