import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import MainComponent from '../MainComponent'

import {myStore, mockStore} from './test_data/data'

it('MainComponent Component Snapshot', () => {
    const geolocationMock = {
      getCurrentPosition: jest.fn()
    };
    global.navigator.geolocation = geolocationMock;
    const renderedValue = renderer.create(
      <Provider store={mockStore}>
        <MainComponent />
      </Provider>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
})
