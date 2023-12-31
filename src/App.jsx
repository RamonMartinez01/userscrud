import './App.css'
import FormUser from './components/FormUser'
import useCrud from './hoocks/useCrud'
import { useEffect, useState } from 'react'
import UserCard from './components/UserCard'
import UserDeleted from './components/UserDeleted'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(true)
  const [isDeleted, setIsDeleted] = useState({ isDeleted: true, deletedUserName:'' })
 
  const url ='https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])
  
 console.log(users);
  const handleNewUser = () => {
    setIsDisable(false)
  }
 
  return (
    <div className='app'>
      <section className='app__header-section'>
        <div className='app__header-div'>
          <h1 className='app__title'>Users</h1>
          <button className='app__create-btn' onClick={handleNewUser}>Create New User</button>
        </div>
        <hr className='app__header-separator'/>
      </section>
      <div>
        <FormUser
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        isDisable={isDisable} 
        setIsDisable={setIsDisable}
        />
      </div>
      <div className='app__userCard-container'>
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
            setIsDeleted={setIsDeleted}
            />
          ))
        }
      </div>
      <div>
        <UserDeleted 
        isDeleted={isDeleted}
        setIsDeleted={setIsDeleted}
        />
      </div>
    </div>
  )
}

export default App
