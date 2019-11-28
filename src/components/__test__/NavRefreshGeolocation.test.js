import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import NavRefreshGeolocation from '../NavRefreshGeolocation'

import {myStore, mockStore} from './test_data/data'

it('NavRefreshGeolocation Component Snapshot', () => {
  const geolocationMock = {
    getCurrentPosition: jest.fn()
  };
  global.navigator.geolocation = geolocationMock;
  const renderedValue = renderer.create(
    <Provider store={mockStore}>
      <NavRefreshGeolocation />
    </Provider>
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
