import React from "react";
import PropTypes from "prop-types";

export default function Number({
  as: Component,
  id,
  name,
  label,
  isDisabled,
  isRequired,
  className,
  ...rest
}) {
  return (
    <Component className={`block w-full ${className}`}>
      <label htmlFor={id} name={name} className="sr-only">
        {label}
      </label>
      <input
        type="number"
        id={id}
        name={name}
        className={`w-full h-auto px-4 py-2.5
        text-base text-rich font-normal placeholder:text-rich placeholder:opacity-60 
        bg-body-200 rounded-default border-2 border-body-200 
        transition duration-default 
        focus:bg-transparent focus:border-primary focus:!outline-none focus:ring-1 focus:ring-primary ${
          isDisabled
            ? "cursor-not-allowed pointer-events-none opacity-60"
            : "cursor-text opacity-100"
        }`}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      />
    </Component>
  );
}

Number.defaultProps = {
  as: "span",
  id: "number-id",
  name: "number-name",
  label: "Number label",
  isDisabled: false,
  isRequired: false,
  className: "",
};

Number.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};
