import JumboTron from "@/components/JumboTron";
import PageIntro from "@/components/PageIntro";
import React from "react";
import ContactCta from "@/components/ContactCta";
import DiscoverCards from "./DiscoverCards";

const DiscoverPage = () => {
  return (
    <div>
      <JumboTron title="Discover" description="Explore the beauty of Taniti" />
      <PageIntro
        title="What to Do"
        content="Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano."
      />
      <DiscoverCards />
      <ContactCta />
    </div>
  );
};

export default DiscoverPage;
