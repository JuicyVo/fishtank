import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-300 w-1/4 h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Elements</h2>
      <ul>
        <li className="mb-4">
          <img 
            src="/assets/wood1.jpeg" 
            alt="Wood 1" 
            className="cursor-pointer border border-gray-400 p-1 rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </li>
        <li className="mb-4">
          <img 
            src="/assets/wood2.png" 
            alt="Wood 2" 
            className="cursor-pointer border border-gray-400 p-1 rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </li>
        <li className="mb-4">
          <img 
            src="/assets/wood3.png" 
            alt="Wood 3" 
            className="cursor-pointer border border-gray-400 p-1 rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </li>
      </ul>

      {/* Debugging image */}
      <h2>Debug Image:</h2>
      <img 
        src="/assets/dragonstone.jpeg" 
        alt="Wood 1" 
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
      />
    </div>
  );
};

export default Sidebar; 