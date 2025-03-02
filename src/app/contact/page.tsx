import JumboTron from "@/components/JumboTron";
import PageIntro from "@/components/PageIntro";
import PrimaryButton from "@/components/PrimaryButton";
import React from "react";
import FAQ from "./Faq";

const ContactPage = () => {
  return (
    <>
      <JumboTron title="Contact" description="Get in touch with us" />
      <PageIntro
        title="Contact Us"
        content="We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible."
      />
      <form className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
          />
        </div>

        <PrimaryButton buttonLink="#" buttonText="Submit" />
      </form>
      <div className="bg-gray-100 p-4 mt-8">
        <FAQ />
      </div>
    </>
  );
};

export default ContactPage;
