import React from "react";
import PropTypes from "prop-types";
import useDarkMode from "use-dark-mode";

export default function ThemeSwitcher({ className = "" }) {
  // Nastavení Dark modu
  const darkMode = useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
    storageKey: "dark-mode-reveal", // klíč pro uložení do localstorage - pokud mají dva weby stejný klíč budou sdílet i preferenci dark modu
  });

  return (
    <>
      <div className={`c-theme-switcher ${className}`}>
        <input
          type="checkbox"
          checked={darkMode.value}
          onChange={darkMode.toggle}
          aria-label="zapnout nebo vypnout tmavý vzhled"
        />
      </div>
    </>
  );
}

ThemeSwitcher.propTypes = {
  className: PropTypes.string,
};
