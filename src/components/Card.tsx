import React from "react";
import Image from "next/image";

interface CardProps {
  id?: number;
  title: string;
  subtitle: string;
  imagePath: string;
  imageCreds: string;
}

const Card = ({
  id,
  title,
  subtitle,
  imagePath,
  imageCreds = "",
}: CardProps) => {
  return (
    <div
      key={id}
      className="flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
    >
      <Image src={imagePath} alt={title} width={400} height={400} />
      {/* Content Section */}
      <div className="px-6 py-4 max-w-sm text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-base">{subtitle}</p>
        <p
          className="creds text-sm mt-4"
          dangerouslySetInnerHTML={{ __html: imageCreds }}
        />
      </div>
    </div>
  );
};

export default Card;
