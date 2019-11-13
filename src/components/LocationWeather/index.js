import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import api from './api';
import Classes from './LocationWeather.module.scss';
import WeatherIcon from './components/WeatherIcon';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

const LocationWeather = ({ activeLocation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getLocationWeather = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const { data } = await api.getWeatherData(activeLocation);
      setWeatherData(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [activeLocation]);

  useEffect(() => {
    getLocationWeather();
  }, [getLocationWeather]);

  return (
    <div className={Classes.location}>
      <h1 data-testid="location-header">{activeLocation}</h1>

      {(weatherData && !loading && !error) && (
        <div data-testid="weather-holder" className={Classes['weather-holder']}>
          <p data-testid="weather-summary" className={Classes.summary}>{weatherData.currently.summary}</p>
          <WeatherIcon icon={weatherData.currently.icon} />
          <p data-testid="weather-temperature" className={Classes.temperature}>{Math.round(weatherData.currently.temperature)}&deg;c</p>
        </div>
      )}

      {loading && (
        <Loader />
      )}

      {error && (
        <ErrorMessage message="There was an error getting weather information, please try again." />
      )}
    </div>
  );
};

LocationWeather.propTypes = {
  activeLocation: PropTypes.string.isRequired,
};

export default LocationWeather;
