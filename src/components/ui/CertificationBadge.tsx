import { ShieldCheck } from 'lucide-react';

type Props = {
  code: string;
  desc: string;
};

export function CertificationBadge({ code, desc }: Props) {
  return (
    <div className="flex flex-col items-start gap-3 border border-line bg-surface p-6 transition-colors hover:border-navy-medium">
      <span className="flex h-12 w-12 items-center justify-center bg-navy text-white">
        <ShieldCheck size={22} strokeWidth={2} />
      </span>
      <div>
        <p className="text-lg font-semibold text-navy">{code}</p>
        <p className="mt-1 text-sm text-ink-muted">{desc}</p>
      </div>
    </div>
  );
}
