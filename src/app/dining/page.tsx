import JumboTron from "@/components/JumboTron";
import PageIntro from "@/components/PageIntro";
import React from "react";
import RestaurantCards from "./RestaurantCards";
import ContactCta from "@/components/ContactCta";

const DiningPage = () => {
  return (
    <div>
      <JumboTron
        title="Lodging"
        description="Find the perfect place to stay on Taniti"
      />
      <PageIntro
        title="What to Eat"
        content="Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day."
      />
      <RestaurantCards />
      <ContactCta />
    </div>
  );
};

export default DiningPage;
