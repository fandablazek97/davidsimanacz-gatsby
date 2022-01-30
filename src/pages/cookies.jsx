// Stránka s cookies

import React from "react";

// Layout
import AppLayout from "layouts/AppLayout";

// Config
import siteConfig from "configs/siteConfig";

// Modules
import Seo from "global/Seo";
import Hero from "global/Hero";
import PolicyCookies from "containers/Cookies/PolicyCookies";

export default function cookiesPage() {
  return (
    <AppLayout>
      <Seo title="Zásady používání cookies" robotsEnabled={false} />

      {/* Main content */}
      <Hero title="Zásady používání cookies" />

      <div
        className="ui-wrapper ui-text-formatter pt-6 pb-32"
        data-wrapper="sm"
      >
        <PolicyCookies
          domain={siteConfig.meta.shortUrl}
          ownerName={siteConfig.client.fullName}
          adress={siteConfig.client.adress}
          ico={siteConfig.client.ico}
          validTime="šest měsíců"
          lastUpdate="16. 12. 2021"
        />
      </div>
    </AppLayout>
  );
}
