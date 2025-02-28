import React from "react";
import PrimaryButton from "./PrimaryButton";

const ContactCta = () => {
  return (
    <div className="bg-dark-green p-4 flex flex-col justify-center items-center text-white font-bold">
      <h2 className="text-4xl drop-shadow-2xl">
        Let&apos;s Talk About Your Next Vacation
      </h2>
      <p className="text-lg drop-shadow-2xl">
        Send us a message if you have any questions or need help planning your
        next trip
      </p>
      <PrimaryButton buttonText="Contact Us" buttonLink="/contact" />
    </div>
  );
};

export default ContactCta;
