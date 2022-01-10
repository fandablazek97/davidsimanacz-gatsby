// Demo stránka s kontaktním formulářem

import React from "react";

// Layout
import AppLayout from "layouts/AppLayout";

// Modules
import Seo from "global/Seo";
import Hero from "global/Hero";
import FormContact from "containers/Contact/FormContact";

export default function ContactPage() {
  return (
    <AppLayout>
      <Seo
        title="Kontakt"
        description="Výchozí předpřipravený kontaktní formulář, který lze snadno vizuálně upravit a k jeho plné funkčnosti stačí doplnit údaje do funkce z email-js."
        keywords=""
      />

      {/* Main content */}
      <Hero
        title="Kontaktujte nás"
        subtitle="Výchozí předpřipravený kontaktní formulář, který lze snadno vizuálně upravit a k jeho plné funkčnosti stačí doplnit údaje do funkce z email-js."
      />

      <div className="ui-wrapper pt-16 pb-24" data-wrapper="sm">
        <h2 className="ui-heading" data-heading="lg">
          Kontaktní formulář
        </h2>
        <FormContact />
      </div>
    </AppLayout>
  );
}
