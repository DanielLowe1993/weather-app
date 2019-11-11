import React, { useState } from 'react';
import LocationSelector from './components/LocationSelector';

const App = () => {
  const [activeLocation, setActiveLocation] = useState('London');

  const handleLocationchange = (event) => {
    setActiveLocation(event.target.value);
  };

  return (
    <LocationSelector activeLocation={activeLocation} handleLocationchange={handleLocationchange} />
  );
}

export default App;
