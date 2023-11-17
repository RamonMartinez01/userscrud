import './Styles/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setIsDisable, setIsDeleted }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
        setIsDeleted({ isDeleted: false, deletedUserName: `${user.first_name} ${user.last_name}` })
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        setIsDisable(false)
    }

    return (
        <article className='card__user'>
            <h3 className='card__name'>{user.first_name} {user.last_name}</h3>
            <hr />
            <ul className='card__list'>
                <li className='card__item'>
                    <span className='card__label'>Email</span>
                    <span className='card__label-info'>{user.email}</span>
                </li>
                <hr />
                <li className='card__item'>
                    <span className='card__label'>Birthday</span>
                    <span className='card__label-info'><i className='bx bxs-gift'></i>{user.birthday}</span>

                </li>
            </ul>
            <button className='card__delete-btn' onClick={handleDelete}><i className='bx bx-trash'></i></button><button className='card__edit-btn' onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
        </article>
    )
}

export default UserCard