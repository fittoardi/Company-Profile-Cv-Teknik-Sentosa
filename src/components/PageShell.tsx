import type { ReactNode } from 'react';
import { useEffect } from 'react';

type PageShellProps = {
  children: ReactNode;
  title?: string;
};

export function PageShell({ children, title }: PageShellProps) {
  useEffect(() => {
    document.title = title ?? 'Sentra Boiler Teknik';
  }, [title]);

  return <main>{children}</main>;
}
