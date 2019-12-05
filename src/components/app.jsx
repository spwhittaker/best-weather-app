import React from 'react';
// import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';
import '../styles/app.css';
import axios from 'axios';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
        searchText: ''
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }
  handleSubmit = (e,place) => {
    e.preventDefault();
    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast/?city=${place}`).then(response => {
      this.setState({
        forecasts: response.data.forecasts,
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        }
      })
    })
  }

  componentDidMount() {
    Axios.get('https://mcr-codes-weather.herokuapp.com/forecast').then(response => {
      this.setState({
        forecasts: response.data.forecasts,
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        }
      })
    })

  }
  render() {
    const selectedForecast = this.state.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );
    return (
      <div className="forecast">
        <LocationDetails city={this.state.location.city} country={this.state.location.country} />
        <SearchForm onSubmit={this.handleSubmit}/>
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
    );
  }
}

/* App.propTypes = {

  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
  
}; */

export default App;
