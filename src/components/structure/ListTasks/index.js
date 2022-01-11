import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Api from '../../../api/api';

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, [])

  const getTasks = async () => {
    try {
      const response = await Api.fetchGetAll();
      if(response.status >= 400 && response.status < 600) {
        alert('Nao foi possível acessar os dados!')
      }
      
      const tasksApi = await response.json();
      console.log('RESPOSTA DA API', tasksApi);
      setTasks(tasksApi);
    }catch (err) {
      console.error('ERRO:', err);
    }
  }

  return(
    <div>
      <p className='text-center h5'>to-do list</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          tasks.map((task) => (
            <Card key={task._id} task={task}/>
          ))
        }

      </div>
    </div>
  )
}

export default ListTasks;