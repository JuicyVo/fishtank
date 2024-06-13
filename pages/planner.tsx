import React from 'react';
import Header from '../src/app/components/Header';
import NavigationBar from '../src/app/components/NavBar';
import TankBox from '../src/app/components/tankBox'; 
import SideBar from '../src/app/components/SideBar';
import '../src/app/globals.css';

const PlantsDecorPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">

      <SideBar />

      <div className="flex flex-col flex-1">
        <Header />
        <div className="mb-6"></div> 
        <NavigationBar />
        <div className="mb-6"></div> 
        <main className="flex flex-col items-center justify-center py-20 bg-gray-200 text-gray-800 min-h-screen">
          <h1 className="text-3xl font-bold mb-8">Aquascape Planner</h1>
       
          <TankBox />
        </main>
      </div>
    </div>
  );
};

export default PlantsDecorPage;
