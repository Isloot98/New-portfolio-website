import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-50 md:sticky md:top-4 text-white flex justify-center ${
        scrolled
          ? "bg-black transition-all duration-500"
          : "bg-transparent transition-all duration-500"
      }`}
    >
      <nav className="flex items-center justify-between p-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              aria-label="home-page"
              className="text-lg font-semibold hover:text-slate-100 relative"
              onMouseEnter={() => setHoveredLink("home")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-100 ${
                  hoveredLink === "home" ? "scale-x-1" : "scale-x-0"
                } origin-left transition-transform duration-500 ease-in-out`}
              ></span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              aria-label="Projects"
              className="text-lg font-semibold hover:text-slate-100 relative"
              onMouseEnter={() => setHoveredLink("projects")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Projects
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-100 ${
                  hoveredLink === "projects" ? "scale-x-1" : "scale-x-0"
                } origin-left transition-transform duration-500 ease-in-out`}
              ></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              aria-label="about"
              className="text-lg font-semibold hover:text-slate-100 relative"
              onMouseEnter={() => setHoveredLink("about")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              About
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-100 ${
                  hoveredLink === "about" ? "scale-x-1" : "scale-x-0"
                } origin-left transition-transform duration-500 ease-in-out`}
              ></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
