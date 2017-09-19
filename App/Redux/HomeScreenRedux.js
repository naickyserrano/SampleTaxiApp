import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getInputLocation: ['payload']
})

export const HomeScreenTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  inputLocation: {}
})

/* ------------- Reducers ------------- */

export const getInputLocation = (state, action) => {
  return state.set('inputLocation', action.payload)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_INPUT_LOCATION]: getInputLocation
})
