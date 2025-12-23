import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blogs" },
  { href: "/research", label: "research" },
];

export default function Header({ className }: { className?: string }) {
  return (
    <header className={`site-header ${className || ""}`}>
      <div className="site-header__inner site-header__inner--stacked">
        {/* Brand (centered) */}
        <Link href="/" className="brand brand--stacked">
          <Image
            src="/logo.png"
            alt="Erol Cetinok logo"
            width={44}
            height={44}
            priority
          />

          <div className="brand__right">
            <span className="brand__slash">/</span>
            <span className="brand__name">Erol Cetinok</span>
          </div>
        </Link>

        {/* Nav (centered, with pipes) */}
        <nav aria-label="Primary" className="nav nav--pipes">
          {navItems.map((item, idx) => (
            <span key={item.href} className="nav__item">
              <Link href={item.href} className="nav__link">
                {item.label}
              </Link>
              {idx !== navItems.length - 1 && <span className="nav__pipe">|</span>}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}