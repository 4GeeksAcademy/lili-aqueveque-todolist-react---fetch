import React, { useState } from 'react';

const TodoList = () => {

    const [todoInput, settodoInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [userNameRender, setUserName] = useState('');

    const handleInputChange = (e) => {
        settodoInput(e.target.value);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter" && todoInput.trim() !== '') {
            setTodos([...todos, todoInput]);
            settodoInput('');
        }
    };

    const handleDeleteTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos.splice(index, 1);
        setTodos(updateTodos);
    }

    return (
        <>
            <h1 className='text-center'>todos by {userNameRender}</h1>
            <div className="note">
                <ul>
                    <li><input className="inputy" type="text" onChange={handleInputChange} onKeyUp={handleInputKeyPress} value={todoInput} placeholder="What needs to be done?"></input></li>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}
                            <button className="trash" onClick={() => handleDeleteTodo(index)}><i class="fa-solid fa-trash-can"></i></button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoList;