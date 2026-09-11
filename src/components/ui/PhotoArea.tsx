type Props = {
  src: string;
  alt: string;
  ratio?: '16/9' | '4/3' | '3/4' | '4/5' | '1/1';
  className?: string;
  overlay?: boolean;
};

/*
  Placeholder foto yang jelas dan mudah diganti.
  Gunakan <PhotoArea src={images.workshop} alt="..." /> di mana saja.
  Tampilkan label "FOTO" di sudut agar tim tahu area foto asli.
*/
export function PhotoArea({ src, alt, ratio = '4/3', className = '', overlay = false }: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-navy/5 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${overlay ? 'opacity-90' : ''}`}
      />
      <span className="pointer-events-none absolute left-3 top-3 label-caps bg-navy/85 px-2 py-1 text-[10px] text-white">
        FOTO
      </span>
    </div>
  );
}
