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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <Link
            to={GUIDE_HOME_PATH}
            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to SEO Guide</span>
            <span className="sm:hidden">Guide</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 justify-end">
            <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-300">Role</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as AnnotationRole)}
                className="rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-200"
                aria-label="Filter which tips appear and which role’s copy shows in each tip"
              >
                <option value="all">All roles — every marker; panels stack Copywriter, Designer, Developer</option>
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
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
                showAnnotations
                  ? 'bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 border border-teal-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Eye size={13} />
              {showAnnotations ? 'Annotations On' : 'Annotations Off'}
            </button>
          </div>
        </div>
      </div>
      <div className="h-11" />
    </>
  );
}
