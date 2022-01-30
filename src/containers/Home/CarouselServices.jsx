// Dokumentace Swiper JS - `https://swiperjs.com/swiper-api`

// Odkaz na různá dema kde si lze u konkrétního slideru rozkliknout react v
// CodeSandboxu a snadno vykopírovat potřebný kód - `https://swiperjs.com/demos`

// !!! Není nutné importovat styl podle API, je již přizpůsobený pro Framework v adresáři `styles/components/swiper`

// Ukazatel navigace (tečky) lze snadno posunout pod slider přidáním spidního marginu na každý slide

import React from "react";

// Swiper
import SwiperCore, { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel() {
  SwiperCore.use([Pagination, Autoplay, A11y]);

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={40}
      pagination={{ clickable: true }}
      loop="true"
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      className="h-auto items-center my-6"
    >
      {/* Main slides */}
      <SwiperSlide className="py-16 flex flex-col items-center justify-center text-center">
        <h3 className="ui-heading" data-heading="sm">
          Vlastní bydlení
        </h3>
        <p>
          Provozuji nezávislé poradenství, a proto jsem schopný poskytnout, za
          pomoci aukčního systému u bank nabídku, díky které ušetříte v průměru
          55 000 Kč na běžné hypotéce. Pokud již hypotéku máte, poradím Vám s
          jejím refinancováním a získáme pro Vás výhodnější podmínky a zajistím
          pro Vás bezpečnou hypotéku pro nový domov. Pro vytvoření nezávazné
          nabídky mě kontaktujte.
        </p>
      </SwiperSlide>

      <SwiperSlide className="py-16 flex flex-col items-center justify-center text-center">
        <h3 className="ui-heading" data-heading="sm">
          Investice - Cesta k rentě{" "}
        </h3>
        <p>
          Chraňte svůj finanční majetek před inflací, bezpečně ji překonejte a
          naakumulujte dostatek prostředků pro čerpání renty. Víte kolik
          finančních aktiv musíte v životě vytvořit na pokrytí veškerých výdajů,
          abyste dosáhli finanční nezávislosti? Pro klienty
          vytváříme portfolia - kumulační, konzervativní, vyvážené a majetkové.
          Udělejte první krok na cestu k rentě a domluvte si schůzku zdarma.
        </p>
      </SwiperSlide>

      <SwiperSlide className="py-16 flex flex-col items-center justify-center text-center">
        <h3 className="ui-heading" data-heading="sm">
          Zajištění
        </h3>
        <p>
          Přemýšleli jste někdy nad tím, jaká rizika Vás mohou v životě potkat a
          zničit Vaše finanční cíle, ohrozit příjmy a majetek nebo
          Vaší firmu? Klientům na míru spočítáme, kolik peněz je potřeba dostat
          v případě výskytu rizika. Buďte sami sobě pojišťovnou a nevyhazujte
          Vaše finance za nefunkční pojištění. Chraňte a
          zajišťujte opravdová rizika.
        </p>
      </SwiperSlide>

      <SwiperSlide className="py-16 flex flex-col items-center justify-center text-center">
        <h3 className="ui-heading" data-heading="sm">
          Firemní a podnikatelské úvěry
        </h3>
        <p>
          Úvěry na stroje, leasingy, růst firmy či developerské projekty.
          Zajistím financování na míru pro Vaši společnost a vymyslím logiku,
          jak dosáhnout vyššího úvěrového rámce, než Vám nabídl Váš bankéř. Díky
          aukčnímu systému a konkurenčnímu boji jsem schopen pro své klienty
          vyjednávát individuální podmínky.
        </p>
      </SwiperSlide>

      <SwiperSlide className="py-16 flex flex-col items-center justify-center text-center">
        <h3 className="ui-heading" data-heading="sm">
          Financování pro podnikatele
        </h3>
        <p>
          Jste podnikatel a bojíte se, že Vám nevyjdou příjmy na Vaše vysněné
          bydlení? Individuálně pro své klienty zajišťujeme financování až do
          výše 7 milionů bez dokládání příjmů.
        </p>
      </SwiperSlide>

      <SwiperSlide className="py-16 flex flex-col items-center justify-center text-center">
        <h3 className="ui-heading" data-heading="sm">
          Optimalizace pro rodinné firmy a OSVČ
        </h3>
        <p>
          Zajímá Vás, jak legálně ušetřit na dani z příjmů až desítky tisíc
          ročně na osobu ku početu zaměstnanců? Studoval jsem pečlivě veškeré
          finanční produkty pro legální optimalizaci daní a dnes předávám toto
          know-how svým klientům.
        </p>
      </SwiperSlide>

      <SwiperSlide className="py-16 flex flex-col items-center justify-center text-center">
        <h3 className="ui-heading" data-heading="sm">
          Pracovní příležitosti
        </h3>
        <p>
          Rosteme a do svého teamu hledám ambiciózní jedince v rámci ČR. Jsi
          zodpovědný a chtěl bys být v kolektivu ambiciózních lidí? Nabízím
          volné místo na pozici obchodního konzultanta. Buď součástí úspěšných
          lidí, kteří táhnou za jeden provaz. Udělej první krok a rozhodni o své
          budoucnosti ještě dnes.
        </p>
      </SwiperSlide>

      <SwiperSlide className="py-16 flex flex-col items-center justify-center text-center">
        <h3 className="ui-heading" data-heading="sm">
          Založení firmy
        </h3>
        <p>
          Chcete založit svou vlastní firmu, rozjet podnikání nebo jen
          potřebujete inspiraci a jasný podnikatelský záměr na papíře? Spojíme
          Vás s naším advokátem a daňovým specialistou, díky kterému budete
          jasně vědět jaká forma podnikání pro Vás bude nejlepší. 
          Propojuji podnikatele a vytvářím nové pracovní příležitosti v rámci
          ČR.
        </p>
      </SwiperSlide>

      <SwiperSlide className="py-16 flex flex-col items-center justify-center text-center">
        <h3 className="ui-heading" data-heading="sm">
          Refinancování nebankovních úvěrů
        </h3>
        <p>
          Jsme schopni pomoci klientům s nebankovním úvěrem, díky našemu
          know-how právní a legální cestou. Pomůžeme Vám abyste byli pro banku
          opět bonitní.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}
