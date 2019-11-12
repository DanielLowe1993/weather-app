import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import api from './api';
import Classes from './LocationWeather.module.scss';
import WeatherIcon from './components/WeatherIcon';

const LocationWeather = ({ activeLocation }) => {
  const [weatherData, setWeatherData] = useState(null);

  const getLocationWeather = useCallback(async () => {
    try {
      const { data } = await api.getWeatherData(activeLocation);
      setWeatherData(data);
    } catch {
      //Handle Error
    } finally {
      //Add loading
    }
  }, [activeLocation]);

  useEffect(() => {
    getLocationWeather()
  }, [getLocationWeather]);

  return (
    <div className={Classes.location}>
      <h1 data-testid="location-header">{activeLocation}</h1>

      {weatherData && (
        <div data-testid="weather-holder" className={Classes['weather-holder']}>
          <p data-testid="weather-summary" className={Classes.summary}>{weatherData.currently.summary}</p>
          <WeatherIcon icon={weatherData.currently.icon} />
          <p data-testid="weather-temperature" className={Classes.temperature}>{Math.round(weatherData.currently.temperature)}&deg;c</p>
        </div>
      )}
    </div>
  );
};

LocationWeather.propTypes = {
  activeLocation: PropTypes.string.isRequired,
};

export default LocationWeather;
