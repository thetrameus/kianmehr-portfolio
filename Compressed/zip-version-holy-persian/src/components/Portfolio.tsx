// PortfolioCard3D.jsx  (drop-in component, zero extra deps)
import { useRef, useState, MouseEvent } from "react"; // ✅ React's generic type

interface PortfolioCard3DProps {
  photo: string;
  name: string;
  role: string;
  bio: string;
}

export default function PortfolioCard3D({
  photo,
  name,
  role,
  bio,
}: PortfolioCard3DProps) {
  const [hover, setHover] = useState(false);
  const card = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = card.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    el.style.transform = `perspective(1200px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.05)`;
  };

  const handleLeave = () => {
    setHover(false);
    const el = card.current;
    if (!el) return;
    el.style.transform = "perspective(1200px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section className="bg-neutral-950 flex items-center justify-center py-24">
      <div
        ref={card}
        onMouseMove={handleMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={handleLeave}
        className="relative w-[320px] h-[420px] rounded-2xl transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* glossy gradient backdrop */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-black
                     shadow-2xl shadow-black/80"
          style={{
            clipPath: hover
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(10% 0, 90% 0, 90% 100%, 10% 100%)",
            transition: "clip-path .6s cubic-bezier(.4,0,.2,1)",
          }}
        />

        {/* photo */}
        <div
          className="absolute top-10 left-10 right-10 h-52 rounded-xl overflow-hidden"
          style={{ transform: "translateZ(40px)" }}
        >
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        </div>

        {/* text block */}
        <div
          className="absolute bottom-10 left-10 right-10"
          style={{ transform: "translateZ(60px)" }}
        >
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-sm text-neutral-400 mb-2">{role}</p>
          <p className="text-xs text-neutral-500 leading-relaxed">{bio}</p>
        </div>

        {/* floating accent */}
        <div
          className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-gradient-to-br from-neutral-700 to-black
                     opacity-50 blur-sm"
          style={{
            transform: `translateZ(80px) scale(${hover ? 1.2 : 1})`,
            transition: "transform .6s",
          }}
        />
      </div>
    </section>
  );
}

/* usage example:
<PortfolioCard3D
  photo="https://picsum.photos/id/1027/800/800"
  name="Jane Doe"
  role="Senior Product Manager"
  bio="12+ years turning complex data into elegant business solutions."
/>
*/
