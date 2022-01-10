import React from "react";
import PropTypes from "prop-types";

export default function Divider({ className = "" }) {
  return (
    <hr
      className={`block border-none mx-auto w-full h-px bg-current opacity-30 ${className}`}
    />
  );
}

Divider.propTypes = {
  className: PropTypes.string,
};
