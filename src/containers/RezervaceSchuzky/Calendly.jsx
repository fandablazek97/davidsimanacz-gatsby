import React from "react";
import { InlineWidget } from "react-calendly";

export default function Calendly({ className = "" }) {
  return (
    <div className={`px-5 md:px-0 ${className}`}>
      <InlineWidget
        url="https://calendly.com/david_simana/rezervaceschuzky?month=2022-01&date=2022-01-15"
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "6A48E5",
          textColor: "181818",
        }}
        styles={{ height: "1000px" }}
      />
    </div>
  );
}

// <!-- Calendly inline widget begin -->
// <div class="calendly-inline-widget" data-url="https://calendly.com/david_simana" style="min-width:320px;height:630px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
// <!-- Calendly inline widget end -->
