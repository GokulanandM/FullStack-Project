import React, { useState } from 'react';

const LocationNavigation = () => {
  const [location, setLocation] = useState('');

  const handleNavigate = () => {
    const encodedLocation = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`);
  };

  return (
    <div>
      <h2>Location Navigation</h2>
      <input 
        type="text" 
        placeholder="Enter Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button onClick={handleNavigate}>Navigate</button>
    </div>
  );
};

export default LocationNavigation;
