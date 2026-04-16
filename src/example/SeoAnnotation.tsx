import { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Info, X } from 'lucide-react';
import { useAnnotation, type AnnotationTipRole } from '../context/AnnotationContext';

export type AnnotationTone = 'amber' | 'teal' | 'violet' | 'sky' | 'rose' | 'emerald' | 'orange';

/** Content keyed by role. Only roles with content show this marker when filtered; “All” stacks every defined role in the panel. */
export type AnnotationByRole = Partial<Record<AnnotationTipRole, React.ReactNode>>;

const ROLE_ORDER: AnnotationTipRole[] = ['copywriter', 'designer', 'dev'];

const ROLE_LABEL: Record<AnnotationTipRole, string> = {
  copywriter: 'Copywriter',
  designer: 'Designer',
  dev: 'Developer',
};

/** Above nav (50), annotation bar (100), accessibility toolbar (90), and typical modals. */
const Z_BACKDROP = 200_000;
const Z_PANEL = 200_001;
const Z_MARKER_OPEN = 200_000;

const GAP = 8;
const VIEW_PAD = 8;

interface SeoAnnotationProps {
  label: string;
  byRole: AnnotationByRole;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'inline';
  tone?: AnnotationTone;
}

function rolesWithContent(byRole: AnnotationByRole): AnnotationTipRole[] {
  return ROLE_ORDER.filter((r) => byRole[r] != null);
}

function isAnnotationChromeTarget(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest('[data-annotation-chrome]') != null;
}

const TONE_STYLES: Record<
  AnnotationTone,
  {
    chip: string;
    chipIcon: string;
    panel: string;
    title: string;
    dot: string;
    shadow: string;
  }
> = {
  amber: {
    chip: 'border-amber-400/90 bg-amber-50 text-amber-950 dark:bg-amber-400/20 dark:text-amber-50 dark:border-amber-300/90',
    chipIcon: 'text-amber-700 dark:text-amber-200',
    panel: 'border-amber-400/80 dark:border-amber-400/40',
    title: 'text-amber-900 dark:text-amber-200',
    dot: 'bg-amber-500',
    shadow: 'shadow-amber-500/15',
  },
  teal: {
    chip: 'border-teal-400/90 bg-teal-50 text-teal-950 dark:bg-teal-500/20 dark:text-teal-50 dark:border-teal-400/80',
    chipIcon: 'text-teal-700 dark:text-teal-200',
    panel: 'border-teal-400/80 dark:border-teal-400/40',
    title: 'text-teal-900 dark:text-teal-200',
    dot: 'bg-teal-500',
    shadow: 'shadow-teal-500/15',
  },
  violet: {
    chip: 'border-violet-400/90 bg-violet-50 text-violet-950 dark:bg-violet-500/20 dark:text-violet-50 dark:border-violet-400/80',
    chipIcon: 'text-violet-700 dark:text-violet-200',
    panel: 'border-violet-400/80 dark:border-violet-400/40',
    title: 'text-violet-900 dark:text-violet-200',
    dot: 'bg-violet-500',
    shadow: 'shadow-violet-500/15',
  },
  sky: {
    chip: 'border-sky-400/90 bg-sky-50 text-sky-950 dark:bg-sky-500/20 dark:text-sky-50 dark:border-sky-400/80',
    chipIcon: 'text-sky-700 dark:text-sky-200',
    panel: 'border-sky-400/80 dark:border-sky-400/40',
    title: 'text-sky-900 dark:text-sky-200',
    dot: 'bg-sky-500',
    shadow: 'shadow-sky-500/15',
  },
  rose: {
    chip: 'border-rose-400/90 bg-rose-50 text-rose-950 dark:bg-rose-500/20 dark:text-rose-50 dark:border-rose-400/80',
    chipIcon: 'text-rose-700 dark:text-rose-200',
    panel: 'border-rose-400/80 dark:border-rose-400/40',
    title: 'text-rose-900 dark:text-rose-200',
    dot: 'bg-rose-500',
    shadow: 'shadow-rose-500/15',
  },
  emerald: {
    chip: 'border-emerald-400/90 bg-emerald-50 text-emerald-950 dark:bg-emerald-500/20 dark:text-emerald-50 dark:border-emerald-400/80',
    chipIcon: 'text-emerald-700 dark:text-emerald-200',
    panel: 'border-emerald-400/80 dark:border-emerald-400/40',
    title: 'text-emerald-900 dark:text-emerald-200',
    dot: 'bg-emerald-500',
    shadow: 'shadow-emerald-500/15',
  },
  orange: {
    chip: 'border-orange-400/90 bg-orange-50 text-orange-950 dark:bg-orange-500/20 dark:text-orange-50 dark:border-orange-400/80',
    chipIcon: 'text-orange-700 dark:text-orange-200',
    panel: 'border-orange-400/80 dark:border-orange-400/40',
    title: 'text-orange-900 dark:text-orange-200',
    dot: 'bg-orange-500',
    shadow: 'shadow-orange-500/15',
  },
};

