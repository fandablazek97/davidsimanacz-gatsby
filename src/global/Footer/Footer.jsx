import React from "react";
import { Link } from "gatsby";

// Config
import siteConfig from "configs/siteConfig";

// Global Components
import RevealMark from "./RevealMark";
import SocialMedia from "global/SocialMedia";
import BrandLogo from "global/BrandLogo";

export default function Footer() {
  return (
    <footer className="footer w-screen text-white bg-gray-950">
      <div className="ui-wrapper py-10 lg:py-16 flex flex-col lg:flex-row gap-10 items-center lg:items-stretch justify-between text-center lg:text-left">
        <div className="space-y-8 flex flex-col items-center lg:items-start">
          <div className="w-28 h-12 dark">
            <BrandLogo />
          </div>
          <div className="">
            <span className="ui-heading text-white">David Šimana</span>
            <ul>
              <li>IČ: 05673887</li>
              <li>
                Tel:{" "}
                <a
                  href="tel:+420722214141"
                  className="ui-link text-white font-normal"
                  data-link="2"
                >
                  +420 722 21 41 41
                </a>
              </li>
              <li>
                E-mail:{" "}
                <a
                  href="mailto:info@davidsimana.cz"
                  className="ui-link text-white font-normal"
                  data-link="2"
                >
                  info@davidsimana.cz
                </a>
              </li>
              <li>Prešovská 194/15, 301 00 Plzeň 3 Vnitřní Město</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:items-end">
          <SocialMedia className="text-white mb-6" />

          <ul className="list-none flex flex-col space-y-4 lg:space-y-0 lg:space-x-10 lg:flex-row mt-auto">
            <li>
              <Link
                to="/cookies"
                className="ui-link text-white font-normal"
                data-link="2"
              >
                Cookies
              </Link>
            </li>
            <li>
              <Link
                to="/gdpr"
                className="ui-link text-white font-normal"
                data-link="2"
              >
                Zpracování osobních údajů
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-screen bg-gray-900">
        <div className="ui-wrapper py-10 flex flex-col lg:flex-row gap-10 items-center justify-between text-center lg:text-left">
          <span className="block lg:mr-auto">
            Copyright © {new Date().getFullYear()} {siteConfig.meta.shortUrl}
          </span>
          <RevealMark />
        </div>
      </div>
    </footer>
  );
}
