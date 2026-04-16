import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import App from './App';
import ExamplePage from './example/ExamplePage';
import { EXAMPLE_PATH, GUIDE_HOME_PATH, guideSectionPath } from './guideSections';

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

export default function AppRouter() {
  return (
    <BrowserRouter>
      <LegacyHashRedirect />
      <Routes>
        <Route path={GUIDE_HOME_PATH} element={<App />} />
        <Route path="/guide/:sectionId" element={<App />} />
        <Route path="/guide" element={<Navigate to={GUIDE_HOME_PATH} replace />} />
        <Route path={EXAMPLE_PATH} element={<ExamplePage />} />
        <Route path="*" element={<Navigate to={GUIDE_HOME_PATH} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
