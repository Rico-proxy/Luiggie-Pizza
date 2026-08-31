const stars = Array.from({ length: 150 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: `${1 + (index % 3)}px`,
  delay: `${(index % 12) * 0.35}s`,
  opacity: 0.35 + (index % 5) * 0.12,
}));

export function StarBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute animate-star-twinkle rounded-full bg-fornace-gold shadow-[0_0_10px_rgb(197_155_39_/_0.85)]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
