import React from "react";
import PropTypes from "prop-types";

export default function Switch({
  as: Component,
  id,
  name,
  children,
  isDisabled,
  isRequired,
  className,
  ...rest
}) {
  return (
    <Component className={`c-switch w-full h-auto ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      />
      <label htmlFor={id} name={name} className="ml-3">
        {children}
      </label>
    </Component>
  );
}

Switch.defaultProps = {
  as: "span",
  id: "switch-id",
  name: "switch-name",
  children: "Switch label",
  isDisabled: false,
  isRequired: false,
  className: "",
};

Switch.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};
