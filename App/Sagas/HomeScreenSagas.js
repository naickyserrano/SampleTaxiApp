/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { put } from 'redux-saga/effects'
import HomeScreenSagaAction from '../Redux/HomeScreenRedux'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export function * getCurrentLocationSaga (action) {
  this.initialRegion = {}
  yield navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude
    let long = position.coords.longitude

    let initialRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }
    this.initialRegion = initialRegion
  },
  (err) => console.error(err),
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
  yield put(HomeScreenSagaAction.setCurrentLocation(this.initialRegion))
}
