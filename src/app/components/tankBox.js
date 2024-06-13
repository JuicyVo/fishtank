import React, { useState } from 'react';

const TankBox = () => {
  const [shape, setShape] = useState('rectangle');

  const handleToggleShape = () => {
    setShape(shape === 'rectangle' ? 'cube' : 'rectangle');
  };

  const boxStyles = {
    rectangle: {
      width: '800px', 
      height: '400px', 
      backgroundColor: '#3b82f6',
      border: '2px solid black',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    },
    cube: {
      width: '500px', 
      height: '500px', 
      backgroundColor: '#3b82f6',
      border: '2px solid black',
  
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    }
  };

  return (
    <div className="flex-1 bg-gray-200 text-gray-800 flex flex-col items-center justify-center h-screen">
      <button 
        onClick={handleToggleShape} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {shape === 'rectangle' ? 'Switch to Cube' : 'Switch to Rectangle'}
      </button>
      <div style={shape === 'rectangle' ? boxStyles.rectangle : boxStyles.cube}>
        {/* This represents the tank visualization */}
        {/* You can add draggable elements here */}
      </div>
    </div>
  );
};

export default TankBox;
