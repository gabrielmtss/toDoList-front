import React from 'react';
import Api from '../../api/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value; 
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    const task = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo,
    }

    const response = await Api.fetchPost(task);
    const result = await response.json();

    alert(result.message);
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='card text-white bg-dark mt-4'>
        <div className='card-title'>
          <h3 className='m-3'>Cadastrar nova tarefa</h3>
        </div>
        <div className='card-body'>
          <form method='POST' onSubmit={handleSubmit}>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='titulo'>Titulo da tarefa:</label>
                  <input id='titulo' className='form-control' type='text' placeholder='Digite o titulo da tarefa' name='titulo'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='descricao'>Descrição da tarefa:</label>
                  <input id='descricao' className='form-control' type='text' placeholder='Digite a descrição da tarefa' name='descricao'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='prioridade'>Prioridade da tarefa:</label>
                  <input id='prioridade' className='form-control' list="priorityOptions" placeholder='Defina a prioridade da tarefa' name='prioridade'/>
                  <datalist id="priorityOptions">
                    <option value="Alta"/>
                    <option value="Média"/>
                    <option value="Baixa"/>
                  </datalist>
                </div>
              </div>
            </div>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='status'>Status da tarefa:</label>
                  <input id='status' className='form-control' list="statusOptions" placeholder='Digite o status da tarefa' name='status'/>
                  <datalist id="statusOptions">
                    <option value="Fazer"/>
                    <option value="Fazendo"/>
                    <option value="Feito"/>
                  </datalist>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='prazo'>Prazo da tarefa:</label>
                  <input id='prazo' className='form-control' type='date' placeholder='Defina o prazo para conclusão da tarefa' name='prazo'/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <button className='btn btn-success me-2' type='submit'>Enviar</button>
                <Link to="/">
                  <button className="btn btn-outline-primary">Voltar</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;