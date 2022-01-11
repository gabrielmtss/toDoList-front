import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const View = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({});
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    getTaskById();
  }, [])

  const { id } = useParams();

  const abreModal = () => setOpen(true);
  const fechaModal = () => setOpen(false);
  
  const getTaskById = async () => {

    try {
      const request = await Api.fetchGetById('1684168743187');
      if(request.status === 400) {
        alert('Erro na api, id da tarefa invalido')
      }
      if(request.status === 500) {
        console.error('Erro no servidor')
      }

      const task = await request.json().catch(err => console.log('ERRO', err));
    } catch(err) {
      console.log('erro', err);
    }

    setTask(task);
  }

  const handleDelete = async () => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    alert(data.message)
    navigate('/');
  }


  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-12'>
          <div className='card p-3'>
            <h4>Titulo: {task.titulo} </h4>
            <p>Descrição: {task.descricao}</p>
            <p>Prioridade: {task.prioridade}</p>
            <p>Status: {task.status}</p>
            <p>Prazo: {task.prazo}</p>
            <p>Data de criação: {task.dataCriacao}</p>
            <div className='btn-group my-3 w-100'>
              <Link to={`/edit/${task._id}`} className='btn btn-info text-white'>Editar</Link>
              <button className='btn btn-danger' onClick={abreModal}>Excluir</button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={fechaModal} center>
        <h2 className='my-4'>Deseja realmente excluir a tarefa?</h2>
        <div className='d-flex w-50 mx-auto justify-content-around'>
          <button className='btn btn-danger me-2' onClick={fechaModal}>Não</button>
          <button className='btn btn-success' onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
  )
}

export default View