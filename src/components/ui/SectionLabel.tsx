type Props = {
  children: React.ReactNode;
  label: string;
  className?: string;
};

/* Small spaced uppercase label, e.g. "SEJAK 2010" */
export function SectionLabel({ children, label, className = '' }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="label-caps text-amber-dark">{label}</span>
      <span className="h-px w-8 bg-line" />
      <span className="label-caps text-ink-muted">{children}</span>
    </div>
  );
}
