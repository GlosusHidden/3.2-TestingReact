import React from 'react'
import renderer from 'react-test-renderer'

import Loading from '../Loading'

it('Loading Component Snapshot', () => {
  const renderedValue = renderer.create(
    <Loading />
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
