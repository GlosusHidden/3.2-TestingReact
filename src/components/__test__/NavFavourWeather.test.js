import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import NavFavourWeather from '../NavFavourWeather'

import {myStore, mockStore} from './test_data/data'

it('NavFavourWeather Component Snapshot', () => {
  const renderedValue = renderer.create(
    <Provider store={mockStore}>
      <NavFavourWeather />
    </Provider>
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
