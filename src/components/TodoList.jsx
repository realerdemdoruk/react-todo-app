import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="row flex-column d-center">
        <div className="col mx-auto">
          <h1 className="text-center mt-5">What's the Plan for Today?</h1>
        </div>
        <div className="col flex-column d-flex mx-auto ">
          <TodoForm onSubmit={addTodo} />
          <Todo
            todos={todos}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
