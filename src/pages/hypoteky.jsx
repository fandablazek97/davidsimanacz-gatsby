import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Base
import AppLayout from "layouts/AppLayout";
import Seo from "global/Seo";

import FormMortgages from "containers/Hypoteky/FormMortgages";

export default function MortgagesPage() {
  return (
    <AppLayout>
      <Seo title="Hypotéky" robotsEnabled={false} />

      <div className="py-20 lg:py-36 text-center">
        {/* Úvod */}
        <header className="ui-wrapper pt-28" data-wrapper="sm">
          <h1 className="ui-heading text-secondary" data-heading="xl">
            Jsem David Šimana, tvůj finanční expert
          </h1>
          <span
            className="ui-heading ui-separator leading-normal"
            data-heading="md"
            data-separator="center"
          >
            Koupě či výstavba rodinného domu je pro mnoho lidí jedním z
            největších finančních cílů.
          </span>
          {/* Úvodní text */}
          <p className="ui-lead pt-12">
            Touto cestou bych se chtěl představit jako potenciální konzultant
            pro Vaši hypotéku a být k dispozici pro jakékoliv dotazy. Pokud
            financování aktuálně řešíte, nebo vás to v dohledné době čeká,
            rovnou mi napište nebo zavolejte.
          </p>
        </header>

        {/* Video embeded */}
        <section className="ui-wrapper my-16 lg:my-28" data-wrapper="sm">
          <div className="aspect-[16/9] w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/YWe8SHD6Tlk"
              title="YouTube video player"
              frameBorder="0"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Text pod videem */}
        <section className="mt-16 lg:mt-36">
          <div className="w-full py-28 lg:py-44 bg-gradient-to-tl from-indigo-800 to-emerald-500">
            <div className="ui-wrapper pb-20 lg:pb-32" data-wrapper="sm">
              <h2
                className="ui-heading text-white ui-separator"
                data-heading="xl"
                data-separator="center"
                data-separator-color="current"
              >
                Stáhněte si užitečné materiály zdarma
              </h2>
              <p className="ui-lead text-white text-center mx-auto">
                Hypo bez příjmu + proces sjednání hypotéky
              </p>
            </div>
            <div className="ui-wrapper pb-20 lg:pb-32">
              <StaticImage
                src="../assets/images/hypoteky-cover.png"
                alt="Ukázka materiálů k zaslání"
                placeholder="blurred"
                layout="fullWidth"
                objectFit="contain"
                objectPosition="50% 50%"
                className="z-1 w-full lg:max-w-5xl mx-auto"
                formats={["avif", "webp"]}
                loading="lazy"
              />
            </div>
            <div className="ui-wrapper" data-wrapper="sm">
              <h2
                className="ui-heading text-white text-center mb-8"
                data-heading="lg"
              >
                Kam vám mohu zaslat materiály?
              </h2>

              <FormMortgages />
            </div>
          </div>
        </section>

        <section>
          <div
            className="ui-wrapper pt-16 lg:pt-32 flex flex-col items-center justify-center"
            data-wrapper="sm"
          >
            {/* List */}
            <h2
              className="ui-heading ui-separator"
              data-heading="lg"
              data-separator="center"
            >
              Proč spolupracovat se mnou?
            </h2>
            <ul className="ui-list" data-list-color="secondary">
              <li>Jednoduše a srozumitelně</li>
              <li>Řešení šité na míru</li>
              <li>Vzdělávám své klienty</li>
              <li>Ušetřím Vám čas</li>
              <li>VIP klientská sekce</li>
            </ul>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
