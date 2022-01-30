import React from "react";

// Components
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="ui-wrapper py-24 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16"
    >
      <div className="flex flex-col mb-12 md:mb-0">
        <h2 className="ui-heading text-primary" data-heading="lg">
          Kontakt
        </h2>
        <p className="mb-12">
          Ke každé nezávazné schůzce ode mě dostanete ebook{" "}
          <span className="font-bold">7 oblastí pro zdravé finance</span>, kde
          se dozvíte spoustu zajímavých rad, které Vám pomůžou na cestě za
          finanční svobodou.
        </p>
        <div className="flex flex-wrap gap-8">
          <a
            href="tel:+420722214141"
            className="ui-link text-lg lg:text-2xl text-primary font-semibold normal-case"
            data-link="4"
          >
            +420 722 21 41 41
          </a>
          <a
            href="mailto:info@davidsimana.cz.cz"
            className="ui-link text-lg lg:text-2xl text-primary font-semibold normal-case"
            data-link="4"
          >
            Info@davidsimana.cz
          </a>
        </div>
      </div>
      <div>
        <h3 className="ui-heading text-primary">Máte dotaz?</h3>
        <FormContact />
      </div>
    </section>
  );
}
