import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import locationConfig from '../../config/locationConfig';
import Classes from './LocationSelector.module.scss';

const LocationSelector = ({ activeLocation, handleLocationchange }) => {

  return (
    <div className={Classes['location-holder']}>
      <FormControl variant="outlined" className={Classes['form-control']} data-testid="location-form-control">
        <InputLabel htmlFor="location-select">
          Location
        </InputLabel>
        <Select
          id="location-select"
          value={activeLocation}
          labelWidth={60}
          inputProps={{
            'data-testid': "location-value"
          }}
          onChange={(event) => handleLocationchange(event)}
        >
          {locationConfig.map((location) => (
            <MenuItem key={location.name} value={location.name} data-testid={location.name}>{location.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

LocationSelector.propTypes = {
  activeLocation: PropTypes.string.isRequired,
  handleLocationchange: PropTypes.func.isRequired,
};

export default LocationSelector;
