import React from "react";

// Components
import Alert from "components/Alert";

// Icons
import { IoAlertCircle } from "react-icons/io5";

export default function AlertEmailFailed() {
  return (
    <Alert colorScheme="error" className="flex items-center">
      <IoAlertCircle className="text-3xl md:text-4xl flex-shrink-0 mr-4" />
      <span className="text-lg">
        E-mail nebyl odeslán. Zkuste to znovu později nebo zvolte jinou možnost
        kontaktu.
      </span>
    </Alert>
  );
}
