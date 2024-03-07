import React from 'react';

interface CategoryProps {
  name: string;
}

const Category: React.FC<CategoryProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-16 h-16 bg-blue-500 rounded-full mb-2"></div>
      <p>{name}</p>
    </div>
  );
};

const TropicalFish = () => {
  const categories = [
    "Tetras, Rasboras & Pencilfish",
    "Rainbowfish, Killifish & Danios",
    "Goldfish",
    "Barbs & Minnows",
    "Cichlids",
    "Badis",
    "Gouramis",
    "Snails",
    "Shrimps, Crayfish & Crabs",
    "Betta",
    "Livebearers",
    "Other Livestock",
  ];

  return (
    <div>
      <h2>Tropical Fish</h2>
      <div className="flex flex-wrap justify-between">
        {categories.map((category, index) => (
          <Category key={index} name={category} />
        ))}
      </div>
    </div>
  );
};

export default TropicalFish;
