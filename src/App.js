import React, { useState } from 'react';
import LocationSelector from './components/LocationSelector';
import LocationWeather from './components/LocationWeather';
import Classes from './App.module.scss';

const App = () => {
  const [activeLocation, setActiveLocation] = useState('London');

  const handleLocationchange = (event) => {
    setActiveLocation(event.target.value);
  };

  return (
    <div className={Classes.container}>
      <LocationSelector activeLocation={activeLocation} handleLocationchange={handleLocationchange} />
      <LocationWeather activeLocation={activeLocation} />
    </div>
  );
}

export default App;
