import React from "react";

// Import Swiper React components
import SwiperCore, { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Icons
import { MdFormatQuote } from "react-icons/md";

export default function CarouselTestimonials() {
  SwiperCore.use([Pagination, Autoplay, A11y]);

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-700 md:to-indigo-500 text-white text-center"
      loop="true"
      autoplay={{
        delay: 5500,
        disableOnInteraction: true,
      }}
    >
      <SwiperSlide>
        <div className="ui-wrapper">
          <div className="flex flex-col md:flex-row py-12 md:py-24">
            <MdFormatQuote
              className="flex-shrink-0 text-indigo-500 mr-5"
              style={{ fontSize: "8rem" }}
            />
            <div>
              <p className="text-left text-xl md:text-2xl font-normal normal-case mb-6">
                David vyřídil i to nemožné ! Co se tyče financování,
                refinancovani i sloučení více úvěru do jednoho snad nejlepší
                volba. Rychle spolehlivé a na jedno zavolání vše vyřízené!
                Velice doporučuji!!!
              </p>
              <span
                className="ui-heading text-left text-secondary mb-0"
                data-heading="sm"
              >
                Teodor Petroff
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="ui-wrapper">
          <div className="flex flex-col md:flex-row py-12 md:py-24">
            <MdFormatQuote
              className="flex-shrink-0 text-indigo-500 mr-5"
              style={{ fontSize: "8rem" }}
            />
            <div>
              <p className="text-left text-xl md:text-2xl font-normal normal-case mb-6">
                David je nejen skvělý investiční poradce, ale také skvělý
                člověk, co vždy rad pomůže a vyhoví vašim potřebám! 😊 pokud
                potřebujete ve světě financí poradit, David je člověk číslo
                jedna na koho se obrátit! 🔝
              </p>
              <span
                className="ui-heading text-left text-secondary mb-0"
                data-heading="sm"
              >
                Filip Zimanzl
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="ui-wrapper">
          <div className="flex flex-col md:flex-row py-12 md:py-24">
            <MdFormatQuote
              className="flex-shrink-0 text-indigo-500 mr-5"
              style={{ fontSize: "8rem" }}
            />
            <div>
              <p className="text-left text-xl md:text-2xl font-normal normal-case mb-6">
                David je důkazem jak kvalitní a efektní systém práce ve skupině
                máme. Výrazně navýšil standard "běžné" služby finančního
                poradenství. Jeho podnikatelské myšlení a potenciál je to, čím
                je schopen posouvat mnohé kolegy. Doporučuji osobní setkání s
                kolegou pokud se chcete dozvědět více a inspirovat se.
              </p>
              <span
                className="ui-heading text-left text-secondary mb-0"
                data-heading="sm"
              >
                Duc Trung EFA
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="ui-wrapper">
          <div className="flex flex-col md:flex-row py-12 md:py-24">
            <MdFormatQuote
              className="flex-shrink-0 text-indigo-500 mr-5"
              style={{ fontSize: "8rem" }}
            />
            <div>
              <p className="text-left text-xl md:text-2xl font-normal normal-case mb-6">
                David nám velice pomohl co se týče finančního plánování do
                budoucna a zabezpečení rodinného zázemí, velice příjemný a
                vstřícný poradce, kterékoliv nejasnosti vysvětlí a řádně poradí.
              </p>
              <span
                className="ui-heading text-left text-secondary mb-0"
                data-heading="sm"
              >
                Václav A.
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="ui-wrapper">
          <div className="flex flex-col md:flex-row py-12 md:py-24">
            <MdFormatQuote
              className="flex-shrink-0 text-indigo-500 mr-5"
              style={{ fontSize: "8rem" }}
            />
            <div>
              <p className="text-left text-xl md:text-2xl font-normal normal-case mb-6">
                Díky Davidovi jsem myslel, že jako OSVČ budu mít problém s
                řešením hypotéky. Dnes mám již schváleno a čekáme na čerpání.
              </p>
              <span
                className="ui-heading text-left text-secondary mb-0"
                data-heading="sm"
              >
                Tomáš N.
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
