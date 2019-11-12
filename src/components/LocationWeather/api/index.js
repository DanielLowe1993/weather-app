import axios from 'axios';
import locationConfig from '../../../config/locationConfig';

const getWeatherData = (activeLocation) => {
  const locationData = locationConfig.filter(location => location.name === activeLocation);
  const params = {
    units: 'si',
  };

  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = `https://api.darksky.net/forecast/ea34713a4bd135ad725b6afb1c434a70/${locationData[0].latitude},${locationData[0].longitude}`

  return axios.get(proxy + url, { params });
};

export default { getWeatherData };
