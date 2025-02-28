import Link from "next/link";
import React from "react";

interface SecondaryButtonProps {
  buttonText: string;
  buttonLink: string;
}

const SecondaryButton = ({ buttonText, buttonLink }: SecondaryButtonProps) => {
  return (
    <Link
      className="bg-md-green px-4 py-2 rounded-md font-bold hover:scale-105 transition-transform duration-300 mt-2 text-white max-w-fit flex justify-center"
      href={buttonLink}
    >
      {buttonText}
    </Link>
  );
};

export default SecondaryButton;
