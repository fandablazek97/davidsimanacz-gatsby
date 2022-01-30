import React from "react";

export default function HowWeWork() {
  return (
    <section id="jak-fungujeme" className="ui-wrapper py-24">
      <h2
        className="ui-heading ui-separator w-full text-center"
        data-heading="lg"
        data-separator="center"
      >
        Jak probíhá naše spolupráce?
      </h2>
      <p className="ui-lead w-full text-center pb-12 max-w-4xl ml-auto mr-auto">
        Mám jen jeden diář a omezený počet klientů o které se dokážu start
        efektivně. Vždy se s klienty znám osobně, protože s nimi řeším osobní
        věci založené na důvěře.
      </p>

      <div className="pt-12 grid grid-cols-1 space-y-7 md:space-y-0 md:grid-cols-2">
        <div className="flex flex-col items-center justify-start p-6">
          <span className="rounded-full bg-primary w-16 h-16 flex items-center justify-center text-3xl font-bold text-white mb-6">
            1
          </span>
          <p className="text-center max-w-md">
            Před první schůzkou ode mě dostanete E-book a vstupní formulář,
            který si vyplníte a se kterým následně budeme pracovat. Na první
            schůzce se hlavně seznámíme a pobavíme o možnostech.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start p-6">
          <span className="rounded-full bg-primary w-16 h-16 flex items-center justify-center text-3xl font-bold text-white mb-6">
            2
          </span>
          <p className="text-center max-w-md">
            Vytvoříme finanční analýzu díky informacím o Vašem majetku, příjmech
            a také cílech, které chcete ve světě financí dosáhnout.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start p-6">
          <span className="rounded-full bg-primary w-16 h-16 flex items-center justify-center text-3xl font-bold text-white mb-6">
            3
          </span>
          <p className="text-center max-w-md">
            Na další schůzce Vám navrhnu řešení finančního plánu. Plán pro Vás
            vytvořím tak, aby byl jasný a srozumitelný. Finanční plán musí
            obsahovat cíle, ale také řešení jak jich dosáhnout.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start p-6">
          <span className="rounded-full bg-primary w-16 h-16 flex items-center justify-center text-3xl font-bold text-white mb-6">
            4
          </span>
          <p className="text-center max-w-md">
            Po odsouhlasení finančního plánu započne Vaše nová cesta k lepšímu
            životu a v tuto chvíli začíná naše společná dlouhodobá spolupráce.
          </p>
        </div>
      </div>
    </section>
  );
}
