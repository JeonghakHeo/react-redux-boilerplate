import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/actions/usersActions'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const { loading, success, error, users: userList } = users

  const fetchHandler = async () => {
    dispatch(fetchUsers())
  }

  return (
    <div>
      <h1>Users</h1>
      <button onClick={fetchHandler}>Fetch users</button>
      <ul>
        { success &&
          userList.map(user => (
            <li key={user.id}>{user.name} is {user.age} years old</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users