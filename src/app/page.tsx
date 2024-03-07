import Image from "next/image";
import Header from "./components/Header";
import NavigationBar from "./components/NavBar";
import TropicalFish from "./components/TropicalBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-80 space-y-8">
      <Header />
      <NavigationBar />
      <div className="w-full bg-blue-500 text-white text-center py-20">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explore Tropical Fish
        </button>
      </div>
  
      <TropicalFish />
      <div className="w-full bg-gray-200 text-gray-800 text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Plants & Decor</h2>
        <p>Content related to Plants & Decor goes here...</p>
      </div>
      <div className="w-full bg-gray-200 text-gray-800 text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Aquascapes</h2>
        <p>Content related to Aquascapes goes here...</p>
      </div>
      <div className="w-full bg-gray-200 text-gray-800 text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Tips</h2>
        <p>Content related to Tips goes here...</p>
      </div>
    </main>
  );
}
