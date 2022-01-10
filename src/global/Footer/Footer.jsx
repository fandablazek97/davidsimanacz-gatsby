import React from "react";
import { Link } from "gatsby";

// Config
import siteConfig from "configs/siteConfig";

// Global Components
import RevealMark from "./RevealMark";

export default function Footer() {
  return (
    <footer className="footer w-screen border-t border-default border-opacity-20">
      <div
        className="ui-wrapper py-10 lg:py-16 space-y-6 lg:space-y-0 flex flex-col items-center justify-between text-center lg:flex-row"
        data-wrapper="lg"
      >
        <span className="block lg:mr-auto">
          Copyright © {new Date().getFullYear()} {siteConfig.meta.shortUrl}
        </span>
        <ul className="list-none flex flex-col space-y-4 lg:space-y-0 lg:space-x-6 xl:space-x-10 lg:flex-row lg:mr-8 xl:mr-16">
          <li>
            <Link
              to="/cookies"
              className="ui-link text-default font-normal"
              data-link="2"
            >
              Cookies
            </Link>
          </li>
          <li>
            <Link
              to="/gdpr"
              className="ui-link text-default font-normal"
              data-link="2"
            >
              Zpracování osobních údajů
            </Link>
          </li>
        </ul>
        <RevealMark />
      </div>
    </footer>
  );
}
