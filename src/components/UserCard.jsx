
const UserCard = ({ user, deleteUser, setInfoUpdate }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }
    
    const handleEdit = () => {
        setInfoUpdate(user)
    }

  return (
    <article>
        <h3>{user.first_name} {user.last_name}</h3>
        <ul>
            <li>
                <span>Email</span>
                <span>{user.email}</span>
            </li>
            <li>
                <span>Birthday</span>
                <span>{user.birthday}</span>
               
            </li>
        </ul>
        <button onClick={handleDelete}><i className='bx bx-trash'></i>Delete</button><button onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
    </article>
  )
}

export default UserCard