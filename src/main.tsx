import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { AnnotationProvider } from './context/AnnotationContext';
import AppRouter from './AppRouter.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AnnotationProvider>
        <AppRouter />
      </AnnotationProvider>
    </ThemeProvider>
  </StrictMode>
);
