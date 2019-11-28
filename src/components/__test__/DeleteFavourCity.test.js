import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import DeleteFavourCity from '../DeleteFavourCity'

import {myStore, mockStore} from './test_data/data'

it('DeleteFavourCity Component Snapshot', () => {
  const renderedValue = renderer.create(
    <Provider store={mockStore}>
      <DeleteFavourCity id={1}/>
    </Provider>
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
