import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

// Config
import siteConfig from "configs/siteConfig";

export default function Seo({
  title = "Název stránky",
  description = siteConfig.meta.description,
  keywords = "",
  robotsEnabled = "true",
}) {
  return (
    <Helmet>
      {/* main SEO */}
      <title>{`${siteConfig.meta.siteName} | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Social media */}
      <meta property="og:site_name" content={siteConfig.meta.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/* Robots */}
      {robotsEnabled ? (
        <meta name="robots" content="index, follow" />
      ) : (
        <meta name="robots" content="noindex" />
      )}
    </Helmet>
  );
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  robotsEnabled: PropTypes.bool,
};
