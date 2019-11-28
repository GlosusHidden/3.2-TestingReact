import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import WeatherBlock from '../WeatherBlock'

import {myStore, mockStore} from './test_data/data'

describe('WeatherBlock Component Snapshot', () => {
  describe('displayStyle - Favour', () => {
    it('Standart ', () => {
      const renderedValue = renderer.create(
        <Provider store={mockStore}>
          <WeatherBlock data={myStore.action.Paris} key={1} id={1} removable={true} displayStyle='Favour'/>
        </Provider>
      ).toJSON();
      expect(renderedValue).toMatchSnapshot();
    });
    it('Loading ', () => {
      const renderedValue = renderer.create(
        <Provider store={mockStore}>
          <WeatherBlock data={myStore.action.Moscow} key={1} id={1} removable={true} displayStyle='Favour'/>
        </Provider>
      ).toJSON();
      expect(renderedValue).toMatchSnapshot();
    });
    it('Error ', () => {
      const renderedValue = renderer.create(
        <Provider store={mockStore}>
          <WeatherBlock data={myStore.action.SP2B} key={1} id={1} removable={true} displayStyle='Favour'/>
        </Provider>
      ).toJSON();
      expect(renderedValue).toMatchSnapshot();
    });
  })
  describe('displayStyle - Geo', () => {
    it('Standart ', () => {
      const renderedValue = renderer.create(
        <Provider store={mockStore}>
          <WeatherBlock data={myStore.action.Paris} key={null} id={null} removable={false} displayStyle='Geo'/>
        </Provider>
      ).toJSON();
      expect(renderedValue).toMatchSnapshot();
    });
    it('Loading ', () => {
      const renderedValue = renderer.create(
        <Provider store={mockStore}>
          <WeatherBlock data={myStore.action.Moscow} key={null} id={null} removable={false} displayStyle='Geo'/>
        </Provider>
      ).toJSON();
      expect(renderedValue).toMatchSnapshot();
    });
    it('Error ', () => {
      const renderedValue = renderer.create(
        <Provider store={mockStore}>
          <WeatherBlock data={myStore.action.SP2B} key={null} id={null} removable={false} displayStyle='Geo'/>
        </Provider>
      ).toJSON();
      expect(renderedValue).toMatchSnapshot();
    });
  })
})
