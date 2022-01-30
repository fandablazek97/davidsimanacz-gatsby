import React from "react";
import PropTypes from "prop-types";

export default function Hero({ title }) {
  return (
    <header className="w-screen h-96" role="banner">
      <div
        className="ui-wrapper h-full flex flex-col justify-center items-center"
        data-wrapper="sm"
      >
        <h1 className="ui-heading w-full text-center text-3xl sm:text-5xl lg:text-6xl mb-0 mt-16">
          {title}
        </h1>
      </div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};
