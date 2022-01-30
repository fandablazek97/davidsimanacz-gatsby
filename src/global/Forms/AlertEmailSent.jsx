import React from "react";

// Components
import Alert from "components/Alert";

// Icons
import { IoCheckmarkCircle } from "react-icons/io5";

export default function AlertEmailSent() {
  return (
    <Alert colorScheme="success" className="flex items-center">
      <IoCheckmarkCircle className="text-3xl md:text-4xl flex-shrink-0 mr-4" />
      <span className="text-lg">Děkujeme. Váš e-mail byl úspěšně odeslán.</span>
    </Alert>
  );
}
