import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';

it('renders LocationSelector and LocationWeather components ', () => {
  const { getByTestId } = render(
    <App />
  );

  expect(getByTestId('location-weather')).toBeVisible();
  expect(getByTestId('location-selector')).toBeVisible();
});