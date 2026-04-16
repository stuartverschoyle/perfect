import { ArrowLeft, Eye } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAnnotation, type AnnotationRole } from '../context/AnnotationContext';
import { GUIDE_HOME_PATH } from '../guideSections';

export default function ExampleAnnotationBar() {
  const [showAnnotations, setShowAnnotations] = useState(true);
  const { role, setRole } = useAnnotation();

  return (
    <>
      <div
        data-annotation-chrome
        className="fixed top-0 left-0 right-0 z-[100] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2">
          <Link
            to={GUIDE_HOME_PATH}
            className="inline-flex items-center gap-2 min-h-[44px] sm:min-h-0 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 touch-manipulation"
          >
            <ArrowLeft size={18} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Back to SEO Guide</span>
            <span className="sm:hidden">Guide</span>
          </Link>

          <div className="flex flex-col gap-2 w-full sm:w-auto sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-end sm:gap-2">
            <label className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2 text-xs text-slate-600 dark:text-slate-400 w-full sm:w-auto min-w-0">
              <span className="font-medium text-slate-700 dark:text-slate-300 shrink-0">Role</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as AnnotationRole)}
                title="All roles shows every marker; panels stack Copywriter, Designer, then Developer. Or pick one role."
                className="w-full min-h-[44px] sm:min-h-0 sm:w-auto sm:max-w-[220px] md:max-w-xs rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 sm:px-2.5 sm:py-1.5 text-sm sm:text-xs font-medium text-slate-800 dark:text-slate-200 truncate touch-manipulation"
                aria-label="Filter which tips appear and which role’s copy shows in each tip"
              >
                <option value="all">All roles (stacked panels)</option>
                <option value="copywriter">Copywriter</option>
                <option value="designer">Designer</option>
                <option value="dev">Developer</option>
              </select>
            </label>

            <button
              type="button"
              onClick={() => {
                setShowAnnotations(!showAnnotations);
                document.documentElement.classList.toggle('hide-annotations', showAnnotations);
              }}
              className={`inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0 px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-full text-sm sm:text-xs font-medium transition-all touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 w-full sm:w-auto ${
                showAnnotations
                  ? 'bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 border border-teal-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Eye size={18} className="sm:w-[13px] sm:h-[13px]" />
              {showAnnotations ? 'Annotations on' : 'Annotations off'}
            </button>
          </div>
        </div>
      </div>
      {/* Reserve space for fixed bar (taller when role row stacks on narrow viewports) */}
      <div className="h-[12rem] sm:h-11" />
    </>
  );
}
