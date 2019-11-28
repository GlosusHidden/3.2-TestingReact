import React from 'react'
import renderer from 'react-test-renderer'

import AdvancedWeatherInfo from '../AdvancedWeatherInfo'

import {myStore} from './test_data/data'

it('AdvancedWeatherInfo Component Snapshot', () => {
  const renderedValue = renderer.create(
    <AdvancedWeatherInfo data={myStore.action.Paris}/>
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
