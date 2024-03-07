import React from 'react';
import Header from '@/app/components/Header';
import NavigationBar from '@/app/components/NavBar';
import TropicalFish from '@/app/components/TropicalBar';
import '../src/app/globals.css';

export default function Home() {
  return (
    <main className="">
      <Header />
      <NavigationBar />
      <div className="w-full bg-blue-500 text-white text-center py-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explore Tropical Fish
        </button>
      </div>
      <TropicalFish />
      <div className="w-full bg-gray-200 text-gray-800 text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Plants & Decor</h2>
        <p>Content related to Plants & Decor goes here...</p>
      </div>
      <div className="w-full bg-gray-200 text-gray-800 text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Aquascapes</h2>
        <p>Content related to Aquascapes goes here...</p>
      </div>
      <div className="w-full bg-gray-200 text-gray-800 text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Tips</h2>
        <p>Content related to Tips goes here...</p>
      </div>
    </main>
  );
}
