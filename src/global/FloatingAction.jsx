import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import { Link } from "gatsby";

// Icon
import { IoChatbubblesSharp } from "react-icons/io5";

export default function FloatingAction() {
  return (
    <AnchorLink
      to="/#kontakt"
      stripHash
      className="no-underline w-16 h-16 fixed z-[90] right-7 bottom-8 flex items-center justify-center rounded-full group focus-visible:a11y-primary"
      aria-label="Kontakt"
      role="button"
    >
      <span className="absolute inset-0 w-full h-full rounded-full shadow-md bg-primary group-hover:scale-115 transform-gpu transition-transform duration-300 ease-out-back"></span>
      <span className="sr-only">Kontaktujte nás</span>
      <IoChatbubblesSharp
        className="text-white text-[1.75rem] z-1"
        aria-label="Kontakt"
      />
    </AnchorLink>
  );
}
