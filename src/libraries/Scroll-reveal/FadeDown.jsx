import React from "react";
import PropTypes from "prop-types";
import { useScrollReveal } from "hooks/useScrollReveal";

FadeDown.defaultProps = {
  as: "div",
};

export default function FadeDown({
  as: Component,
  children,
  className = "",
  ...rest
}) {
  const [element, view] = useScrollReveal();

  return (
    <Component
      ref={element}
      className={`lib-scroll-reveal reveal-fade-down-hidden ${
        view ? "reveal-fade-down-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

FadeDown.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
