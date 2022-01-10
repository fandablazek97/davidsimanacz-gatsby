import React from "react";

// Logo
import RevealLogo from "Assets/svg/reveal-badge-logo.svg";

export default function RevealMark({ className }) {
  return (
    <a
      href="https://reveal.cz"
      target="_blank"
      rel="noreferrer author external"
      className={`text-white text-xs tracking-wider min-w-[161px] font-bold py-3 px-5 rounded-md bg-black self-center my-2 transition-shadow duration-default focus-visible:a11y-primary ${className}`}
    >
      <img
        src={RevealLogo}
        alt="Logo autora webu"
        width="10"
        height="10"
        className="inline mr-3 -translate-y-0.5"
      />
      <span>Vytvořili Reveal</span>
    </a>
  );
}
