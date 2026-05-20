export function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative z-10 w-[260px] shrink-0 rounded-[2.5rem] border border-white/15 bg-night p-2 shadow-glow sm:w-[280px]">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-night-2">
        <img
          src={src}
          alt={alt}
          width={800}
          height={1400}
          loading="lazy"
          decoding="async"
          className="h-[480px] w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
