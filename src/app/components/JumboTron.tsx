import React from "react";
import PrimaryButton from "./PrimaryButton";

interface JumboTronProps {
  title: string;
  description: string;
  buttonLink?: string;
  buttonText?: string;
}

const JumboTron = ({
  title,
  description,
  buttonLink = "/lodging",
  buttonText = "Stay With Us",
}: JumboTronProps) => {
  return (
    <div className="bg-[url('/headerImage.jpg')] bg-cover bg-center min-h-[400px] text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <PrimaryButton buttonText={buttonText} buttonLink={buttonLink} />
    </div>
  );
};

export default JumboTron;
