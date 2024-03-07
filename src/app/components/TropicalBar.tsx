// TropicalFish.jsx

import React from 'react';

const TropicalFish = () => {
  return (
    <div>
      <h2>Tropical Fish</h2>
      <div className="flex flex-wrap justify-around">
        <Category name="Tetra" />
        <Category name="Rasboras" />
        <Category name="Pencilfish" />
        <Category name="Rainbowfish" />
        <Category name="Killifish" />
        <Category name="Danios" />
        <Category name="Goldfish" />
        <Category name="Barbs" />
        <Category name="Minnows" />
        <Category name="Cichlids" />
        <Category name="Badis" />
        <Category name="Gouramis" />
        <Category name="Snails" />
        <Category name="Shrimps" />
        <Category name="Crayfish" />
        <Category name="Crab" />
        <Category name="Betta" />
        <Category name="Livebearers" />
        <Category name="Other Livestock" />
      </div>
    </div>
  );
};

const Category = ({ name }) => {
  return (
    <div className="flex flex-col items-center mx-4 my-2">
      <div className="w-16 h-16 bg-blue-500 rounded-full mb-2"></div>
      <p>{name}</p>
    </div>
  );
};

export default TropicalFish;
