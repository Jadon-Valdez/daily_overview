import React, { useEffect, useState } from 'react';
import AllTasks from '../components/AllTasks';
import axios from 'axios';

const Main = () => {

    const [tasks, setTasks] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/tasks')
            .then(res=>{
                setTasks(res.data.tasks);
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    }, [tasks]);


    return (
        <div>
            <>
                {loaded && <AllTasks tasks={tasks} setTasks={setTasks}/>}
            </>
        </div>
    );
}

export default Main
