import Card from "@/components/Card";
import React from "react";

interface RestaurantCard {
  id: number;
  name: string;
  image: string;
  cuisineType: string;
  imageCreds: string;
}
const restaurantData: RestaurantCard[] = [
  {
    id: 1,
    name: "Ocean Catch",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 2,
    name: "Sea Harvest",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 3,
    name: "Fish Haven",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 4,
    name: "Rice & Reef",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 5,
    name: "Coastal Plate",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 6,
    name: "Burger Bay",
    image: "/dining.jpg",
    cuisineType: "American",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 7,
    name: "Diner Dock",
    image: "/dining.jpg",
    cuisineType: "American",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 8,
    name: "Grill Shore",
    image: "/dining.jpg",
    cuisineType: "American",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 9,
    name: "Asia Tide",
    image: "/dining.jpg",
    cuisineType: "Pan-Asian",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  {
    id: 10,
    name: "Oriental Wave",
    image: "/dining.jpg",
    cuisineType: "Pan-Asian",
    imageCreds:
      'Photo by <a href="https://unsplash.com/@outwardboundcr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Outward Bound Costa Rica</a> on <a href="https://unsplash.com/photos/a-couple-of-people-walking-down-a-dirt-road-m7oBPOikS4I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
];

const RestaurantCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl py-4">
      {restaurantData.map((restaurant) => (
        <Card
          key={restaurant.id}
          title={restaurant.name}
          subtitle={restaurant.cuisineType}
          imagePath={restaurant.image}
          imageCreds={restaurant.imageCreds}
        />
      ))}
    </div>
  );
};

export default RestaurantCards;
