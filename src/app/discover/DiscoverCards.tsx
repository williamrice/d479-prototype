import Card from "@/components/Card";
import React from "react";

interface AttractionCard {
  id: number;
  name: string;
  image: string; // URL or path to the image
  attractionType: string;
}
const attractionData: AttractionCard[] = [
  // Card 1: Taniti City Exploration
  {
    id: 1,
    name: "Taniti City Exploration",
    image: "/discover.jpg",
    attractionType:
      "Experience native architecture and nearby white, sandy beaches of Yellow Leaf Bay",
  },
  // Card 2: Boat or Bus Tours
  {
    id: 2,
    name: "Boat or Bus Tours",
    image: "/discover.jpg",
    attractionType: "Explore the island with scenic boat or bus tours",
  },
  // Card 3: Rainforest Hikes
  {
    id: 3,
    name: "Rainforest Hikes",
    image: "/discover.jpg",
    attractionType: "Enjoy hiking trails through the lush rainforest",
  },
  // Card 4: Volcano Visit
  {
    id: 4,
    name: "Volcano Visit",
    image: "/discover.jpg",
    attractionType: "Discover Taniti’s active volcano",
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
        />
      ))}
    </div>
  );
};

export default DiscoverCards;
