import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import emailjs from "@emailjs/browser";

// Components
import ButtonOutline from "components/ButtonOutline";
import Input from "components/Forms/Input";
import Checkbox from "components/Forms/Checkbox";
import AlertEmailSent from "global/Forms/AlertEmailSent";
import AlertEmailFailed from "global/Forms/AlertEmailFailed";

// Icons
import { BiBook } from "react-icons/bi";

export default function FormBook() {
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
        "template_g6vddcz",
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
    <div className="ui-wrapper pb-24">
      <div className="relative pb-28 lg:pb-36 flex">
        <StaticImage
          src="../../assets/images/full-ebook-showcase.png"
          alt="Ukázka e-booku zdarma"
          placeholder="blurred"
          layout="fullWidth"
          objectFit="contain"
          objectPosition="50% 50%"
          className="z-1 w-full lg:max-w-5xl mx-auto 2xl:scale-115"
          formats={["avif", "webp"]}
          loading="lazy"
        />
      </div>

      <form
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-center"
      >
        <Input
          id="book-email"
          type="email"
          name="email"
          isRequired={true}
          placeholder="Váš e-mail *"
          className="mb-8 max-w-lg"
          data-size="lg"
        />
        <Checkbox
          id="book-gdpr"
          name="gdpr"
          isRequired={true}
          className="self-center mx-auto mb-8 max-w-md"
        >
          Souhlasím s podmínkami
          <Link
            to="/gdpr"
            className="ui-link text-primary font-normal ml-1"
            data-link="2"
          >
            ochrany osobních údajů.
          </Link>
        </Checkbox>
        <ButtonOutline
          as="button"
          type="submit"
          IconRight={<BiBook />}
          isLoading={isLoading ? true : false}
        >
          Zaslat e-book zdarma
        </ButtonOutline>
        <div className="mt-6 min-w-full sm:min-w-[80%] lg:min-w-[50%]">
          {mailSent ? <AlertEmailSent /> : null}

          {formError ? <AlertEmailFailed /> : null}
        </div>
      </form>
    </div>
  );
}
