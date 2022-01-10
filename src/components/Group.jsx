import React from "react";
import PropTypes from "prop-types";

Group.defaultProps = {
  as: "div",
  className: "",
};

export default function Group({ as: Component, children, className }) {
  return <Component className={`c-group ${className}`}>{children}</Component>;
}

Group.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
