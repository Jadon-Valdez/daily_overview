import React, { useState } from 'react'
import axios from 'axios';
import '../static/Tasks.css'
import { Link, useHistory } from 'react-router-dom';

const NewTask = () => {

    const [name, setName] = useState(""); 
    const [tasks, setTasks] = useState({})
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/tasks/new', {
            name
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            history.push('/')
    } 

    return (
        <div className="taskthings">
            <form onSubmit={onSubmitHandler}>
                <p>
                    <br/>
                    <input type="text" placeholder="Create a new task!" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <button>
                    Create
                </button>
            </form>
        </div>
    )
}

export default NewTask