import Card from "@/components/Card";
import React from "react";

interface AttractionCard {
  id: number;
  name: string;
  image: string;
  attractionType: string;
  imageCreds: string;
}
const attractionData: AttractionCard[] = [
  {
    id: 1,
    name: "Taniti City Exploration",
    image: "/discover.jpg",
    attractionType:
      "Experience native architecture and nearby white, sandy beaches of Yellow Leaf Bay",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@oulashin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sean Oulashin</a> on <a href="https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 2,
    name: "Boat or Bus Tours",
    image: "/discover.jpg",
    attractionType: "Explore the island with scenic boat or bus tours",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@oulashin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sean Oulashin</a> on <a href="https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 3,
    name: "Rainforest Hikes",
    image: "/discover.jpg",
    attractionType: "Enjoy hiking trails through the lush rainforest",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@oulashin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sean Oulashin</a> on <a href="https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 4,
    name: "Volcano Visit",
    image: "/discover.jpg",
    attractionType: "Discover Taniti’s active volcano",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@oulashin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sean Oulashin</a> on <a href="https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
];

const DiscoverCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto max-w-7xl py-4">
      {attractionData.map((attraction) => (
        <Card
          key={attraction.id}
          title={attraction.name}
          subtitle={attraction.attractionType}
          imagePath={attraction.image}
          imageCreds={attraction.imageCreds}
        />
      ))}
    </div>
  );
};

export default DiscoverCards;
