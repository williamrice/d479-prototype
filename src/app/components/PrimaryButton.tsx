import Link from "next/link";
import React from "react";

interface PrimaryButtonProps {
  buttonText: string;
  buttonLink: string;
}

const PrimaryButton = ({ buttonText, buttonLink }: PrimaryButtonProps) => {
  return (
    <Link
      className="bg-mango px-4 py-2 rounded-md font-bold hover:scale-105 transition-transform duration-300 mt-2 text-md-green max-w-fit flex justify-center"
      href={buttonLink}
    >
      {buttonText}
    </Link>
  );
};

export default PrimaryButton;
