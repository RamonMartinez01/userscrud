import './Styles/UserDeleted.css'

const UserDeleted = ({ isDeleted, setIsDeleted }) => {

    const handleExit = () => {
        setIsDeleted({ isDeleted: true, deletedUserName: '' })

    }

  return (
    <div className={`deleted__modal ${isDeleted.isDeleted && "deleted__modal-screen"}`}>
        <article className='deleted__screen'>
            <div onClick={handleExit} className="deleted__x"><i className='bx bx-x-circle'></i></div>
            <div className='deleted__title'>
                <p>The User</p>
                {isDeleted.deletedUserName && (
                <p><strong>{isDeleted.deletedUserName}</strong></p>)}
                <p>has been deleted</p>
            </div>
            <button onClick={handleExit} className="deleted__ok">Ok</button>
        </article>
    </div>

  )
}

export default UserDeleted