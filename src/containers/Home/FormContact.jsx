import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import emailjs from "@emailjs/browser";

// Components
import { InputFloating, TextareaFloating, Checkbox } from "components/Forms";
import ButtonOutline from "components/ButtonOutline";

// Modules
import AlertEmailSent from "global/Forms/AlertEmailSent";
import AlertEmailFailed from "global/Forms/AlertEmailFailed";

export default function FormContactTest() {
  // Ref
  const refHoneypot = useRef(null);

  // State
  const [mailSent, setmailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sending function
  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);

    var honeypot = refHoneypot.current.value;

    if (honeypot === "" || honeypot === null) {
      emailjs
        .sendForm(
          "service_e8iymks",
          "template_w6pnfko",
          e.target,
          "user_2tNsUaIQSULo6wFXKZVCs"
        )
        .then(
          (result) => {
            setmailSent(true);
            e.target.reset();
            setIsLoading(false);
          },
          (error) => {
            setFormError(true);
            setIsLoading(false);
          }
        );
    } else {
      setmailSent(true);
      e.target.reset();
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={sendEmail}
      className="ui-form-filled pt-6 space-y-8"
      aria-label="Kontaktní formulář"
    >
      <InputFloating
        type="text"
        name="name"
        id="name"
        label="Jméno a příjmení"
        isRequired={true}
      />

      {/* Honeypot - anti spam */}
      <div className="c-input-hp">
        <input
          type="text"
          placeholder="surname"
          id="surname"
          ref={refHoneypot}
        />
        <label htmlFor="website">Příjmení</label>
      </div>
      {/* ---- Honeypot - anti spam ---- */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <InputFloating
          type="mail"
          name="mail"
          id="mail"
          label="E-mail"
          isRequired={true}
        />

        <InputFloating type="tel" name="tel" id="tel" label="Telefon" />
      </div>

      <TextareaFloating
        name="message"
        id="message"
        cols="30"
        rows="10"
        label="Vaše zpráva"
        isRequired={true}
      />

      <Checkbox id="gdpr" name="gdpr" isRequired={true}>
        Souhlasím s podmínkami{" "}
        <Link
          to="/gdpr"
          className="ui-link text-primary font-normal"
          data-link="2"
        >
          ochrany osobních údajů.
        </Link>
      </Checkbox>

      <ButtonOutline
        as="button"
        type="submit"
        isLoading={isLoading}
        text="Odeslat"
        className="flex w-full md:w-auto"
      >
        Odeslat
      </ButtonOutline>

      <div>
        {mailSent ? <AlertEmailSent /> : null}
        {formError ? <AlertEmailFailed /> : null}
      </div>
    </form>
  );
}
