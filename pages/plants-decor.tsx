import React from 'react';

const PlantsDecorPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Plants & Decor</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Hardscape</h2>
          <p className="text-gray-700">This is where you can showcase hardscape elements like rocks and driftwood.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Substrate</h2>
          <p className="text-gray-700">Here, you can talk about different types of substrates for aquariums.</p>
        </div>
      </div>
    </div>
  );
};

export default PlantsDecorPage;
