import React from "react";
import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

FadeLeft.defaultProps = {
  as: "div",
};

export default function FadeLeft({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-fade-left-hidden ${
        view ? "reveal-fade-left-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

FadeLeft.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