export default function SeoAnnotation({ label, byRole, position = 'top-right', tone = 'amber' }: SeoAnnotationProps) {
  const { role } = useAnnotation();
  const [open, setOpen] = useState(false);
  const markerRef = useRef<HTMLSpanElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });
  const styles = TONE_STYLES[tone];

  const applicable = useMemo(() => rolesWithContent(byRole), [byRole]);

  const visible =
    applicable.length > 0 &&
    (role === 'all' || (role !== 'all' && applicable.includes(role as AnnotationTipRole)));

  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      const t = e.target as Node;
      if (isAnnotationChromeTarget(e.target)) return;
      if (markerRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;
      setOpen(false);
    }
    if (open) {
      document.addEventListener('mousedown', handlePointerDown);
    }
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [open]);

  const panelBody = useMemo(() => {
    if (role === 'all') {
      return applicable.map((r) => (
        <div
          key={r}
          className="space-y-2 border-t border-slate-200/90 dark:border-slate-700/60 pt-3 first:border-t-0 first:pt-0"
        >
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{ROLE_LABEL[r]}</p>
          <div className="space-y-2">{byRole[r]}</div>
        </div>
      ));
    }
    const one = role as AnnotationTipRole;
    return <div className="space-y-2">{byRole[one]}</div>;
  }, [applicable, byRole, role]);

  useLayoutEffect(() => {
    if (!open || !visible) return;

    function updatePosition() {
      const marker = markerRef.current;
      const panel = panelRef.current;
      if (!marker) return;

      const m = marker.getBoundingClientRect();
      const pw = panel?.offsetWidth ?? 320;
      const ph = panel?.offsetHeight ?? 320;

      let top = 0;
      let left = 0;

      switch (position) {
        case 'top-right':
          top = m.bottom + GAP;
          left = m.right - pw;
          break;
        case 'top-left':
        case 'inline':
          top = m.bottom + GAP;
          left = m.left;
          break;
        case 'bottom-right':
          top = m.top - ph - GAP;
          left = m.right - pw;
          break;
        case 'bottom-left':
          top = m.top - ph - GAP;
          left = m.left;
          break;
        default:
          top = m.bottom + GAP;
          left = m.left;
      }

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      left = Math.min(Math.max(left, VIEW_PAD), vw - pw - VIEW_PAD);
      top = Math.min(Math.max(top, VIEW_PAD), vh - ph - VIEW_PAD);

      setPanelPos({ top, left });
    }

    updatePosition();
    const raf = requestAnimationFrame(updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [open, visible, position, role, panelBody]);

  if (!visible) return null;

  const positionClasses: Record<string, string> = {
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'bottom-right': 'bottom-2 right-2',
    'bottom-left': 'bottom-2 left-2',
    inline: 'relative',
  };

  const chipAria =
    role === 'all' && applicable.length > 1
      ? `SEO tip: ${label}. ${applicable.length} role views.`
      : `SEO tip: ${label}`;

  const markerZ = open ? Z_MARKER_OPEN : 50;

  const portaledPanel =
    open &&
    createPortal(
      <>
        <div
          className="fixed inset-0 md:hidden"
          style={{ zIndex: Z_BACKDROP }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          ref={panelRef}
          className={`fixed w-72 sm:w-80 rounded-xl bg-white dark:bg-slate-900 border shadow-2xl ${styles.panel} ${styles.shadow}`}
          style={{ zIndex: Z_PANEL, top: panelPos.top, left: panelPos.left }}
        >
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-slate-700/50">
            <div className="flex items-center gap-1.5 min-w-0">
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${styles.dot}`} />
              <span className={`text-xs font-bold uppercase tracking-wider truncate ${styles.title}`}>Tip: {label}</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
              aria-label="Close"
            >
              <X size={14} />
            </button>
          </div>
          <div className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-h-[min(70vh,28rem)] overflow-y-auto">
            {role === 'all' && applicable.length > 1 ? (
              <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-3">
                Each role below — switch the bar filter to see one at a time.
              </p>
            ) : null}
            {panelBody}
          </div>
        </div>
      </>,
      document.body,
    );

  return (
    <>
      <span
        ref={markerRef}
        className={`annotation-marker ${position === 'inline' ? 'relative inline-flex' : `absolute ${positionClasses[position]}`}`}
        style={{ zIndex: markerZ }}
      >
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`group flex items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] px-3 py-2 sm:min-h-0 sm:min-w-0 sm:gap-1 sm:px-2.5 sm:py-1 rounded-full border text-xs sm:text-[10px] font-semibold uppercase tracking-wide sm:tracking-wider shadow-sm hover:brightness-95 dark:hover:brightness-110 transition-all sm:hover:scale-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900 touch-manipulation ${styles.chip}`}
          aria-label={chipAria}
          aria-expanded={open}
        >
          <Info strokeWidth={2.75} className={`h-[1.125rem] w-[1.125rem] sm:h-[11px] sm:w-[11px] shrink-0 ${styles.chipIcon}`} aria-hidden />
          <span className="hidden sm:inline max-w-[12rem] truncate md:max-w-none">{label}</span>
        </button>
      </span>
      {portaledPanel}
    </>
  );
}
