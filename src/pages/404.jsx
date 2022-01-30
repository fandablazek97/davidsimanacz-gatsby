import * as React from "react";
import { Link } from "gatsby";

// Layout
import AppLayout from "layouts/AppLayout";

// Modules
import Seo from "global/Seo";

// Components
import Button from "components/Button";

export default function NotFoundPage() {
  return (
    <AppLayout>
      <Seo robotsEnabled={false} title="404: Stránka nenalezena" />

      {/* Main content */}
      <header className="w-screen h-screen relative min-h-600 bg-body-100">
        <div className="ui-wrapper h-full flex flex-col justify-center items-center">
          <span className="ui-heading" data-heading="xl">
            &#128531;
          </span>
          <h1 className="ui-heading text-primary text-3xl sm:text-5xl lg:text-6xl">
            Stránka nenalezena
          </h1>
          <p className="ui-lead text-center mb-16">
            Ještě nikam neutíkejte! Vypadá to že stránka, kterou se pokoušíte
            nalézt již neexistuje nebo byla přesunuta. Kliknutím na tlačítko
            snadno přejdete na hlavní stránku.
          </p>
          <Link to="/">
            <Button as="span">Hlavní stránka</Button>
          </Link>
        </div>
      </header>
    </AppLayout>
  );
}
