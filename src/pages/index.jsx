import React from "react";

// Layout
import AppLayout from "layouts/AppLayout";

// Modules
import Seo from "global/Seo";

// Components
import ButtonLink from "components/ButtonLink";
import HeroHome from "containers/Home/HeroHome";
import TextDivider from "containers/Home/TextDivider";
import CarouselServices from "containers/Home/CarouselServices";
import ParallaxPhoto from "containers/Home/ParallaxPhoto";
import HowWeWork from "containers/Home/HowWeWork";
import FormBookBg from "containers/Home/FormBookBg";
import InteractiveTests from "containers/Home/InteractiveTests";
import CarouselTestimonials from "containers/Home/CarouselTestimonials";
import ContactSection from "containers/Home/ContactSection";
import CallToAction from "containers/Home/CallToAction";

export default function IndesPage() {
  return (
    <AppLayout>
      <Seo
        title="Finanční poradenství"
        description="Jmenuji se David Šimana a pomohu Vám splnit vaše finanční cíle. Sestavím pro Vás finanční plán na míru za 7 dní a připravím Vás na cestu k rentě."
        keywords="Finance, David Šimana, David Simana, Finance Plzeň, Finance Plzen, Finanční poradenství, Financni poradenstvi"
      />

      {/* Main Content */}
      <HeroHome />

      <TextDivider>
        <span className="text-2xl font-semibold normal-case">
          Připravím srozumitelný plán, díky kterému dostanete know-how, které
          vychází z metodiky EFPA pro finanční stabilitu a připraví Vás na cestu
          k rentě.
        </span>
      </TextDivider>

      {/* Carousel služeb */}
      <div id="sluzby" className="ui-wrapper py-24 lg:py-32">
        <h2
          className="ui-heading ui-separator w-full text-center"
          data-heading="lg"
          data-separator="center"
        >
          Co spolu probereme na schůzce
        </h2>
        <CarouselServices />
      </div>

      {/* Karty */}
      <div className="ui-wrapper pt-6 pb-16 md:pb-36 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="py-10 px-8 md:px-12 pb-28 my-4 z-0 shadow-soft-2xl opacity-70">
          <h3 className="ui-heading text-center text-primary" data-size="lg">
            Stará cesta
          </h3>
          <ul className="ui-list space-y-3 font-semibold">
            <li>Žiju z výplaty do výplaty</li>
            <li>Nemám finanční rezervu</li>
            <li>Neinvestuji žádné peníze do aktiv</li>
            <li>Veškeré peníze utratím</li>
            <li>Nediverzifikuji své portfolio</li>
            <li>Nemám vytvořený finanční plán</li>
          </ul>
        </div>

        <div className="py-10 max-w-md px-8 md:px-12 my-4 leading-5 shadow-2xl bg-body scale-105 z-1 flex flex-col">
          <h3 className="ui-heading text-center text-primary" data-size="lg">
            Nová cesta
          </h3>
          <ul className="ui-list space-y-3 font-semibold">
            <li>Vytvořte si rezervu</li>
            <li>Zbavte se špatných dluhů</li>
            <li>Dobře a levně se pojistěte</li>
            <li>Kupte nemovistost, když je hypotéka levnější než nájem</li>
            <li>Investujte do akciových fondů min 10 % příjmů dlouhodobě</li>
            <li>
              Nezapoměnte na dluhopisové fondy a nemovitosti – diverzifikujte
            </li>
            <li>Před finanční nezávislostí redukujte akicové fondy</li>
          </ul>
          <ButtonLink
            to="/rezervace-schuzky"
            className="mt-8 lg:mt-12 self-center"
          >
            Začněme
          </ButtonLink>
        </div>
      </div>

      {/* Parallax */}
      <ParallaxPhoto />

      <HowWeWork />

      {/* Book order */}
      {/* <FormBook /> */}
      <FormBookBg />

      {/* Textový oddělovač 2 - citát */}
      {/* <TextDivider>
        <span className="text-white text-2xl md:text-3xl font-normal italic leading-normal normal-case">
          „Čas jsou peníze, ale zkuste si trochu času ušetřit na stará kolena"
        </span>
        <span
          className="ui-heading mt-8 font-semibold normal-case text-white"
          data-size="sm"
        >
          - Gabriel Laub
        </span>
      </TextDivider> */}

      {/* Interaktivní testy */}
      <InteractiveTests />

      {/* Reference - carousel */}
      <CarouselTestimonials />

      {/* Kontakt */}
      <ContactSection />

      {/* Call to action */}
      <CallToAction />
    </AppLayout>
  );
}
