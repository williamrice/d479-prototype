import JumboTron from "@/components/JumboTron";
import PageIntro from "@/components/PageIntro";
import React from "react";
import ContactCta from "@/components/ContactCta";
import ImageSection from "@/components/ImageSection";
import TransportationCards from "./TransportationCards";

const TransportationPage = () => {
  return (
    <div>
      <JumboTron
        title="Transportation"
        description="Getting to the island and around the island"
      />
      <PageIntro
        title="Getting to the island and around the island"
        content="Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. Bikes and helmets are available to rent from several vendors (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot."
      />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          How to Get to Taniti Island
        </h2>
        <ImageSection
          title="Cruise Ship"
          content="arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week"
          image="/transportation.jpg"
          imageCreds="<p>todo</p>"
          buttonLink="#"
          buttonText="View Cruise Line"
        />
        <ImageSection
          title="Airport"
          content="Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. "
          image="/transportation.jpg"
          imageCreds="<p>todo</p>"
          buttonLink="#"
          buttonText="Find a Flight"
          reverse={true}
        />
      </div>
      <ContactCta />
      <TransportationCards />
    </div>
  );
};

export default TransportationPage;
