import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? 'complete bg-danger container d-flex justify-content-between mt-3 p-3 w-50 rounded '
          : 'bg-danger container d-flex justify-content-between mt-3 p-3 w-50 rounded '
      }
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <RiCloseCircleLine
          size="20px"
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          size="20px"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon mx-3"
        />
      </div>
    </div>
  ));
}

export default Todo;
