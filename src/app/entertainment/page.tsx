import JumboTron from "@/components/JumboTron";
import PageIntro from "@/components/PageIntro";
import React from "react";
import ContactCta from "@/components/ContactCta";
import EntertainmentCards from "./EntertainmentCards";

const EntertainmentPage = () => {
  return (
    <div>
      <JumboTron
        title="Entertainment"
        description="There is always something for everyone to do at the island"
      />
      <PageIntro
        title="What to do"
        content="Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay."
      />
      <EntertainmentCards />
      <ContactCta />
    </div>
  );
};

export default EntertainmentPage;
