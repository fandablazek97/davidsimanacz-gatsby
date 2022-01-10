import React from "react";
import PropTypes from "prop-types";

export default function BurgerButton({
  className,
  isActivated = false,
  ...rest
}) {
  return (
    <button
      className={`w-[40px] h-[36px] p-[10px] flex flex-col items-center justify-between focus-visible:a11y-primary ${className}`}
      {...rest}
    >
      <span className="sr-only">Otevřít / zavřít menu</span>
      <span
        aria-hidden="true"
        className={`block w-[28px] h-[2px] bg-rich rounded-full transform-gpu transition duration-default ${
          isActivated ? "-rotate-45 translate-y-[7px]" : ""
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block w-[28px] h-[2px] bg-rich rounded-full transform-gpu transition duration-default ${
          isActivated ? "opacity-0 -translate-x-1/5" : ""
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block w-[28px] h-[2px] bg-rich rounded-full transform-gpu transition duration-default ${
          isActivated ? "rotate-45 translate-y-[-7px]" : ""
        }`}
      ></span>
    </button>
  );
}

BurgerButton.propTypes = {
  className: PropTypes.string,
  isActivated: PropTypes.bool,
};
