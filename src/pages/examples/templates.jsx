// Stránka sloužící pouze pro konfiguraci komponentů, vzhledu a celkovou ukázku
// Po konfiguraci soubor smazat

import React from "react";

// Layout
import AppLayout from "layouts/AppLayout";

// Modules
import Seo from "global/Seo";
import Hero from "global/Hero";
import Slider from "libraries/Swiper/Slider";
import Carousel from "libraries/Swiper/Carousel";

export default function modulesPage() {
  return (
    <AppLayout>
      <Seo
        title="React moduly"
        description="Ukázka reálného použití připravených react modulů."
        keywords=""
      />

      {/* Main Content */}
      <Hero
        title="React moduly"
        subtitle="Ukázka reálného použití použití připravených react modulů."
      />

      <div className="ui-wrapper mb-28">
        <h2 className="ui-heading text-center" data-heading="lg">
          Slider
        </h2>
        <Slider />
      </div>

      <div className="ui-wrapper mb-28">
        <h2 className="ui-heading text-center" data-heading="lg">
          Carousel
        </h2>
        <Carousel />
      </div>
    </AppLayout>
  );
}
