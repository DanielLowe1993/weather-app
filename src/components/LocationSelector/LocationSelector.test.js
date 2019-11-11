import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import LocationSelector from './index';

it('displays correct selected location', () => {
  const activeLocation = 'London'
  const { getByTestId } = render(
    <LocationSelector activeLocation={activeLocation} handleLocationchange={jest.fn()} />
  );

  expect(getByTestId('location-form-control')).toBeVisible();
  expect(getByTestId('location-value').value).toEqual(activeLocation);
});

it('fires a event on change of select', async () => {
  const activeLocation = 'London'
  const handleLocationchange = jest.fn().mockImplementation(() => {
    console.log('Mock Triggered');
  });

  const { getByTestId, getByRole } = render(
    <LocationSelector activeLocation={activeLocation} handleLocationchange={handleLocationchange} />
  );

  const selectButton = getByRole('button');

  fireEvent.click(selectButton);
  await waitForElement(() => getByTestId(activeLocation));

  const clickableOption = getByTestId('Paris');
  fireEvent.click(clickableOption);

  expect(handleLocationchange).toHaveBeenCalledTimes(1);
});
