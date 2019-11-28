import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import Error from '../Error'

import {myStore, mockStore} from './test_data/data'


it('Error Component Snapshot', () => {
  const renderedValue = renderer.create(
    <Provider store={mockStore}>
      <Error />
    </Provider>
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
