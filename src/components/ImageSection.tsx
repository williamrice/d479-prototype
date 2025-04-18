import React from "react";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

interface ImageSectionProps {
  title: string;
  content: string;
  image: string;
  imageCreds: string;
  buttonLink: string;
  buttonText: string;
  reverse?: boolean;
}

const ImageSection = ({
  title,
  content,
  image,
  imageCreds,
  buttonLink,
  buttonText,
  reverse = false,
}: ImageSectionProps) => {
  return (
    <div
      style={
        reverse ? { flexDirection: "row-reverse" } : { flexDirection: "row" }
      }
      className="flex flex-col md:flex-row p-4 max-w-7xl mx-auto"
    >
      <div className="flex-1 flex flex-col">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="border-4 border-melon shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
        />
        <p
          className="creds text-sm"
          dangerouslySetInnerHTML={{ __html: imageCreds }}
        />
      </div>

      <div className="p-4 space-y-2 flex-1 flex flex-col">
        <h2 className="text-2xl text-dark-green">{title}</h2>
        <p>{content}</p>
        <SecondaryButton buttonText={buttonText} buttonLink={buttonLink} />
      </div>
    </div>
  );
};

export default ImageSection;
