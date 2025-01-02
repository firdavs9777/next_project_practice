import { fetchUsers } from "@/utils/actions"

async function UserList() {
  const users = await fetchUsers()
  return (
    <div  className='text-xl'>
      {users.length ? <div>
        {users.map((user) => {
          return <div key={user.id}>
            <h1> First Name: {user.firstName}</h1>
            <p>Last Name: {user.lastName}</p>
          </div>
})}
      </div> : <p>No users found in the list</p>}
    </div>
  )
}

export default UserList
