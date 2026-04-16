import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';
import { useTheme } from '../context/ThemeContext';
import { guideSectionPath } from '../guideSections';

const navLinks = [
  { label: 'Why Optimise', id: 'why-optimise' },
  { label: 'Step-by-Step', id: 'steps' },
  { label: 'What Improves', id: 'results' },
  { label: 'Maintenance', id: 'maintenance' },
  { label: 'Resources', id: 'resources' },
];

export default function ExampleNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, fontSize, toggleTheme, setFontSize } = useTheme();

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
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToDemoSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-11 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/5'
          : 'bg-gradient-to-b from-black/80 via-black/60 to-black/0'
      }`}
    >
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <SeoAnnotation
          label="Primary nav"
          position="top-left"
          tone="emerald"
          byRole={{
            copywriter: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Labels &amp; IA</p>
                <p>Nav labels should match user language (“Why Optimise”), not internal jargon. Each item maps to a concrete section users can predict.</p>
                <p className="mt-1.5">Descriptive anchors pass context to search engines and improve sitelink clarity.</p>
              </>
            ),
            designer: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">States &amp; affordance</p>
                <p>Hover underlines and contrast shifts show interactivity. When the bar flattens on scroll, keep hit targets and focus rings obvious.</p>
                <p className="mt-1.5">Balance density: enough spacing for touch, tight enough for five to seven items in one row.</p>
              </>
            ),
            dev: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Crawl &amp; markup</p>
                <p>
                  Wrap global links in <code className="text-teal-600 dark:text-teal-400">&lt;nav aria-label=&quot;Main navigation&quot;&gt;</code>. Critical destinations should appear in server HTML, not only after hydration.
                </p>
                <p className="mt-1.5">
                  Hash links like <code className="text-teal-600 dark:text-teal-400">#steps</code> are fine for SPA sections; ensure each target <code className="text-teal-600 dark:text-teal-400">id</code> exists for focus management.
                </p>
              </>
            ),
          }}
        />

        <div className="flex items-center justify-between h-20 gap-4">
          <div className="relative flex items-center gap-2.5">
            <SeoAnnotation
              label="Brand lockup"
              position="bottom-left"
              tone="violet"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Name &amp; promise</p>
                    <p>The wordmark + subtitle (“Website Performance”) states category without a long tagline. Keep it stable sitewide for brand recognition in repeat visits.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Logo &amp; contrast</p>
                    <p>Icon gradient and type need to read on both transparent hero and solid scrolled bar. Test logo on light, dark, and motion backgrounds.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Home behaviour</p>
                    <p>
                      “Logo goes home” via <code className="text-teal-600 dark:text-teal-400">preventDefault</code> + smooth scroll is fine for a one-pager demo; on multi-page sites use <code className="text-teal-600 dark:text-teal-400">href=&quot;/&quot;</code>.
                    </p>
                  </>
                ),
              }}
            />
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2.5 group"
              aria-label="Go to top of page"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all">
                <Search size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold tracking-tight ${
                    scrolled ? (theme === 'dark' ? 'text-white' : 'text-slate-900') : 'text-white'
                  }`}
                >
                  Optimise
                </span>
                <span
                  className={`text-[11px] tracking-[0.22em] uppercase -mt-0.5 ${
                    scrolled ? (theme === 'dark' ? 'text-white/70' : 'text-slate-700') : 'text-white/80'
                  }`}
                >
                  Website Performance
                </span>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToDemoSection(link.id);
                }}
                className={`px-4 py-2 text-[13px] font-medium tracking-wide transition-colors relative group ${
                  scrolled
                    ? theme === 'dark'
                      ? 'text-white/80 hover:text-white'
                      : 'text-slate-900 hover:text-slate-950'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-white/0 group-hover:bg-teal-400/40 transition-all" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div
              className={`flex items-center gap-2 text-xs cursor-pointer transition-colors ${
                scrolled
                  ? theme === 'dark'
                    ? 'text-white/80 hover:text-white'
                    : 'text-slate-700 hover:text-slate-900'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              EN <ChevronDown size={12} />
            </div>
            <div className="relative flex items-center gap-2" aria-label="Display controls">
              <SeoAnnotation
                label="Theme &amp; type"
                position="top-right"
                tone="sky"
                byRole={{
                  copywriter: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Readable defaults</p>
                      <p>Let users resize type when your content is long-form. Dark mode isn’t just aesthetic — it reduces eye strain and can lift night-time engagement.</p>
                    </>
                  ),
                  designer: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Tokens &amp; scale</p>
                      <p>Theme toggles should remap surfaces, borders, and text together — not only background colour. Test charts, shadows, and teal accents in both modes.</p>
                    </>
                  ),
                  dev: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Implementation</p>
                      <p>
                        Prefer <code className="text-teal-600 dark:text-teal-400">classList</code> on <code className="text-teal-600 dark:text-teal-400">document.documentElement</code> (or CSS <code className="text-teal-600 dark:text-teal-400">color-scheme</code>) to avoid flash. Persist choice in{' '}
                        <code className="text-teal-600 dark:text-teal-400">localStorage</code> with a system default.
                      </p>
                      <p className="mt-1.5">Font-scale buttons should update a root variable (e.g. <code className="text-teal-600 dark:text-teal-400">--text-scale</code>) rather than per-component magic numbers.</p>
                    </>
                  ),
                }}
              />
              <button
                type="button"
                onClick={toggleTheme}
                className={`inline-flex items-center justify-center w-9 h-9 rounded-full border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300 transition-colors ${
                  scrolled
                    ? theme === 'dark'
                      ? 'border-white/30 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-offset-slate-950'
                      : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus-visible:ring-offset-white'
                    : 'border-white/30 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-offset-slate-950'
                }`}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={theme === 'dark'}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <div
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] ${
                  scrolled
                    ? theme === 'dark'
                      ? 'border-white/30 bg-white/10 text-white'
                      : 'border-slate-300 bg-white text-slate-800'
                    : 'border-white/30 bg-white/10 text-white'
                }`}
                role="group"
                aria-label="Adjust text size"
              >
                <button
                  type="button"
                  onClick={decreaseFont}
                  className="px-1 text-xs font-semibold hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300 focus-visible:ring-offset-slate-950 rounded"
                  aria-label="Decrease text size"
                  disabled={currentIndex <= 0}
                >
                  A-
                </button>
                <span aria-hidden="true" className="text-[10px] opacity-70">
                  /
                </span>
                <button
                  type="button"
                  onClick={increaseFont}
                  className="px-1 text-xs font-semibold hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300 focus-visible:ring-offset-slate-950 rounded"
                  aria-label="Increase text size"
                  disabled={currentIndex === -1 || currentIndex >= fontScale.length - 1}
                >
                  A+
                </button>
              </div>
            </div>
            <Link
              to={guideSectionPath('checklist')}
              className="px-5 py-2.5 bg-teal-500 text-white text-sm font-semibold hover:bg-teal-400 transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
            >
              Get the checklist
            </Link>
          </div>

          <div className="relative lg:hidden">
            <SeoAnnotation
              label="Mobile menu"
              position="top-right"
              tone="orange"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Same destinations</p>
                    <p>Mobile nav should expose the same primary destinations as desktop — don’t hide SEO-critical hubs behind mystery meat icons.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Sheet &amp; contrast</p>
                    <p>Full-width drawers need clear separators, tap targets, and a close control that doesn’t rely on device back gestures alone.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Focus &amp; aria</p>
                    <p>
                      Toggle with <code className="text-teal-600 dark:text-teal-400">aria-expanded</code>. Trap focus inside the open panel and return focus to the menu button on close.
                    </p>
                    <p className="mt-1.5">Lock body scroll when the overlay is open to avoid double scrollbars.</p>
                  </>
                ),
              }}
            />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-900/70 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 dark:bg-[#0a0a0a]/98 backdrop-blur-md border-b border-slate-200 dark:border-white/5 py-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  scrollToDemoSection(link.id);
                }}
                className="block py-3 text-sm font-medium text-slate-900 hover:text-slate-950 dark:text-white/80 dark:hover:text-white tracking-wide border-b border-slate-200 dark:border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to={guideSectionPath('checklist')}
              className="block mt-4 text-center px-5 py-3 bg-teal-500 text-white text-sm font-semibold rounded-lg"
            >
              Get the checklist
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
