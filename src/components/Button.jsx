import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// Loading icon
import { CgSpinner } from "react-icons/cg";

const Button = forwardRef(
  (
    {
      as: Component,
      size,
      IconLeft,
      IconRight,
      isLoading,
      isDisabled,
      onClick,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        onClick={onClick}
        disabled={isDisabled}
        className={`px-[1.5em] py-[1.25em] inline-flex items-center justify-center
        text-white uppercase font-sans font-semibold leading-none tracking-widest
        bg-primary rounded-default overflow-hidden
        transition duration-default
        group relative z-0
        focus:a11y-primary 
        ${size === "base" ? "text-base" : ""}
        ${size === "xs" ? "text-xs" : ""} 
        ${size === "sm" ? "text-sm" : ""}
        ${size === "lg" ? "text-lg" : ""}
        ${size === "xl" ? "text-xl" : ""}
        ${
          isLoading
            ? "cursor-not-allowed pointer-events-none"
            : "cursor-pointer"
        } ${
          isDisabled
            ? "grayscale opacity-50 pointer-events-none"
            : "opacity-100"
        } ${className}`}
        {...rest}
      >
        {/* Hover span */}
        <span className="absolute z-0 inset-[-5%] w-[110%] h-[110%] bg-body bg-opacity-40 dark:bg-opacity-40 scale-x-0 opacity-0 -skew-x-12 group-hover:scale-x-110 group-hover:opacity-100 transform-gpu transition duration-400 ease-out-cubic"></span>

        {/* Left icon */}
        {IconLeft != null && (
          <span
            className={`z-1 mr-3 scale-140 ${isLoading ? "invisible" : ""}`}
          >
            {IconLeft}
          </span>
        )}

        {/* Button text */}
        <span className={`z-1 ${isLoading ? "invisible" : ""}`}>
          {children}
        </span>

        {/* Right icon */}
        {IconRight != null && (
          <span
            className={`z-1 ml-3 scale-140 ${isLoading ? "invisible" : ""}`}
          >
            {IconRight}
          </span>
        )}

        {/* Loading spinner */}
        {isLoading && (
          <CgSpinner className="absolute z-1 inset-0 m-auto w-[2em] h-[2em] animate-spin-fast" />
        )}
      </Component>
    );
  }
);

Button.displayName = "Button"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

Button.defaultProps = {
  as: "a",
  children: "This is button",
  size: "base",
  IconLeft: null,
  IconRight: null,
  isLoading: false,
  isDisabled: false,
  className: "",
};

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "base", "lg", "xl"]),
  IconLeft: PropTypes.element,
  IconRight: PropTypes.element,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
