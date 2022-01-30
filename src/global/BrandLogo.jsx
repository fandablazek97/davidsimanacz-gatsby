import React from "react";
import PropTypes from "prop-types";

import brand from "Assets/svg/brand.svg";

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`w-28 h-12 ${className}`}>
      <img
        src={brand}
        alt="Logo značky"
        width="112"
        height="48"
        className="w-full h-full dark:invert"
      />
    </div>
  );
}

BrandLogo.propTypes = {
  className: PropTypes.string,
};
