import React from 'react';
import Header from '../src/app/components/Header';
import NavigationBar from '../src/app/components/NavBar';
import '../src/app/globals.css';

const PlantsDecorPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-0 space-y- 10">
      <Header />
      <div className="mb-6"></div> 
      <NavigationBar />
      <div className="mb-6"></div>
      <main className="flex flex-col items-center justify-center py-20 bg-gray-200 text-gray-800 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Aquascapes</h1>
        <div className="grid grid-cols-2 gap-8 max-w-3xl">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Hardscape</h2>
            <p>This is where you can showcase hardscape elements like rocks and driftwood.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Substrate</h2>
            <p>Here, you can talk about different types of substrates for aquariums.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlantsDecorPage;
