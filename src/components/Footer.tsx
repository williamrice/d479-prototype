import Link from "next/link";
import React from "react";
import { FaFacebook, FaX, FaTiktok } from "react-icons/fa6";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="bg-dark-green grid grid-cols-3 min-h-48 relative bottom-0 w-full p-4">
      <div className="flex flex-col justify-center items-center">
        <ul className="text-white font-bold space-y-1">
          <h3 className="text-xl mb-2">Quick Links</h3>
          <li>
            <Link href={"/dining"} className="hover:text-mango">
              Where to eat
            </Link>
          </li>
          <li>
            <Link href={"/attractions"} className="hover:text-mango">
              What to do
            </Link>
          </li>
          <li>
            <Link href={"/lodging"} className="hover:text-mango">
              Where to stay
            </Link>
          </li>
          <li>
            <Link href={"/discover"} className="hover:text-mango">
              What to see
            </Link>
          </li>
          <li>
            <Link href={"/transportation"} className="hover:text-mango">
              How to travel
            </Link>
          </li>
          <li>
            <Link href={"/contact#faq"} className="hover:text-mango">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <h3 className="text-white text-4xl mt-8">Tanitian Island</h3>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex space-x-4">
            <FaFacebook className="text-white text-4xl" />
            <FaTiktok className="text-white text-4xl" />
            <FaX className="text-white text-4xl" />
          </div>
          <p className="text-white">
            Copyright {new Date().getFullYear()} Tanitian Island
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <Newsletter />
      </div>
    </footer>
  );
};

export default Footer;
