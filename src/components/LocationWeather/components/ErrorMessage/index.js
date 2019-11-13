import React from 'react';
import PropTypes from 'prop-types';
import Classes from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => (
  <div className={Classes.error} data-testid="error-message">
    <p className={Classes.message}>{message}</p>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
