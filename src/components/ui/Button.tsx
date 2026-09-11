import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'amber' | 'navy' | 'outline-navy' | 'outline-light';

type Props = {
  children: ReactNode;
  variant?: Variant;
  onClick?: () => void;
  href?: string;
  size?: 'md' | 'lg';
  icon?: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

const variants: Record<Variant, string> = {
  amber:
    'bg-amber text-amber-dark hover:bg-[#d98c14] focus-visible:ring-amber',
  navy: 'bg-navy text-white hover:bg-navy-medium focus-visible:ring-navy-medium',
  'outline-navy':
    'bg-transparent text-navy border border-navy hover:bg-navy hover:text-white focus-visible:ring-navy-medium',
  'outline-light':
    'bg-transparent text-white border border-white/40 hover:bg-white hover:text-navy focus-visible:ring-white',
};

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export function Button({
  children,
  variant = 'amber',
  onClick,
  href,
  size = 'md',
  icon,
  className = '',
  ...rest
}: Props) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={base} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base} {...rest}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
