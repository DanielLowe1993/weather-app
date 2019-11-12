import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import axiosMock from 'axios';
import LocationWeather from '.';
import weatherMock from './__mocks__/weatherMock';
jest.mock('axios');
it('makes a request for active location weather information adn displays correct weather info', async () => {
  const activeLocation = 'London'
  axiosMock.get.mockResolvedValue({ data: weatherMock });

  const { getByTestId } = render(
    <LocationWeather activeLocation={activeLocation} />
  );

  const weatherHolder = await waitForElement(() => getByTestId('weather-holder'));

  expect(weatherHolder).toBeVisible();
  expect(getByTestId('location-header')).toHaveTextContent(activeLocation);
  expect(getByTestId('weather-summary')).toHaveTextContent(weatherMock.currently.summary);
  expect(getByTestId('weather-temperature')).toHaveTextContent(`${Math.round(weatherMock.currently.temperature)}`);
});
