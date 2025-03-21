import { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = () => {
    onFilterChange({ location, type });
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select type</option>
        <option value="van">Van</option>
        <option value="motorhome">Motorhome</option>
      </select>
      <button onClick={handleSubmit}>Apply Filters</button>
    </div>
  );
};

export default Filter;
