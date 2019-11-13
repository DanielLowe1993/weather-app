import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import LocationWeatherClasses from '../../LocationWeather.module.scss';
import WeatherIconClasses from '../WeatherIcon/WeatherIcon.module.scss';

const Loader = () => (
  <div data-testid="loader" className={LocationWeatherClasses['weather-holder']}>
    <Skeleton variant="rect" width={100} />
    <Skeleton className={WeatherIconClasses.icon} variant="rect" width={100} height={100} />
    <Skeleton variant="rect" width={100} />
  </div>

);

export default Loader;
