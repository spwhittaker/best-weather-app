import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummaries from '../../components/forecast-summaries';
import ForecastSummary from '../../components/forecast-summary';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

const forecasts = [
    {
      date: 123,
      description: 'date1',
      icon: 'icon1',
      temperature: {
        max: 999,
      },
    },
    {
      date: 456,
      description: 'date2',
      icon: 'icon2',
      temperature: {
        max: 777,
      },
    },
  ];

it('renders the correct number of ForecastSummary components', () => {
    const wrapper = Enzyme.shallow((
        <ForecastSummaries forecasts={forecasts} />
    ));
    expect(wrapper.find(ForecastSummary).length).toEqual(2);

});

