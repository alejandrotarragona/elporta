import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-0 mt-10 uppercase tracking-[20px] text-gray-500 text-lg">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-5 mt-8">
        <h4 className="text-xs font-semibold text-center">
          I have just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let´s talk.</span>
        </h4>

        <div className="space-y-5 mt-4">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse" />
            <p className="text-base">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse" />
            <a
              className="text-base"
              href="mailto:alejandro.tarragona@davinci.edu.ar"
            >
              alejandro.tarragona@davinci.edu.ar
            </a>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-6 w-6 animate-pulse" />
            <p className="text-base">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto mt-4"
        >
          <div className="flex space-x-2">
            <input
              className="contactInput"
              placeholder="Name"
              type="text"
              {...register("name")}
            />
            <input
              className="contactInput"
              placeholder="Email"
              type="text"
              {...register("email")}
            />
          </div>
          <input
            className="contactInput"
            placeholder="Subject"
            type="text"
            {...register("subject")}
          />
          <textarea
            className="contactInput h-24"
            placeholder="Message"
            {...register("message")}
          />

          <div className="mt-4" /> {/* Espacio adicional debajo del textarea */}
          
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-sm"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
