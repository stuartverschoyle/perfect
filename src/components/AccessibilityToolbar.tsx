import { useState } from 'react';
import { Sun, Moon, Type, Settings2, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FONT_SIZES = [
  { key: 'small' as const, label: 'S', title: 'Small' },
  { key: 'medium' as const, label: 'M', title: 'Medium' },
  { key: 'large' as const, label: 'L', title: 'Large' },
  { key: 'xl' as const, label: 'XL', title: 'Extra Large' },
];

export default function AccessibilityToolbar() {
  const { theme, fontSize, toggleTheme, setFontSize } = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <div data-annotation-chrome className="fixed bottom-4 right-4 z-[90] flex flex-col items-end gap-2">
      {expanded && (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-4 w-64 animate-in">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-slate-800 dark:text-white">Display Settings</span>
            <button
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              aria-label="Close display settings"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">
                Theme
              </label>
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="text-amber-500" />
                ) : (
                  <Moon size={18} className="text-slate-600" />
                )}
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </span>
              </button>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">
                <Type size={12} className="inline mr-1" />
                Font Size
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {FONT_SIZES.map((size) => (
                  <button
                    key={size.key}
                    onClick={() => setFontSize(size.key)}
                    className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl text-sm font-medium transition-all ${
                      fontSize === size.key
                        ? 'bg-teal-500 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                    title={size.title}
                    aria-label={`Set font size to ${size.title}`}
                  >
                    <span style={{ fontSize: size.key === 'small' ? '11px' : size.key === 'medium' ? '13px' : size.key === 'large' ? '15px' : '17px' }}>
                      {size.label}
                    </span>
                    <span className="text-[9px] opacity-70">{size.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 ${
          expanded
            ? 'bg-teal-500 text-white'
            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
        }`}
        aria-label="Toggle display settings"
      >
        <Settings2 size={20} />
      </button>
    </div>
  );
}
