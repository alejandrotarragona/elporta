import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image"; // Importa el componente Image de next/image

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-6 md:p-8 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden"
      >
        {/* Utiliza el componente Image en lugar de <img> */}
        <Image
          src={urlFor(experience.companyImage).url()}
          alt={experience.company} // Añade un atributo alt con texto significativo
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </motion.div>

      <div className="px-0 md:px-4">
        <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-lg mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <div key={technology._id} className="h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 rounded-full overflow-hidden">
              {/* Utiliza el componente Image también para las tecnologías */}
              <Image
                src={urlFor(technology.image).url()}
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                alt="hola"
                width={40} // Especifica el ancho de la imagen
                height={40} 
              />
            </div>
          ))}
        </div>

        <p className="uppercase py-2 text-gray-300 text-xs">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Presente"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-2 ml-3 text-sm">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
