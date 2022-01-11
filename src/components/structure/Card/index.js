import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
  const task = props.task;
  return (
    <Link to={`/view/${task._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Titulo: {task.titulo}</h5>
          <p className="card-text">Prioridade: {task.prioridade}</p>
          <p className="card-text">Status: {task.status}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;