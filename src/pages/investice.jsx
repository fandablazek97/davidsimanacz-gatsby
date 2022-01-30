import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Base
import AppLayout from "layouts/AppLayout";
import Seo from "global/Seo";

import FormInvestment from "containers/Investice/FormInvestment";

export default function InvesticePage() {
  return (
    <AppLayout>
      <Seo title="Investice" robotsEnabled={false} />

      <div className="py-20 lg:py-36 text-center">
        {/* Úvod */}
        <header className="ui-wrapper pt-28" data-wrapper="sm">
          <h1 className="ui-heading text-primary" data-heading="xl">
            Jsem David Šimana, tvůj privátní bankéř
          </h1>
          <span
            className="ui-heading ui-separator leading-normal"
            data-heading="md"
            data-separator="center"
          >
            Touto cestou bych se chtěl představit jako potenciální konzultant
            pro správu Vašeho majetku...
          </span>
          {/* Úvodní text */}
          <p className="ui-lead pt-12">
            Pokud vydělám nějaké peníze, tak generuji zisk. Pokládám si tak
            otázku, co s těmi penězi udělat, jak s nimi naložit... Máme jen dvě
            možnosti.
          </p>
        </header>

        {/* Video embeded */}
        <section className="ui-wrapper my-16 lg:my-28" data-wrapper="sm">
          <div className="aspect-[16/9] w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/fUD9WB0p3cw"
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
          <div className="w-full py-28 lg:py-44 bg-gradient-to-tl from-indigo-900 to-teal-500">
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
                Vzorec pro výpočet renty, který by měl vědět každý investor před
                tím, než udělá první krok.
              </p>
            </div>
            <div className="ui-wrapper pb-20 lg:pb-32">
              <StaticImage
                src="../assets/images/investice-cover.png"
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

              <FormInvestment />
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
            <ul className="ui-list">
              <li>Řešení na míru</li>
              <li>Investiční doporučení na základě transparentní analýzy</li>
              <li>Víte přesně, co se s Vašimi penězi děje a proč</li>
              <li>Certifikovaný profesionál ve finančnictví</li>
              <li>Pomůže Vám definovat realistický investiční cíl</li>
              <li>Investujeme nízkonákladově – ETF</li>
              <li>VIP klientská sekce</li>
            </ul>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
