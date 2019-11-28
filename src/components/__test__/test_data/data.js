import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const myStore = {
  "action": {
    "GeolocationWeather": {
      "cod": 200,
      "city": "Farforovaya",
      "temp": 3,
      "pressure": 767,
      "humidity": 90,
      "weather": "Overcast clouds",
      "icon": "04n",
      "wind": 3,
      "coords": [
        59.86,
        30.39
      ]
    },
    "Paris": {
      "cod": 200,
      "city": "Paris",
      "temp": 5,
      "pressure": 753,
      "humidity": 93,
      "weather": "Light rain",
      "icon": "10n",
      "wind": 2.1,
      "coords": [
        48.86,
        2.35
      ]
    },
    "Moscow": {},
    "SP2B": {
      "cod": 404
    }
  }
}

const middlewares = [thunk];
const store = configureMockStore(middlewares);
const mockStore = store(myStore);

export {myStore, mockStore};
