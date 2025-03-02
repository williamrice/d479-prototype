import Card from "@/components/Card";
import React from "react";

interface EntertainmentCard {
  id: number;
  name: string;
  image: string; // URL or path to the image
  activityType: string;
}

const entertainmentData: EntertainmentCard[] = [
  {
    id: 1,
    name: "Cultural Exploration",
    image: "/attractions.jpg",
    activityType: "Visit the local history museum, art galleries",
  },
  {
    id: 2,
    name: "Outdoor Adventures",
    image: "/attractions.jpg",
    activityType:
      "Chartered fishing tours, snorkeling, zip-lining in the rainforest, helicopter rides",
  },
  {
    id: 3,
    name: "Nightlife & Social",
    image: "/attractions.jpg",
    activityType:
      "Visit pubs including a microbrewery, dancing at a new dance club, seeing a movie",
  },
  {
    id: 4,
    name: "Fun & Games",
    image: "/attractions.jpg",
    activityType: "Playing at an arcade, bowling",
  },
];

const EntertainmentCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl py-4">
      {entertainmentData.map((ent) => (
        <Card
          key={ent.id}
          title={ent.name}
          subtitle={ent.activityType}
          imagePath={ent.image}
        />
      ))}
    </div>
  );
};

export default EntertainmentCards;
