import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import App from './App';
import { EXAMPLE_PATH, GUIDE_HOME_PATH, guideSectionPath } from './guideSections';

const ExamplePage = lazy(() => import('./example/ExamplePage'));

/** Old shared links used `/#example` and `/#guide-*`; send them to path URLs. */
function LegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/' && path !== '') return;

    const hash = window.location.hash;
    if (!hash) return;

    if (hash === '#example') {
      navigate(EXAMPLE_PATH, { replace: true });
      return;
    }
    if (hash === '#guide' || hash === '#') {
      navigate(GUIDE_HOME_PATH, { replace: true });
      return;
    }
    if (hash.startsWith('#guide-')) {
      navigate(guideSectionPath(hash.slice('#guide-'.length)), { replace: true });
    }
  }, [navigate]);

  return null;
}

function ExampleRouteFallback() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-white text-slate-500 dark:bg-[#0a0a0a] dark:text-slate-400"
      aria-busy="true"
      aria-label="Loading example page"
    >
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <LegacyHashRedirect />
      <Suspense fallback={<ExampleRouteFallback />}>
        <Routes>
          <Route path={GUIDE_HOME_PATH} element={<App />} />
          <Route path="/guide/:sectionId" element={<App />} />
          <Route path="/guide" element={<Navigate to={GUIDE_HOME_PATH} replace />} />
          <Route path={EXAMPLE_PATH} element={<ExamplePage />} />
          <Route path="*" element={<Navigate to={GUIDE_HOME_PATH} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
