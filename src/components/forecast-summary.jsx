import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummaries from './forecast-summaries';

const ForecastSummary = props => {
  return (<div className="forecast">
    <div className="date">{props.date}</div>
    <div className="description">{props.description}</div>
    <div className="icon">{props.icon}</div>
    <div className="temperature">{props.temperature}</div>
  </div>)
};

export default ForecastSummary;
