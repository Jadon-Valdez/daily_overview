import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import '../static/Tasks.css'

const AllTasks = (props) => {
    const { removeFromDom } = props;
    const [tasks, setTasks] = useState({})


        const deleteTask = (taskId) => {
            axios.delete('http://localhost:8000/api/task/' + taskId)
                .then(res => {
                    removeFromDom(taskId)
                })
                .catch(err => console.error(err));
        }


    return (
        <div className="taskthings">
            <h1>Daily Tasks</h1>
            {
                props.tasks.map((task, index) => {
                    return <p key={index}>
                        <div className="task" key={task._id}>{task.name}</div>
                        <button onClick={(e)=>{deleteTask(task._id)}}>
                            Complete!
                        </button>
                    </p>
                })
            }
        </div>
    )
}

export default AllTasks
