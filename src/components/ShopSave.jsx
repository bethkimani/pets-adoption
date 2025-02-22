// src/components/ShopSave.jsx
const ShopSave = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center">Shop & Save</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Royal Canin</h3>
            <p>10% off</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Dog Food</h3>
            <p>15% off</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Dog Tags</h3>
            <p>20% off</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShopSave;