const header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white">
      <h1 className="text-2xl font-bold">Fishtank</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 mr-2 border border-gray-300 rounded"
        />
        <button className="px-4 py-1 bg-white text-blue-500 rounded">Search</button>
      </div>
    </header>
  );
};

export default header;