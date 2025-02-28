import JumboTron from "./components/JumboTron";
import ImageSection from "./components/ImageSection";
import PageIntro from "./components/PageIntro";
import ContactCta from "./components/ContactCta";

export default function Home() {
  const imageSectionContent = [
    {
      title: "Staying at the island",
      content:
        "Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.",
      image: "/lodging.jpg",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
      buttonLink: "/lodging",
      buttonText: "View Lodging",
      reverse: false,
    },
    {
      title: "Attractions at the island",
      content:
        "Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay",
      image: "/attractions.jpg",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
      buttonLink: "/attractions",
      buttonText: "View Attractions",
      reverse: true,
    },
    {
      title: "Dining on the island",
      content:
        "Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine",
      image: "/dining.jpg",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
      buttonLink: "/dining",
      buttonText: "View Dining",
      reverse: false,
    },
    {
      title: "Getting to and around on the island",
      content:
        "Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years.Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. Bikes and helmets are available to rent from several vendors (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot",
      image: "/transportation.jpg",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@tristanhess?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tristan Hess</a> on <a href="https://unsplash.com/photos/blue-bus-on-road-during-daytime-AA2pOnLZykE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
      buttonLink: "/transportation",
      buttonText: "View Transportation",
      reverse: true,
    },
    {
      title: "Discover the island",
      content:
        "Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano",
      image: "/discover.jpg",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@oulashin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sean Oulashin</a> on <a href="https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
      buttonLink: "/discover",
      buttonText: "Discover Taniti",
      reverse: false,
    },
  ];

  return (
    <div>
      <JumboTron
        title="Welcome to Tanitian Island"
        description="The ultimate paradise vacation destination"
      />
      <PageIntro
        title="Your Destination For Paradise"
        content="Taniti is a small, tropical island in the Pacific. While the island
          has an area of less than 500 square miles, the terrain is varied and
          includes both sandy and rocky beaches, a small but safe harbor, lush
          tropical rainforests, and a mountainous interior that includes a
          small, active volcano. Taniti has an indigenous population of about
          20,000. Until a recent increase in tourism, most the Tanitian economy
          was dominated by fishing or agriculture."
      />
      <div className="space-y-4">
        {imageSectionContent.map((content) => (
          <ImageSection
            key={content.title}
            title={content.title}
            content={content.content}
            image={content.image}
            imageCreds={content.imageCreds}
            buttonLink={content.buttonLink}
            buttonText={content.buttonText}
            reverse={content.reverse}
          />
        ))}
      </div>
      <ContactCta />
    </div>
  );
}
