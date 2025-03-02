import Card from "@/components/Card";
import React from "react";

interface TransportationCard {
  id: number;
  name: string;
  image: string; // URL or path to the image
  transportType: string;
}

const transportationData: TransportationCard[] = [
  // Category 1: Public Transport
  {
    id: 1,
    name: "Public Transport",
    image: "/transportation.jpg",
    transportType: "Local buses, shared taxis",
  },
  // Category 2: Water Transport
  {
    id: 2,
    name: "Water Transport",
    image: "/transportation.jpg",
    transportType: "Ferries, chartered boats",
  },
  // Category 3: Private Rentals
  {
    id: 3,
    name: "Private Rentals",
    image: "/transportation.jpg",
    transportType: "Scooter rentals, car rentals",
  },
  // Category 4: Guided Tours
  {
    id: 4,
    name: "Guided Tours",
    image: "/transportation.jpg",
    transportType: "Guided jeep tours, bicycle tours",
  },
];

const TransportationCards = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mt-2">
        Options to Get Around The Island
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-7xl py-4">
        {transportationData.map((tdata) => (
          <Card
            key={tdata.id}
            title={tdata.name}
            subtitle={tdata.transportType}
            imagePath={tdata.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TransportationCards;
