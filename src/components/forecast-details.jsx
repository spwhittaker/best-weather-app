import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../styles/forecast-details.css';

const ForecastDetails = forecast => {
  return (
    <div className="detailedForecast">
      <div className="location-info">
        <span className="formattedDate">Date: </span>
        <span>{moment(forecast.forecast.date).format('ddd Do MMM')}</span>
      </div>
      <div className="location-info">
        <span className="maxTemp">Max Temperature: </span>
        <span>{forecast.forecast.temperature.max}°C</span>
      </div>
      <div className="location-info">
        <span className="minTemp">Min Temperature: </span>
        <span>{forecast.forecast.temperature.min}°C</span>
      </div>
      <div className="location-info">
        <span className="windSpeed">Wind Speed: </span>
        <span>{forecast.forecast.wind.speed}mph</span>
      </div>
      <div className="location-info">
        {' '}
        <span className="windDirection">Wind Direction: </span>
        <span>{forecast.forecast.wind.direction}</span>
      </div>
      <div className="location-info">
        <span className="humidity">Humidity: </span>
        <span>{forecast.forecast.humidity}%</span>
      </div>
    </div>
  );
};
export default ForecastDetails;
