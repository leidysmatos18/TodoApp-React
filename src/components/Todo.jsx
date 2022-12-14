import React from "react";

const Todo = ({ todoProps, todoDelete, todoToogleCompleted }) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-center">
          {todoProps.title}
          <button
            className={`btn btn-sm  ms-2 ${
              todoProps.completed ? "btn-outline-success" : "btn-success"
            } `}
            onClick={() => todoToogleCompleted(todoProps.id)}
          >
            {todoProps.completed ? "Terminado" : "Terminar"}
          </button>
        </h3>
        <p className="card-text text-center">{todoProps.description}</p>
        <hr />
        <div className="d-flex justify-content-center">
          <button className="btn btn-sm btn-outline-primary me-2">
            Editar
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => todoDelete(todoProps.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
