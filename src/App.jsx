import './App.css'
import FormUser from './components/FormUser'
import useCrud from './hoocks/useCrud'
import { useEffect, useState } from 'react'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
 
  const url ='https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])
  
 console.log(users);
  return (
    <div>
      <h1>Users</h1>
      <FormUser
      createUser={createUser}
      infoUpdate={infoUpdate}
      />
      <div>
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser}
            setInfoUpdate={setInfoUpdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
