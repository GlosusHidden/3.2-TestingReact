import React from 'react'
import renderer from 'react-test-renderer'

import WeatherLine from '../WeatherLine';

it('WeatherLine Component Snapshot', () => {
  const renderedValue = renderer.create(
    <WeatherLine  param='Weather' value='Sun' />
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
