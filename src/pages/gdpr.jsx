// Stránka zpracování osobních údajů
import React from "react";

// Config
import siteConfig from "configs/siteConfig";

// Layout
import AppLayout from "layouts/AppLayout";

// Modules
import Seo from "global/Seo";
import Hero from "global/Hero";
import PolicyGdpr from "containers/Gdpr/PolicyGdpr";

export default function gdprPage() {
  return (
    <AppLayout>
      <Seo title="Ochrana osobních údajů" description="" keywords="" />

      {/* Main content */}
      <Hero title="Ochrana osobních údajů" />

      <div
        className="ui-wrapper ui-text-formatter pt-20 pb-32"
        data-wrapper="sm"
      >
        <PolicyGdpr
          ownerName={siteConfig.client.fullName}
          adress={siteConfig.client.adress}
          email={siteConfig.client.email}
          phone={siteConfig.client.phone}
          ico={siteConfig.client.ico}
          takesEffectDate={siteConfig.launchDate}
        />
      </div>
    </AppLayout>
  );
}
