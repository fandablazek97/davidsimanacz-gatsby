import React from "react";
import PropTypes from "prop-types";

import brand from "Assets/svg/brand.svg";

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`w-24 h-10 ${className}`}>
      <img
        src={brand}
        alt="Logo značky"
        width="96"
        height="40"
        className="w-full h-full dark:invert"
      />
    </div>
  );
}

BrandLogo.propTypes = {
  className: PropTypes.string,
};
