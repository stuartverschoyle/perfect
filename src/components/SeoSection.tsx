interface SeoSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SeoSection({ id, children, className = '' }: SeoSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}
