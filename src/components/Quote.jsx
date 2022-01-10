import React from "react";
import PropTypes from "prop-types";

export default function Quote({
  name = "Jméno Příjmení",
  className = "",
  children,
}) {
  return (
    <blockquote
      className={`w-full border-l-4 border-primary pl-5 py-2 ${className}`}
    >
      <div className="text-base md:text-lg text-default">{children}</div>
      <div className="mt-5 flex items-center">
        <span className="w-5 h-px bg-muted mr-5"></span>
        <span className="block text-base md:text-sm text-muted">{name}</span>
      </div>
    </blockquote>
  );
}

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
