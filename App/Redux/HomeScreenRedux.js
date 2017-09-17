import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  homeScreenRequest: ['data'],
  homeScreenSuccess: ['payload'],
  homeScreenFailure: null,
  getCurrentLocation: ['payload']
})

export const HomeScreenTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  currentLocation: {}
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const getCurrentLocation = (state, action) => {
  return state.set('currentLocation', action.payload)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOME_SCREEN_REQUEST]: request,
  [Types.HOME_SCREEN_SUCCESS]: success,
  [Types.HOME_SCREEN_FAILURE]: failure,
  [Types.GET_CURRENT_LOCATION]: getCurrentLocation
})
