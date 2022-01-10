import React from "react";
import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

FadeRight.defaultProps = {
  as: "div",
};

export default function FadeRight({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-fade-right-hidden ${
        view ? "reveal-fade-right-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

FadeRight.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
