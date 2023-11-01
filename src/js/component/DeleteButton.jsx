import React from 'react'

const DeleteButton = ({ deleteTask, setTodos, setShowCardTasks, setUserName, setItemBoolean, settodoInput, setDeleting }) => {
    const handleDeleteButton = () => {
        setDeleting(true)
        setTimeout(() => {
            deleteTask() //correcto
            setDeleting(false) //correcto
            setItemBoolean(false) //correcto
            setTodos([]) //correcto
            setShowCardTasks(false) //correcto
            settodoInput('') //correcto
            setUserName('') //correcto
        }, 1500)


    }
    return (
        <div>

            <button type="button" className="btn btn-success" onClick={handleDeleteButton} style={{
                display: 'block', marginLeft: 'auto', marginRight: 'auto',
                marginTop: '20px'

            }}>Delete all tasks and username</button>



        </div>
    )
}

export default DeleteButton