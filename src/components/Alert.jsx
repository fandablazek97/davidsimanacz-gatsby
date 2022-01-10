import React from "react";
import PropTypes from "prop-types";

export default function Alert({
  children,
  colorScheme = "success",
  className = "",
}) {
  return (
    <div
      className={`w-full h-auto p-4 md:p-7 rounded-default leading-normal bg-opacity-15 ${className} ${
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
    >
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  colorScheme: PropTypes.oneOf(["success", "error", "warning", "info"]),
  className: PropTypes.string,
};
