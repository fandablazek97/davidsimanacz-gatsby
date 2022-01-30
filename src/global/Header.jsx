// Je nutné všechny ikony vygenerovat a nahradit soubory ve složce `public/favicon`
// Odkaz na geneátor favikon: https://realfavicongenerator.net

import React from "react";
import Helmet from "react-helmet";

// Config
import siteConfig from "configs/siteConfig";

export default function Header() {
  return (
    <Helmet>
      <html lang={siteConfig.meta.language} />
      <meta charSet="utf-8" />
      <meta name="author" content={siteConfig.meta.author} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {/* Theme color */}
      <meta name="theme-color" content="#3e2696" />
    </Helmet>
  );
}
