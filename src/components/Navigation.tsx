import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { EXAMPLE_PATH, guideSections, guideSectionPath } from '../guideSections';

export default function Navigation() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('meta');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, fontSize, setFontSize, toggleTheme } = useTheme();

  const fontScale = useMemo(() => ['small', 'medium', 'large', 'xl'] as const, []);
  const currentIndex = fontScale.indexOf(fontSize as (typeof fontScale)[number]);

  const decreaseFont = () => {
    if (currentIndex <= 0) return;
    setFontSize(fontScale[currentIndex - 1]);
  };

  const increaseFont = () => {
    if (currentIndex === -1 || currentIndex >= fontScale.length - 1) return;
    setFontSize(fontScale[currentIndex + 1]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    guideSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    navigate(guideSectionPath(id));
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed left-[max(1rem,env(safe-area-inset-left))] top-[max(1rem,env(safe-area-inset-top))] z-[60] min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-500 dark:text-slate-300 shadow-lg hover:text-slate-800 dark:hover:text-white transition-colors touch-manipulation"
        aria-label={mobileOpen ? 'Close section navigation' : 'Open section navigation'}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {mobileOpen && (
        <button
          type="button"
          className="lg:hidden fixed inset-0 z-[45] cursor-default bg-black/50 touch-manipulation"
          aria-label="Close navigation overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <nav
        className={`fixed left-0 top-0 z-50 h-full w-full max-w-none border-r border-slate-200 dark:border-slate-800 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-out dark:bg-slate-900/95 lg:w-72 lg:max-w-[18rem] lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Section navigation"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 p-5 pt-[max(1.25rem,env(safe-area-inset-top))] pl-[max(4.25rem,env(safe-area-inset-left))] lg:pl-5 lg:pt-5">
          <div className="flex items-start justify-between gap-2.5">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-sky-500">
                <Search size={16} className="text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">SEO Anatomy</h1>
                <p className="text-[11px] text-slate-400 dark:text-slate-500">The Perfect Web Page</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1" aria-label="Display controls">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={theme === 'dark'}
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              </button>
              <div
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-700 dark:text-slate-200"
                role="group"
                aria-label="Adjust text size"
              >
                <button
                  type="button"
                  onClick={decreaseFont}
                  className="px-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40"
                  aria-label="Decrease text size"
                  disabled={currentIndex <= 0}
                >
                  A-
                </button>
                <span aria-hidden="true">/</span>
                <button
                  type="button"
                  onClick={increaseFont}
                  className="px-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40"
                  aria-label="Increase text size"
                  disabled={currentIndex === -1 || currentIndex >= fontScale.length - 1}
                >
                  A+
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto p-3 pb-[max(1rem,env(safe-area-inset-bottom))]" style={{ maxHeight: 'calc(100dvh - 7.5rem)' }}>
          <div className="space-y-0.5">
            {guideSections.map((s, i) => {
              const Icon = s.icon;
              const isActive = activeSection === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleClick(s.id)}
                  className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] leading-snug transition-all duration-200 lg:items-center lg:py-2 ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className="w-4 shrink-0 pt-0.5 text-right font-mono text-[10px] text-slate-400 dark:text-slate-600 lg:pt-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon size={14} className={`mt-0.5 shrink-0 lg:mt-0 ${isActive ? 'text-teal-500 dark:text-teal-400' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span className="min-w-0 flex-1 break-words [overflow-wrap:anywhere]">{s.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 mx-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
            <div className="text-xs text-slate-500 dark:text-slate-500 mb-1">Quick Tip</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Click the <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-sky-100 dark:bg-sky-400/10 text-sky-500 dark:text-sky-400 text-[10px] align-middle mx-0.5">i</span> icons throughout the page to learn SEO best practices for each element.
            </p>
          </div>

          <Link
            to={EXAMPLE_PATH}
            className="block mt-3 mx-3 p-3 rounded-lg bg-teal-50 dark:bg-teal-500/5 border border-teal-200 dark:border-teal-500/20 hover:bg-teal-100 dark:hover:bg-teal-500/10 transition-colors text-center"
          >
            <span className="text-[11px] font-medium text-teal-600 dark:text-teal-400">View Live Example Page</span>
            <span className="block text-[10px] text-teal-500/60 dark:text-teal-400/50 mt-0.5">Fully annotated demo</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
