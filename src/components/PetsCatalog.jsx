// src/components/PetsCatalog.jsx
const PetsCatalog = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center">Available Pets</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <img src="path_to_image" alt="Pet" className="w-full h-48 object-cover rounded-t" />
          <h3 className="font-bold">Max</h3>
          <p>A friendly golden retriever.</p>
        </div>
        {/* Add more pets as needed */}
      </div>
    </div>
  );
};

export default PetsCatalog;