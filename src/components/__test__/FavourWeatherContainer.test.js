import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import FavourWeatherContainer from '../FavourWeatherContainer'

import {myStore, mockStore} from './test_data/data'

it('FavourWeatherContainer Component Snapshot', () => {
  const renderedValue = renderer.create(
    <Provider store={mockStore}>
      <FavourWeatherContainer data={[]}/>
    </Provider>
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
