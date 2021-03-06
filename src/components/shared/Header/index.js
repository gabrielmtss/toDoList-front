import React from 'react';
import { Link } from 'react-router-dom';
import Cadastro from './../../../pages/Cadastro/index';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container">
        <a className="navbar-brand" href="/">TO-DO LIST</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/cadastro">
                Nova tarefa
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header;