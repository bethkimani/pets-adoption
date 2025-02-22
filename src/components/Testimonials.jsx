// src/components/Testimonials.jsx
const Testimonials = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center">What Our Clients Say</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded shadow">
          <p>"The best place to find a pet!"</p>
          <p className="font-medium">— Happy Client</p>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </div>
  );
};

export default Testimonials;