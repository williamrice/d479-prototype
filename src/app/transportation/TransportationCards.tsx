import Card from "@/components/Card";
import React from "react";

interface TransportationCard {
  id: number;
  name: string;
  image: string;
  transportType: string;
  imageCreds: string;
}

const transportationData: TransportationCard[] = [
  {
    id: 1,
    name: "Public Transport",
    image: "/transportation.jpg",
    transportType: "Local buses, shared taxis",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@tristanhess?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tristan Hess</a> on <a href="https://unsplash.com/photos/blue-bus-on-road-during-daytime-AA2pOnLZykE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },

  {
    id: 2,
    name: "Water Transport",
    image: "/transportation.jpg",
    transportType: "Ferries, chartered boats",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@tristanhess?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tristan Hess</a> on <a href="https://unsplash.com/photos/blue-bus-on-road-during-daytime-AA2pOnLZykE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },

  {
    id: 3,
    name: "Private Rentals",
    image: "/transportation.jpg",
    transportType: "Scooter rentals, car rentals",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@tristanhess?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tristan Hess</a> on <a href="https://unsplash.com/photos/blue-bus-on-road-during-daytime-AA2pOnLZykE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },

  {
    id: 4,
    name: "Guided Tours",
    image: "/transportation.jpg",
    transportType: "Guided jeep tours, bicycle tours",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@tristanhess?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tristan Hess</a> on <a href="https://unsplash.com/photos/blue-bus-on-road-during-daytime-AA2pOnLZykE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
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
            imageCreds={tdata.imageCreds}
          />
        ))}
      </div>
    </div>
  );
};

export default TransportationCards;
