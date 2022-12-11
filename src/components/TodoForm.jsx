import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <div className="container bg-danger d-flex justify-content-between mt-3 p-3 w-50 rounded">
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="rounded"
            onChange={handleChange}
            ref={inputRef}
          />
          <Button type="submit" variant="light">
            Update
          </Button>
        </div>
      ) : (
        <div className="container flex-row d-flex w-50">
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="  w-75 mt-5 rounded p-2 me-3"
            onChange={handleChange}
            ref={inputRef}
          />
          <Button className="mt-5 d-flex" type="submit" variant="primary">
            Add todo
          </Button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
