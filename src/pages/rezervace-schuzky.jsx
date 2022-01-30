import React from "react";

import AppLayout from "layouts/AppLayout";
import Seo from "global/Seo";
import Calendly from "containers/RezervaceSchuzky/Calendly";
import Button from "components/Button";

// Icons
import { HiOutlineDownload } from "react-icons/hi";

export default function MeetingReservation() {
  return (
    <AppLayout>
      <Seo
        title="Rezervace schůzky"
        description="Jmenuji se David Šimana a pomohu Vám splnit vaše finanční cíle. Rezervujte si schůzku a začněte Vaši na cestu k rentě. "
      />

      <section className="w-screen h-auto bg-gradient-to-tl from-indigo-600 to-emerald-200">
        <div
          className="ui-wrapper py-48 md:py-64 text-center"
          data-wrapper="sm"
        >
          <header>
            <h1
              className="font-bold text-4xl md:text-5xl lg:text-6xl ui-separator text-rich mb-10"
              data-heading="xl"
              data-separator="center"
              data-separator-color="current"
            >
              Jsem David Šimana, tvůj privátní bankéř
            </h1>
            <p className="ui-lead mx-auto">
              Touto cestou bych se chtěl představit jako potenciální konzultant
              pro správu Vašeho majetku...
            </p>
          </header>

          {/* Video embeded */}
          <div className="aspect-[16/9] w-full my-32 lg:my-40 shadow-2xl">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/y2x-OpPe6Hc"
              title="YouTube video player"
              frameBorder="0"
              className="w-full h-full bg-gray-400"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2
            className="ui-heading ui-separator mb-10"
            data-heading="lg"
            data-separator="center"
            data-separator-color="current"
          >
            Stáhněte si materiály k první schůzce
          </h2>
          <Button
            href="https://davidsimana.cz/download/Podklady-k-prvni-schuzce.xlsx"
            download
            target="_blank"
            size="lg"
            IconLeft={<HiOutlineDownload />}
            className="mx-auto shadow-xl"
          >
            Stáhnout materiály
          </Button>
        </div>
      </section>

      {/* Calendly */}
      <section className="ui-wrapper mt-20 lg:mt-32 mb-12">
        <h2
          className="ui-heading ui-separator text-center text-primary mb-8"
          data-heading="lg"
          data-separator="center"
          data-separator-color="current"
        >
          Vyberte si termín
        </h2>
        <Calendly />
      </section>

      {/* Proč spolupracovat */}
      <section className="py-28 lg:py-40 bg-gray-200">
        <div className="ui-wrapper" data-wrapper="sm">
          <h2
            className="ui-heading ui-separator text-center text-primary mb-16"
            data-heading="lg"
            data-separator="center"
            data-separator-color="current"
          >
            Proč se mnou spolupracovat?
          </h2>
          <ul className="space-y-8 lg:space-y-12 lg:mx-10">
            <li>
              <h3 className="ui-heading" data-heading="md">
                Řešení šité na míru
              </h3>
              <p>
                Zaměřuji se na strategické finanční plánování pro osobní
                finance.
              </p>
            </li>
            <li>
              <h3 className="ui-heading" data-heading="md">
                Nejvyšší kvalita finančního plánování
              </h3>
              <p>
                To co nejvíce oceníte na mé práci je, že poskytuji nejvyšší
                kvalitu finančního plánování a poradenství, jsem certifikovaný
                profesionál ve finančnictví a tím se odlišuji od zbytku trhu.
              </p>
            </li>
            <li>
              <h3 className="ui-heading" data-heading="md">
                Vzdělávám své klienty
              </h3>
              <p>
                Soukromé konzultace a pořádám semináře finanční gramotnosti pro
                širokou veřejnost, budeme se společně bavit o velkých tématech
                jako je bydlení, renta.
              </p>
            </li>
            <li>
              <h3 className="ui-heading" data-heading="md">
                O své klienty se starám dlouhodobě
              </h3>
              <p>
                Zakládám si na etickém a férovém přístupu. Důležité je vytvoření
                vzájemné důvěry a pochopení. Mám velkou radost, že se nakonec z
                klientů stávají moji přátelé.
              </p>
            </li>
            <li>
              <h3 className="ui-heading" data-heading="md">
                První schůzka online
              </h3>
              <p>
                V kalendáři si zvolíte termín den a hodinu, kdy si dáme on-line
                schůzku a po vyplnění jména a emailu odešlete rezervaci.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </AppLayout>
  );
}
