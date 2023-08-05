import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image"; // Importa el componente Image de next/image

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The name's ${pageInfo?.name}`,
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover">
        {/* Utiliza el componente Image en lugar del elemento img */}
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt=""
          layout="fill" // Establece que la imagen ocupará todo el espacio del contenedor
          objectFit="cover" // Establece que la imagen se ajustará para cubrir el contenedor
          className="rounded-full"
        />
      </div>
      <div className="z-20 relative">
        <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          {/* Utiliza el componente Link para envolver los botones */}
          <Link href="#about">
            <a className="heroButton">About</a>
          </Link>

          <Link href="#experience">
            <a className="heroButton">Experience</a>
          </Link>

          <Link href="#skills">
            <a className="heroButton">Skills</a>
          </Link>

          <Link href="#projects">
            <a className="heroButton">Projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
