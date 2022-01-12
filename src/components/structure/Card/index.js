import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const task = props.task;
  return (
    <Link to={`/view/${task._id}`} className="col">
      <div className="card text-white bg-dark mb-3">
        <div className="card-header">Status: {task.status}</div>
          <div className="card-body text-center">
            <h5 className="card-title">{task.titulo}</h5>
            <p className="card-text">{task.descricao}</p>
          </div>
      </div>
    </Link>
  )
}

export default Card;