import axios from 'axios'
import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
} from '../constants/usersConstants'

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USERS_LIST_REQUEST })

    const { data } = await axios.get('http://localhost:3000/api/users')

    dispatch({ type: USERS_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: USERS_LIST_FAIL, error: error.response })
  }
}