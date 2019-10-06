import {CHANGE_SEARCH_FIELD} from './constants'

// this represents the stateful action
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});