import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../styles/forecast-details.css';

const ForecastDetails = forecast => {
    return (<div className="detailedForecast" >
      <span className="formattedDate">Date: {moment(forecast.forecast.date).format('ddd Do MMM')}</span>
      <br />
      <span className="maxTemp">Max Temperature:{forecast.forecast.temperature.max}°C</span>
      <br />
      <span className="minTemp">Min Temperature: {forecast.forecast.temperature.min}°C</span>
      <br />
      <span className="windSpeed">Wind Speed: {forecast.forecast.wind.speed}mph</span>
      <br />
      <span className="windDirection">Wind Direction: {forecast.forecast.wind.direction}</span>
      <br />
      <span className="humidity">Humidity: {forecast.forecast.humidity}%</span>
    </div>);
  };
export default ForecastDetails;
