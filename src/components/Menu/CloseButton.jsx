import React from "react";
import PropTypes from "prop-types";

// Close icon
import { HiX } from "react-icons/hi";

export default function CloseButton({
  colorScheme = "both",
  className = "",
  ...rest
}) {
  return (
    <button
      className={`p-2 inline-flex items-center justify-center cursor-pointer leading-none
      rounded-default bg-opacity-0
      hover:bg-opacity-10 dark:hover:bg-opacity-15 focus:bg-opacity-10 dark:focus:bg-opacity-15
      focus:a11y-primary
      transition-colors duration-default
      ${colorScheme === "both" && "text-rich bg-default"}
      ${colorScheme === "dark" && "text-white bg-gray-300"}
      ${colorScheme === "light" && "text-gray-950 bg-gray-700"}
      ${className}`}
      {...rest}
    >
      <span className="sr-only">Zavřít</span>
      <HiX className="text-3xl" />
    </button>
  );
}

CloseButton.propTypes = {
  colorScheme: PropTypes.oneOf(["both", "dark", "light"]),
  className: PropTypes.string,
};
