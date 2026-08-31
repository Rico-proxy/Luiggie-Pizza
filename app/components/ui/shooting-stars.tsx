const shootingStars = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  top: `${8 + index * 13}%`,
  left: `${8 + ((index * 17) % 70)}%`,
  delay: `${index * 1.4}s`,
  duration: `${4.5 + (index % 3)}s`,
}));

export function ShootingStars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shootingStars.map((star) => (
        <span
          key={star.id}
          className="absolute h-[2px] w-32 -rotate-45 animate-shooting-star rounded-full bg-gradient-to-r from-transparent via-fornace-gold to-fornace-sienna shadow-[0_0_14px_rgb(197_155_39_/_0.75)]"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
