import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import MainWeatherInfo from '../MainWeatherInfo'

import {myStore, mockStore} from './test_data/data'

describe('MainWeatherInfo Component Snapshot', () => {
  it('displayStyle - Favour', () => {
    const renderedValue = renderer.create(
      <Provider store={mockStore}>
        <MainWeatherInfo data={myStore.action.Paris} id={1} displayStyle='Favour'/>
      </Provider>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

    it('displayStyle - Geo', () => {
      const renderedValue = renderer.create(
        <MainWeatherInfo data={myStore.action.GeolocationWeather} id={null} displayStyle='Geo'/>
      ).toJSON();
      expect(renderedValue).toMatchSnapshot();
    });
});
