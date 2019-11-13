import React from 'react';
import { render } from '@testing-library/react';
import WeatherIcon from '.';

it('displays a canvas', async () => {
  const icon = 'partly-cloudy-night'

  const { getByTestId } = render(
    <WeatherIcon icon={icon} />
  );

  expect(getByTestId('weather-icon-canvas')).toBeVisible();
});
