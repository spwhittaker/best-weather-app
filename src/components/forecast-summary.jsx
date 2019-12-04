import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummaries from './forecast-summaries';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
//import moment from 'moment';

const ForecastSummary = props => {
  return (<div className="forecast">
    <div className="forecast-summary__date">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="description">{props.description}</div>
    <div className="forecast-summary__icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
    <div className="temperature">{props.temperature}</div>
  </div>)
};

export default ForecastSummary;
