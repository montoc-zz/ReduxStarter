import { book_selected } from '../actions'
export default function(state = {}, action) {
  switch(action.type){
    case book_selected:
      return action.payload
  }
  return state
}
