import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Parallax from "react-rellax";

export default function ParallaxPhoto() {
  return (
    <>
      {/* Parallax */}
      <div className="w-full h-96 xl:h-128 overflow-hidden object-cover hidden lg:block">
        <Parallax speed={-4} percentage={1}>
          <StaticImage
            src="../../assets/images/team.jpg"
            alt="Team"
            placeholder="blurred"
            className="w-full h-full"
            layout="fullWidth"
            objectFit="cover"
            objectPosition="50% 50%"
            formats={["avif", "webp"]}
            loading="lazy"
          />
        </Parallax>
      </div>

      <StaticImage
        src="../../assets/images/team.jpg"
        alt="Team"
        placeholder="blurred"
        className="w-full h-96 block lg:hidden"
        layout="fullWidth"
        objectFit="cover"
        objectPosition="50% 50%"
        formats={["avif", "webp"]}
        loading="lazy"
      />
    </>
  );
}
