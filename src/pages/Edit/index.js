import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    titulo: '',
    descricao: '',
    prioridade: '',
    status: '',
    prazo: '',
  });

  useEffect(() => {
    getTaskById();
  }, []);

  const { id } = useParams();

  const getTaskById = async () => {
    const response = await Api.fetchGetById(id);
    const task = await response.json();
    setTask(task);
  };

  const handleFieldsChange = (evento) => {
    const taskEdit = {
      ...task
    }
    taskEdit[evento.target.name] = evento.target.value;
    setTask(taskEdit);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const response = await Api.fetchPut(task, id);
    const data = await response.json();
    alert(data.message);

    navigate(`/view/${id}`);
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <h3 className="m-3">Ediçao da tarefa</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Titulo da tarefa:</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    placeholder="Digite o titulo da tarefa"
                    name="titulo"
                    value={task.titulo}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">descricao da tarefa:</label>
                  <input
                    id="descricao"
                    className="form-control"
                    type="text"
                    placeholder="Digite a descricao da tarefa"
                    name="descricao"
                    value={task.descricao}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade da tarefa:</label>
                  <input
                    id="prioridade"
                    className="form-control"
                    list="priorityOptions"
                    placeholder="Defina a prioridade da tarefa"
                    name="prioridade"
                    value={task.prioridade}
                    onChange={handleFieldsChange}
                  />
                  <datalist id="priorityOptions">
                    <option value="Alta"/>
                    <option value="Média"/>
                    <option value="Baixa"/>
                  </datalist>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="status">Status da tarefa:</label>
                  <input
                    id="status"
                    className="form-control"
                    list="statusOptions"
                    placeholder="Digite o status da tarefa"
                    name="status"
                    value={task.status}
                    onChange={handleFieldsChange}
                  />
                  <datalist id="statusOptions">
                    <option value="Fazer"/>
                    <option value="Fazendo"/>
                    <option value="Feito"/>
                  </datalist>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo da tarefa:</label>
                  <input
                    id="prazo"
                    className="form-control"
                    type="date"
                    placeholder="Defina o prazo para conclusão da tarefa"
                    name="prazo"
                    value={task.prazo}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button className="btn btn-success me-2" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-primary">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;