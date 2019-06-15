import { ADD_TODO, DRE_TODO, CHANGE_OBJ } from './action'
import { combineReducers } from 'redux'

const initState = {
  count: null,
  obj: {
    label: '',
  },
  
}



function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {...state, count:  action.text };
    case DRE_TODO:
      return { count: state.count - 1 }
    default:
      return state
  }
}

function reducer1(state = initState, action) {
  switch (action.type) {
    case CHANGE_OBJ:
      return Object.assign({}, state.obj, action.text)
    default:
      return state
  }
}

const reducers = combineReducers({ reducer, reducer1 })

export default reducers;
