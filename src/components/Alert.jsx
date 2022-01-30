import React from "react";
import PropTypes from "prop-types";

export default function Alert({
  children,
  colorScheme = "success",
  className = "",
}) {
  return (
    <div
      className={`w-full h-auto p-4 py-7 md:p-7 rounded-default leading-normal ${className} ${
        colorScheme === "success" ? "bg-success-500 text-white" : ""
      } ${colorScheme === "error" ? "bg-error-500 text-white" : ""} ${
        colorScheme === "warning" ? "bg-warning-500 text-white" : ""
      } ${colorScheme === "info" ? "bg-info-500 text-white" : ""}`}
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
