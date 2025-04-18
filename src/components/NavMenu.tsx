import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <div className="w-full bg-dark-green">
      <div className="text-white p-4 flex justify-between items-center min-h-[100px] max-w-7xl mx-auto">
        <span className="text-2xl font-bold">
          <Link href={"/"}>Tanitian Island</Link>
        </span>
        <ul className="flex space-x-4 font-semibold">
          <li>
            <Link href={"/lodging"}>Lodging</Link>
          </li>
          <li>
            <Link href={"/entertainment"}>Entertainment</Link>
          </li>
          <li>
            <Link href={"/dining"}>Dining</Link>
          </li>
          <li>
            <Link href={"/transportation"}>Transportation</Link>
          </li>
          <li>
            <Link href={"/discover"}>Discover</Link>
          </li>
          <li>
            <Link href={"/contact#faq"}>Faq</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
