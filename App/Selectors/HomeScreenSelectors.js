import { createSelector } from 'reselect'

/**
 * Direct selector to the employeePage state domain
 */
const selectHomeScreenDomain = () => (state) => state.homeScreen

/**
 * Other specific selectors
 */
const selectInputLocation = () => createSelector(
  selectHomeScreenDomain(),
  (substate) => substate.inputLocation
)

export {
  selectInputLocation
}
