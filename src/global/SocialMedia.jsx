import React from "react";
import PropTypes from "prop-types";

// Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa";

export default function SocialMedia({ className, ...rest }) {
  return (
    <div
      className={`social-icons flex space-x-7 text-2xl no-underline ${className}`}
      {...rest}
    >
      <a
        href="https://www.facebook.com/davidsimanaFP"
        target="blank"
        rel="noreferrer me external"
        aria-label="facebook"
        className="p-2 hover:text-blue-600 transition-colors duration-default"
      >
        <FaFacebookF aria-label="facebook" />
      </a>
      <a
        href="https://www.instagram.com/david_simana/"
        target="blank"
        rel="noreferrer me external"
        aria-label="instagram"
        className="p-2 hover:text-red-500 transition-colors duration-default"
      >
        <FaInstagram aria-label="instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/david-%C5%A1imana-a347401b4/"
        target="blank"
        rel="noreferrer me external"
        aria-label="linkedin"
        className="p-2 hover:text-cyan-600 transition-colors duration-default"
      >
        <FaLinkedinIn aria-label="linkedin" />
      </a>
      <a
        href="https://open.spotify.com/show/5Ws3Atan2TyglkKbApmeYN"
        target="blank"
        rel="noreferrer me external"
        aria-label="spotify"
        className="p-2 hover:text-emerald-500 transition-colors duration-default"
      >
        <FaSpotify aria-label="spotify" />
      </a>
    </div>
  );
}

SocialMedia.propTypes = {
  className: PropTypes.string,
};
