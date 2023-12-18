import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL
} from '../constants/usersConstants'

const initialState = []

export const usersReducer = (state = initialState, action) => {
  switch (action.type) { 
    case USERS_LIST_REQUEST:
      return {
        loading: true
      }

    case USERS_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        success: true
      }

    case USERS_LIST_FAIL:
      return {
        loading: false,
        error: action.error
      }  
    default:
      return state;
  }
};