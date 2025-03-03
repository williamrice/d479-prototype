import Card from "@/components/Card";
import React from "react";

const LodgingCards = () => {
  interface LodgingCard {
    id: number;
    name: string;
    image: string;
    lodgingType: string;
    imageCreds: string;
  }

  const lodgingData: LodgingCard[] = [
    {
      id: 1,
      name: "Taniti Backpackers",
      image: "/lodging.jpg",
      lodgingType: "Hostel",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
      id: 2,
      name: "Grand Taniti Resort",
      image: "/lodging.jpg",
      lodgingType: "Resort (4-Star)",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
      id: 3,
      name: "Family Sea Inn",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
      id: 4,
      name: "Coral Family Lodge",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
      id: 5,
      name: "Ocean Breeze Hotel",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
      id: 6,
      name: "Sunset Family Stay",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
      id: 7,
      name: "Tideview Hotel",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
      id: 8,
      name: "Island Heritage Inn",
      image: "/lodging.jpg",
      lodgingType: "Family Hotel",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    // Growing Number of Bed and Breakfasts (2 to suggest growth)
    {
      id: 9,
      name: "Seaview B&B",
      image: "/lodging.jpg",
      lodgingType: "Bed & Breakfast",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
      id: 10,
      name: "Palm Shore B&B",
      image: "/lodging.jpg",
      lodgingType: "Bed & Breakfast",
      imageCreds:
        'Photo by <a href="https://unsplash.com/@nathan_cima?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Cima</a> on <a href="https://unsplash.com/photos/a-view-of-a-beach-with-houses-on-the-cliff-2KZksT2BSDw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
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
          imageCreds={lodging.imageCreds}
        />
      ))}
    </div>
  );
};

export default LodgingCards;
