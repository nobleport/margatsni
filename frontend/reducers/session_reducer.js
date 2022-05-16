import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

let _defaultSession = {current_user: null};
const sessionReducer = (oldState=_defaultSession, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {current_user: action.user})
    case LOGOUT_CURRENT_USER:
       newState = _defaultSession
    default:
     return oldState
  }
}

export default sessionReducer;