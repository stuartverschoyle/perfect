import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { AnnotationProvider } from './context/AnnotationContext';
import AppRouter from './AppRouter.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <AnnotationProvider>
          <AppRouter />
        </AnnotationProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
