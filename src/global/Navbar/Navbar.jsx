// BUG - při otevření menu a roztažení okna na velikost desktopu a větší
// zmizí křížek a navigace nejde zavřít -> v podstatě nemá vliv na reálnou funkčnost

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

// Hooks & Utils
import useNavbar from "hooks/useNavbar";
import { isBrowser } from "functions/isBrowser";

// Global Components
import BurgerMenu from "./BurgerButton";
import BrandLogo from "global/BrandLogo";
import SocialMedia from "global/SocialMedia";
import ThemeSwitcher from "global/ThemeSwitcher";

// Links from config
import { mainLinks, callToAction } from "configs/links";

export default function Navbar() {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  // Funkce pro otevírání / zavírání menu po kliknutí na burger menu
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (isBrowser) {
      document.body.classList.toggle("helper-scroll-lock");
    }
  }

  function closeMenu() {
    setIsMenuOpen(false);
    if (isBrowser) {
      document.body.classList.remove("helper-scroll-lock");
    }
  }

  // use Scroll Listener hook
  const scroll = useNavbar();

  useEffect(() => {
    // Aktivuje třídu po scrollnutí o více než 60px
    if (scroll.y > 60) {
      setIsNavScrolled(true);
    } else {
      setIsNavScrolled(false);
    }

    // Skryje / ukáže navigaci na základě podmínky
    if (scroll.y > 540 && scroll.y - scroll.lastY > 0) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <nav
      aria-label="Hlavní navigace webu"
      className={`w-screen fixed z-100 transform-gpu transition-[background,transform,height,box-shadow] duration-500 ease-default ${
        isNavScrolled
          ? "h-20 bg-body shadow-soft-xl dark:shadow-none"
          : "h-20 md:h-32"
      } ${isNavVisible ? "translate-y-0" : "-translate-y-full shadow-none"}`}
    >
      {/* Vnitřní wrapper navigace - šířku menu upravit zde */}
      <div
        className="ui-wrapper h-full flex items-center justify-between relative"
        data-wrapper="lg"
      >
        {/* Logo navigace */}
        <Link to="/" onClick={closeMenu} className="mr-auto z-10">
          <BrandLogo />
        </Link>

        {/* Desktop - hlavní list s položkami menu */}
        <ul className="list-none mr-5 xl:mr-8 space-x-7 xl:space-x-12 hidden lg:flex">
          {mainLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="ui-link uppercase text-sm text-rich"
                data-link="2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop & mobile - Theme toggler */}
        <ThemeSwitcher className="mr-5 xl:mr-8" />

        {/* Desktop - Call to action */}
        <a
          href={callToAction[0].link}
          className="ui-link text-xl text-primary self-center hidden lg:inline-flex"
          data-link="4"
        >
          {callToAction[0].label}
        </a>

        {/* Burger menu */}
        <BurgerMenu
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu-list"
          aria-label="Otevřít / zavřít hlavní menu"
          className="lg:hidden z-10"
          isActivated={isMenuOpen}
        />
      </div>

      {/* ------------------------- */}
      {/* Mobile - Full screen menu */}
      <div
        className={`block fixed inset-0 w-screen h-screen bg-body transform-gpu transition-visibility ease-default ${
          isMenuOpen
            ? "opacity-100 visible duration-400"
            : "opacity-0 invisible duration-150"
        }`}
      >
        {/* Vnitřní wrapper mobilního menu */}
        <div className="ui-wrapper h-full pt-24 xs:pt-28 pb-44 flex flex-col items-center justify-between">
          {/* Mobile - Menu list s položkami */}
          <ul
            id="mobile-menu-list"
            className={`list-none space-y-5 flex flex-col text-center items-center justify-start transform-gpu transition ease-default ${
              isMenuOpen
                ? "translate-y-0 opacity-100 duration-600 delay-150"
                : "-translate-y-12 opacity-0 duration-0 delay-150"
            }`}
          >
            {mainLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="ui-link text-xl uppercase text-rich font-bold"
                  data-link="2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile - Call to action list */}
          <ul
            className={`list-none my-10 xs:my-14 space-y-5 flex flex-col text-center items-center justify-start transform-gpu transition ease-default ${
              isMenuOpen
                ? "translate-y-0 opacity-100 duration-600 delay-300"
                : "-translate-y-12 opacity-0 duration-0 delay-150"
            }`}
          >
            {/* Mobile - Call to action items */}
            {callToAction.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="ui-link text-2xl text-primary font-semibold normal-case"
                  data-link="4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile - Odkazy na sociální sítě */}
          <SocialMedia
            className={`mt-auto transform-gpu transition ease-default ${
              isMenuOpen
                ? "translate-y-0 opacity-100 duration-600 delay-450"
                : "-translate-y-12 opacity-0 duration-0 dur delay-150"
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
