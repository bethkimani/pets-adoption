// src/components/Services.jsx
const Services = () => {
  return (
    <div className="p-6" id="adoption-info">
      <h2 className="text-2xl font-bold text-center">What We Offer</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="font-bold">Dog Training</h3>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="font-bold">Hygienic Care</h3>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="font-bold">Healthcare Tips</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;