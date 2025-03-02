import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-white text-xl font-bold">Newsletter</h2>
      <p className="text-white">
        Stay up to date with the latest news and updates from Tanitian Island.
      </p>
      <form className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="bg-white h-10 rounded-md p-1 w-52"
          />
          <button
            type="submit"
            className="bg-melon px-4 py-2 rounded-md font-bold hover:scale-105 transition-transform duration-300 text-white max-w-fit flex justify-center"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
