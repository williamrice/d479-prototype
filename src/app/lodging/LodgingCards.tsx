import Card from "@/components/Card";
import React from "react";

const LodgingCards = () => {
  interface LodgingCard {
    id: number;
    name: string;
    image: string; // URL or path to the image
    lodgingType: string;
  }

  const lodgingData: LodgingCard[] = [
    // Inexpensive Hostel
    {
      id: 1,
      name: "Taniti Backpackers",
      image: "/lodging.jpg",
      lodgingType: "Hostel",
    },
    // One Large Four-Star Resort
    {
      id: 2,
      name: "Grand Taniti Resort",
      image: "/lodging.jpg",
      lodgingType: "Resort (4-Star)",
    },
    // Small Family-Owned Hotels (6 to represent "many")
    {
      id: 3,
      name: "Family Sea Inn",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
    },
    {
      id: 4,
      name: "Coral Family Lodge",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
    },
    {
      id: 5,
      name: "Ocean Breeze Hotel",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
    },
    {
      id: 6,
      name: "Sunset Family Stay",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
    },
    {
      id: 7,
      name: "Tideview Hotel",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
    },
    {
      id: 8,
      name: "Island Heritage Inn",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
    },
    // Growing Number of Bed and Breakfasts (2 to suggest growth)
    {
      id: 9,
      name: "Seaview B&B",
      image: "/lodging.jpg",
      lodgingType: "Bed & Breakfast",
    },
    {
      id: 10,
      name: "Palm Shore B&B",
      image: "/lodging.jpg",
      lodgingType: "Bed & Breakfast",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl py-4">
      {lodgingData.map((lodging) => (
        <Card
          key={lodging.id}
          title={lodging.name}
          subtitle={lodging.lodgingType}
          imagePath={lodging.image}
        />
      ))}
    </div>
  );
};

export default LodgingCards;
