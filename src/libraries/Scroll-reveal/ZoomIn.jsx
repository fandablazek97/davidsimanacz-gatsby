import React from "react";
import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

ZoomIn.defaultProps = {
  as: "div",
};

export default function ZoomIn({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-zoom-in-hidden ${
        view ? "reveal-zoom-in-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

ZoomIn.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
