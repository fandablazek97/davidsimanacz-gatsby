import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Base
import AppLayout from "layouts/AppLayout";
import Seo from "global/Seo";

import FormPlanning from "containers/FinancniPlanovani/FormPlanning";

export default function PlanningPage() {
  return (
    <AppLayout>
      <Seo title="Finanční plánování" robotsEnabled={false} />

      <div className="py-20 lg:py-36 text-center">
        {/* Úvod */}
        <header className="ui-wrapper pt-28" data-wrapper="sm">
          <h1 className="ui-heading text-primary" data-heading="xl">
            Finanční plánování
          </h1>
          <span
            className="ui-heading ui-separator leading-normal"
            data-heading="md"
            data-separator="center"
            data-separator-color="primary"
          >
            Ti z Vás, kteří mě vidí poprvé, mé jméno je David Šimana a jsem
            finanční poradce a lektor finanční gramotnosti, učím lidi finančně
            plánovat a dosahovat efektivně jejich finančních cílů.
          </span>
          {/* Úvodní text */}
          <p className="ui-lead pt-12">
            Přeložil jsem pro Vás zahraniční studii, která ověřovala nad 1269
            osob ve stejné příjmové hladině ve věku nad 50 let v USA, výsledek
            byl šokující.
          </p>
        </header>

        {/* Video embeded */}
        <section className="ui-wrapper my-16 lg:my-28" data-wrapper="sm">
          <div className="aspect-[16/9] w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DdzT5nsrt-o"
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
          <div className="w-full py-28 lg:py-44 bg-gradient-to-tl from-indigo-900 to-blue-500">
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
                Zahraniční studie, jak být 3x bohatší díky plánu ke stažení
                zdarma zde:
              </p>
            </div>
            <div className="ui-wrapper pb-20 lg:pb-32">
              <StaticImage
                src="../assets/images/financni-planovani-cover.png"
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

              <FormPlanning />
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
              data-separator-color="primary"
            >
              Proč spolupracovat se mnou?
            </h2>
            <ul className="ui-list">
              <li>
                Finanční plán <strong>šitý na míru</strong>
              </li>
              <li>Víte přesně, co se s Vašimi penězi děje a proč</li>
              <li>Pomůže Vám definovat realistický investiční cíl</li>
              <li>
                <strong>Certifikovaný</strong> profesionál ve finančnictví
              </li>
              <li>Investujeme nízkonákladově – ETF</li>
              <li>VIP klientská sekce</li>
              <li>Vzdělávám své klienty</li>
              <li>Ušetřím Vám čas</li>
            </ul>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
