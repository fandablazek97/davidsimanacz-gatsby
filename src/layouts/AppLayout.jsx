import React from "react";

// Font imports
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

// Main CSS
import "../styles/Main.css";

// Global Modules
import Header from "global/Header";
import { Navbar } from "global/Navbar";
import { Footer } from "global/Footer";
import SkipNavLinks from "global/SkipNavLinks";
import FloatingAction from "global/FloatingAction";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <header>
        <SkipNavLinks />
        <Navbar />
      </header>
      <main id="start">{children}</main>
      <FloatingAction />
      <Footer />
    </>
  );
}
