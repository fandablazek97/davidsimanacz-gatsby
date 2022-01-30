import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import VideoModal from "./VideoModal";

export default function HeroHome() {
  return (
    <header
      id="domu"
      className="w-screen h-auto sm:h-screen lg:min-h-[640px] relative overflow-hidden"
    >
      <div className="ui-wrapper h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="pt-36 pb-20 lg:py-0 flex flex-col items-start justify-center">
          <h1 className="ui-heading text-primary text-left text-3xl md:text-4xl lg:text-6xl font-bold">
            Cesta k finanční svobodě
          </h1>
          <p className="ui-lead">
            Splňte si Vaše finanční cíle bez nutností několikaleté praxe
            v oboru. Sestavím pro Vás finanční plán na míru za 7 dní.
          </p>

          <VideoModal />
        </div>

        <StaticImage
          src="../../assets/images/portrait.png"
          alt="Portrét David Šimana"
          placeholder="blurred"
          className="lg:top-28 bottom-0 sm:min-h-500 transform md:scale-125 lg:scale-110 3xl:scale-140"
          layout="fullWidth"
          objectFit="contain"
          styleimg={{
            position: "absolute",
            bottom: "0",
            Width: "100% !important",
          }}
          objectPosition="50% 100%"
          formats={["avif", "webp"]}
          loading="eager"
        />
      </div>
    </header>
  );
}
