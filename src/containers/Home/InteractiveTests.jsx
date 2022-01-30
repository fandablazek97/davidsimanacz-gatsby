import React from "react";
import ButtonLink from "components/ButtonLink";
import { StaticImage } from "gatsby-plugin-image";

export default function InteractiveTests() {
  return (
    <section id="finance" className="ui-wrapper py-24">
      <h2
        className="ui-heading ui-separator w-full text-center"
        data-heading="lg"
        data-separator="center"
      >
        Vyzkoušejte si naše interaktivní testy
      </h2>
      <p className="w-full text-center pb-12 max-w-3xl ml-auto mr-auto">
        V rámci finančního gramotnosti jsem pro Vás připravil několik testů, kde
        si můžete ověřit Vaše znalosti v různých kategoriích napříč financemi.
        Po každém testu od nás dostanete finanční doporučení. Pokud se budete
        chtít dozvědět o financích více můžete vyzkoušet můj podcast nebo si
        stáhnout e-book.
      </p>

      <div className="w-full h-44 mb-10 relative">
        <StaticImage
          src="../../assets/images/financni-restart.jpg"
          alt="Ukázka knihy"
          placeholder="blurred"
          layout="fullWidth"
          objectFit="cover"
          objectPosition="50% 50%"
          className="absolute inset-0 z-0 w-full h-full"
          formats={["avif", "webp"]}
          loading="lazy"
        />

        <div className="w-full h-full absolute inset-0 z-1 p-8 flex flex-col sm:flex-row items-center justify-between">
          <span className="text-2xl lg:text-3xl text-white font-bold mb-0">
            Finanční zdraví
          </span>
          <ButtonLink to="/testy/financni-zdravi">Spustit test</ButtonLink>
        </div>
      </div>

      <div className="w-full h-44 mb-10 relative">
        <StaticImage
          src="../../assets/images/pracovni-prilezitosti.png"
          alt="Ukázka knihy"
          placeholder="blurred"
          layout="fullWidth"
          objectFit="cover"
          objectPosition="50% 50%"
          className="absolute inset-0 z-0 w-full h-full"
          formats={["avif", "webp"]}
          loading="lazy"
        />

        <div className="w-full h-full absolute inset-0 z-1 p-8 flex flex-col sm:flex-row items-center justify-between">
          <span className="text-2xl lg:text-3xl text-white font-bold mb-0">
            Pracovní příležitosti
          </span>
          <ButtonLink to="/testy/pracovni-prilezitosti">
            Spustit test
          </ButtonLink>
        </div>
      </div>

      <div className="w-full h-44 mb-10 relative">
        <StaticImage
          src="../../assets/images/investice.png"
          alt="Ukázka knihy"
          placeholder="blurred"
          layout="fullWidth"
          objectFit="cover"
          objectPosition="50% 50%"
          className="absolute inset-0 z-0 w-full h-full"
          formats={["avif", "webp"]}
          loading="lazy"
        />

        <div className="w-full h-full absolute inset-0 z-1 p-8 flex flex-col sm:flex-row items-center justify-between">
          <span className="text-2xl lg:text-3xl text-white font-bold mb-0">
            Investice
          </span>
          <ButtonLink to="/testy/investice">Spustit test</ButtonLink>
        </div>
      </div>

      <div className="w-full h-44 relative">
        <StaticImage
          src="../../assets/images/hypoteky.jpg"
          alt="Ukázka knihy"
          placeholder="blurred"
          layout="fullWidth"
          objectFit="cover"
          objectPosition="50% 50%"
          className="absolute inset-0 z-0 w-full h-full"
          formats={["avif", "webp"]}
          loading="lazy"
        />

        <div className="w-full h-full absolute inset-0 z-1 p-8 flex flex-col sm:flex-row items-center justify-between">
          <span className="text-2xl lg:text-3xl text-white font-bold mb-0">
            Hypotéka nebo nájem?
          </span>
          <ButtonLink to="/testy/hypoteka-najem">Spustit test</ButtonLink>
        </div>
      </div>
    </section>
  );
}
