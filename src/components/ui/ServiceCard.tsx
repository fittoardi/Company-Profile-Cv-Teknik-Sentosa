type Props = {
  no: string;
  title: string;
  short: string;
  points?: string[];
};

export function ServiceCard({ no, title, short, points }: Props) {
  return (
    <article className="group relative flex flex-col border-t border-line pt-8 transition-colors hover:border-navy">
      <span className="editorial-number text-5xl font-medium text-navy/15 transition-colors group-hover:text-navy/30">
        {no}
      </span>
      <h3 className="mt-4 text-2xl font-medium text-navy">{title}</h3>
      <p className="mt-3 text-ink-muted">{short}</p>
      {points && points.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-ink-body">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none bg-amber" />
              {p}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
