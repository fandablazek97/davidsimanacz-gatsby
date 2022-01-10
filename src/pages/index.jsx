import React from "react";

// Layout
import AppLayout from "layouts/AppLayout";

// Modules
import Seo from "global/Seo";
import Hero from "global/Hero";

// Components
import Card from "containers/Home/Card";

// Icons
import {
  MdAccessibilityNew,
  MdNightlight,
  MdPalette,
  MdFlashOn,
  MdSpeed,
  MdSearch,
} from "react-icons/md";

export default function IndesPage() {
  return (
    <AppLayout>
      <Seo
        title="Hlavní stránka"
        description="React starter se základním nastavením a komponenty pro rychlý start nového reveal projektu s naším UI."
        keywords="react, javascript, css framework, user interface"
      />

      {/* Main Content */}
      <Hero
        title="Reveal Boilerplate"
        subtitle="React starter se základním nastavením a komponenty pro rychlý start nového reveal projektu s naším UI."
      />

      <div className="ui-wrapper pt-20 pb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card
          className="col-span-1"
          Icon={<MdSpeed />}
          title="Vysoký výkon"
          text="Celý systém je optimalizovaný tak, aby výsledný produkt dosahoval maximálních možných výsledků v měření pageSpeed insights i pocitové rychlosti."
        />

        <Card
          className="col-span-1"
          Icon={<MdAccessibilityNew />}
          title="Přístupnost"
          text="Každý komponent je napsaný tak, aby splňoval WAI-ARIA standard pro
            přístupnost na webu. Některé komponenty také využívají Headless UI,
            knihovnu komponent bez stylů se zaměřením na přístupnost."
        />

        <Card
          className="col-span-1"
          Icon={<MdPalette />}
          title="Snadné přizpůsobení"
          text="CSS obsahuje pro každou svou součást sadu proměnných pro rychlé a
            snadné přizpůsobení. Včetně barev a globálních proměnných s efektem
            na celý web."
        />

        <Card
          className="col-span-1"
          Icon={<MdNightlight />}
          title="Dark mode"
          text="Hotová implementace dark modu s přepínačem. Lze samozřejmě použít
            jen jeden barevný režim, nebo lze doplnit o další."
        />

        <Card
          className="col-span-1"
          Icon={<MdFlashOn />}
          title="Rychlý vývoj"
          text="Díky jednoduché a lehce zapomatovatelné syntaxi CSS tříd společně s
            tailwindem je vývoj nového webu rychlý, produktivní a bez zbytečných
            starostí."
        />

        <Card
          className="col-span-1"
          Icon={<MdSearch />}
          title="Kompletní SEO"
          text="SEO komponent pro snadné vložení meta tagů na stránku důležitých pro
            vyhledávače. Web má také generátor sitemapy a robots.txt."
        />
      </div>
    </AppLayout>
  );
}
