interface SeoSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SeoSection({ id, children, className = '' }: SeoSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 min-w-0 break-words [overflow-wrap:anywhere] ${className}`}>
      {children}
    </section>
  );
}
