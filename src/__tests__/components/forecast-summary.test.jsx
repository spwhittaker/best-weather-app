import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../components/forecast-summary';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

it('renders the date', () => {
    const wrapper = shallow((
        <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon" />
    ))

expect(wrapper.find('.forecast-summary-_date').text()).toEqual('mockDate');
});


it('renders the temperature', () => {
    const wrapper = shallow((
        <ForecastSummary 
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon" />
    ));

    expect(wrapper.find('.forecast-summary_temperature').text()).toEqual('mockTemperature')
});

it('renders the description', () => {
    const wrapper = shallow((
        <ForecastSummary 
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon" />
    ));

    expect(wrapper.find('.forecast-summary_description').text()).toEqual('mockDescription');
});

it('renders the icon', () => {
    const wrapper = shallow((
        <ForecastSummary 
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon" />
    ));

    expect(wrapper.find('.forecast-summary_icon').text()).toEqual('mockIcon');
});
