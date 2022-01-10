import React from "react";
import PropTypes from "prop-types";

Badge.defaultProps = {
  as: "span",
  children: "Badge",
  colorScheme: "success",
  className: "",
};

export default function Badge({
  as: Component,
  children,
  colorScheme,
  className,
  ...rest
}) {
  return (
    <Component
      className={`py-1.5 px-2 rounded-default bg-opacity-15 text-sm uppercase font-sans font-semibold leading-none tracking-widest inline-flex items-center justify-center ${className} ${
        colorScheme === "success"
          ? "bg-success-500 text-success-700 dark:text-success-200"
          : ""
      } ${
        colorScheme === "error"
          ? "bg-error-500 text-error-700 dark:text-error-200"
          : ""
      } ${
        colorScheme === "warning"
          ? "bg-warning-500 text-warning-700 dark:text-warning-200"
          : ""
      } ${
        colorScheme === "info"
          ? "bg-info-500 text-info-700 dark:text-info-200"
          : ""
      }`}
      {...rest}
    >
      {children}
    </Component>
  );
}

Badge.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  colorScheme: PropTypes.oneOf(["success", "error", "warning", "info"]),
  className: PropTypes.string,
};
