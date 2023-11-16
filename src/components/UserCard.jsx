import './Styles/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setIsDisable }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        setIsDisable(false)
    }

    return (
        <article className='card__user'>
            <h3 className='card__name'>{user.first_name} {user.last_name}</h3>
            <ul className='card__list'>
                <li className='card__item'>
                    <span className='card__label'>Email</span>
                    <span className='card__label-info'>{user.email}</span>
                </li>
                <li className='card__item'>
                    <span className='card__label'>Birthday</span>
                    <span className='card__label-info'>{user.birthday}</span>

                </li>
            </ul>
            <button className='card__delete-btn' onClick={handleDelete}><i className='bx bx-trash'></i>Delete</button><button className='card__edit-btn' onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
        </article>
    )
}

export default UserCard