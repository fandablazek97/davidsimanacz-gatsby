import React, { useState } from "react";
import { Link } from "gatsby";
import emailjs from "@emailjs/browser";

// Components
import Button from "components/Button";
import Input from "components/Forms/Input";
import Checkbox from "components/Forms/Checkbox";

import AlertEmailSent from "global/Forms/AlertEmailSent";
import AlertEmailFailed from "global/Forms/AlertEmailFailed";

export default function FormMortgages() {
  // State
  const [mailSent, setmailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sending function
  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_e8iymks",
        "template_43m6p7r",
        e.target,
        "user_2tNsUaIQSULo6wFXKZVCs"
      )
      .then(
        (result) => {
          setmailSent(true);
          console.log(mailSent);
          e.target.reset();
          setIsLoading(false);
        },
        (error) => {
          setFormError(true);
          console.log(formError);
          setIsLoading(false);
        }
      );
  }
  return (
    <>
      {/* Formulář */}
      <form
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-center"
      >
        <Input
          type="email"
          id="v-email"
          name="email"
          placeholder="Váš e-mail"
          isRequired={true}
          className="mb-8 max-w-lg"
          data-size="lg"
        />
        <Checkbox
          id="v-gdpr"
          name="gdpr"
          isRequired={true}
          className="self-center mb-8 text-white"
        >
          Souhlasím s podmínkami ochrany osobních údajů. Více informací
          <Link
            to="/gdpr"
            className="ui-link text-white font-normal ml-1"
            data-link="2"
          >
            zde.
          </Link>
        </Checkbox>
        <Button as="button" type="submit" isLoading={isLoading ? true : false}>
          Odeslat
        </Button>
      </form>

      {/* Feedback formuláře */}
      <div className="mt-6">
        {mailSent && <AlertEmailSent />}
        {formError && <AlertEmailFailed />}
      </div>
    </>
  );
}
