import Card from "@/components/Card";
import React from "react";

interface EntertainmentCard {
  id: number;
  name: string;
  image: string;
  activityType: string;
  imageCreds: string;
}

const entertainmentData: EntertainmentCard[] = [
  {
    id: 1,
    name: "Cultural Exploration",
    image: "/attractions.jpg",
    activityType: "Visit the local history museum, art galleries",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 2,
    name: "Outdoor Adventures",
    image: "/attractions.jpg",
    activityType:
      "Chartered fishing tours, snorkeling, zip-lining in the rainforest, helicopter rides",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 3,
    name: "Nightlife & Social",
    image: "/attractions.jpg",
    activityType:
      "Visit pubs including a microbrewery, dancing at a new dance club, seeing a movie",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 4,
    name: "Fun & Games",
    image: "/attractions.jpg",
    activityType: "Playing at an arcade, bowling",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
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
          imageCreds={ent.imageCreds}
        />
      ))}
    </div>
  );
};

export default EntertainmentCards;
