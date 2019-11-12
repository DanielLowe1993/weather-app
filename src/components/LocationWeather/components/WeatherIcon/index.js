import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Classes from './WeatherIcon.module.scss'
const Skycons = require("skycons")(window);

const WeatherIcon = ({ icon }) => {
  useEffect(() => {
    var skycons = new Skycons();
    const formattedIconName = icon.replace(/-/g, '_').toUpperCase();
    skycons.add("weather-icon", Skycons[formattedIconName]);
    skycons.play();
  }, [icon])

  return (
    <canvas data-testid="weather-icon-canvas" className={Classes.icon} id="weather-icon" width="100" height="100"></canvas>
  );
};

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default WeatherIcon;