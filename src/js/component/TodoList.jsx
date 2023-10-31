import React, { useEffect, useState } from 'react';
import InputName from "./InputName";

const TodoList = () => {

    const [todoInput, settodoInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [userNameRender, setUserName] = useState('');
    const [showCardTasks, setShowCardTasks] = useState(false);
    const [itemBoolean, setItemBoolean] = useState(false);



    let url = 'https://playground.4geeks.com/apis/fake/todos/user/';




    const handleInputChange = (e) => {
        settodoInput(e.target.value);
    };

    const handleInputKeyPress = async (e) => {
        try {
            if (e.key === 'Enter' && todoInput.trim() !== '') {
                let obj = {
                    label: todoInput,
                    done: false
                }
                setTodos([...todos, obj]);
                setItemBoolean(true);
                settodoInput('');

                //const setPutData = await putData();
                //console.log('Sending Data...', setPutData);
            }
        }

        catch (error) {
            console.log('Request failed', error);
        }
    };



    useEffect(() => {
        if (userNameRender !== '') {
            postData();
        }
    }, [userNameRender])




    const postData = async () => {
        try {
            let userNameAPI = userNameRender;
            let urlAPI = url + userNameAPI;

            const response = await fetch(urlAPI, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify([])
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                console.log('You created a new user');
            }

            else if (userNameRender == userNameRender) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                console.log('this user already exists');
                console.log('You will enter the usernames info if they already have a todo list');
                //getData();
            }

            else {
                throw new Error('Request failed');
            }
        }

        catch (error) {
            console.log('Error getting API', error)
        }
    }






    const handleDeleteTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos.splice(index, 1);
        setTodos(updateTodos);
    }

    return (

        !showCardTasks ? (<InputName setShowCardTasks={setShowCardTasks} setUserName={setUserName} postData={postData} />) :
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