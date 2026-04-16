import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type AnnotationTipRole = 'copywriter' | 'designer' | 'dev';
export type AnnotationRole = 'all' | AnnotationTipRole;

interface AnnotationContextType {
  role: AnnotationRole;
  setRole: (role: AnnotationRole) => void;
}

const AnnotationContext = createContext<AnnotationContextType | undefined>(undefined);

export function AnnotationProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<AnnotationRole>(() => {
    const s = localStorage.getItem('seo-guide-annotation-role');
    if (s === 'copywriter' || s === 'designer' || s === 'dev' || s === 'all') return s;
    return 'all';
  });

  useEffect(() => {
    localStorage.setItem('seo-guide-annotation-role', role);
  }, [role]);

  const setRole = useCallback((r: AnnotationRole) => setRoleState(r), []);

  return <AnnotationContext.Provider value={{ role, setRole }}>{children}</AnnotationContext.Provider>;
}

export function useAnnotation() {
  const ctx = useContext(AnnotationContext);
  if (!ctx) throw new Error('useAnnotation must be used within AnnotationProvider');
  return ctx;
}
