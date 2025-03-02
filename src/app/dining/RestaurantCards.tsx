import Card from "@/components/Card";
import React from "react";

interface RestaurantCard {
  id: number;
  name: string;
  image: string; // URL or path to the image
  cuisineType: string;
}
const restaurantData: RestaurantCard[] = [
  // Local Fish and Rice (5 restaurants)
  {
    id: 1,
    name: "Ocean Catch",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
  },
  {
    id: 2,
    name: "Sea Harvest",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
  },
  {
    id: 3,
    name: "Fish Haven",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
  },
  {
    id: 4,
    name: "Rice & Reef",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
  },
  {
    id: 5,
    name: "Coastal Plate",
    image: "/dining.jpg",
    cuisineType: "Local Fish and Rice",
  },
  // American-Style Meals (3 restaurants)
  {
    id: 6,
    name: "Burger Bay",
    image: "/dining.jpg",
    cuisineType: "American",
  },
  {
    id: 7,
    name: "Diner Dock",
    image: "/dining.jpg",
    cuisineType: "American",
  },
  {
    id: 8,
    name: "Grill Shore",
    image: "/dining.jpg",
    cuisineType: "American",
  },
  // Pan-Asian Cuisine (2 restaurants)
  {
    id: 9,
    name: "Asia Tide",
    image: "/dining.jpg",
    cuisineType: "Pan-Asian",
  },
  {
    id: 10,
    name: "Oriental Wave",
    image: "/dining.jpg",
    cuisineType: "Pan-Asian",
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
        />
      ))}
    </div>
  );
};

export default RestaurantCards;
