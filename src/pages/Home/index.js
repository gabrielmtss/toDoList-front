import React from 'react';
import ListTasks from '../../components/structure/ListTasks';

const Home = () => {
  return(
    <div className="container">
      <h1 className="text-center h1 mt-3">to-do list</h1>
      <ListTasks/>
    </div>
  )
}

export default Home;