import JumboTron from "@/components/JumboTron";
import PageIntro from "@/components/PageIntro";
import React from "react";
import LodgingCards from "./LodgingCards";
import ContactCta from "@/components/ContactCta";

const LodgingPage = () => {
  return (
    <div>
      <JumboTron
        title="Lodging"
        description="Find the perfect place to stay on Taniti"
      />
      <PageIntro
        title="Where to Stay"
        content="Taniti has a variety of lodging options, from luxury resorts to budget-friendly hostels. Most tourists stay in Taniti City, which has a variety of hotels and inns. There are also a number of eco-lodges in the rainforest, and several beachfront resorts. Camping is allowed in designated areas, but campers must obtain a permit from the Taniti National Park Service. Many visitors choose to stay in a vacation rental, which can be found on popular rental websites."
      />
      <LodgingCards />
      <ContactCta />
    </div>
  );
};

export default LodgingPage;
