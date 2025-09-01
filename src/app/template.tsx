"use client";

import { animatePageIn } from "@/components/pageTransition/animations";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    // Extract page name from pathname
    const name =
      pathname === "/"
        ? "Home"
        : pathname
            .slice(1)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());
    setPageName(name);

    // Update the page name in the DOM immediately, then animate
    const pageNameElement = document.querySelector("#page-name-display span");
    if (pageNameElement) {
      pageNameElement.textContent = name;
    }

    // Ensure transition element is immediately visible and positioned
    const curveTransition = document.getElementById('curve-transition');
    const curvePath = document.getElementById('curve-path');
    if (curveTransition && curvePath) {
      curveTransition.style.visibility = 'visible';
      curvePath.setAttribute('d', 'M 0,0 Q 50,-15 100,0 L 100,100 Q 50,115 0,100 Z');
    }

    animatePageIn();
  }, [pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Curved Transition Element */}
      <div
        id="curve-transition"
        className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
        style={{ visibility: 'visible' }}
      >
        {/* Main curve shape */}
        <svg
          id="curve-svg"
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="curveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#443927" />
              <stop offset="100%" stopColor="#443927" />
            </linearGradient>
            <filter id="curveGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            id="curve-path"
            d="M 0,0 Q 50,-15 100,0 L 100,100 Q 50,115 0,100 Z"
            fill="url(#curveGradient)"
            filter="url(#curveGlow)"
            style={{
              filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.5))",
            }}
          />
        </svg>

        {/* Page name display */}
        <div
          id="page-name-display"
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <span className="text-6xl md:text-6xl font-serif tracking-tight text-white">
            {pageName}
          </span>
        </div>
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
