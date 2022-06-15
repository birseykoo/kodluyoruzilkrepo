import React, { useState } from 'react';
import Form from './Form';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }


  return todos.map((todo, index) => (
    <div
      key={index}
      className={`todo ${todo.completed ? 'completed' : ''}`}
    >
  <div>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
      /></div>
      <div>
      <p>{todo.text}</p>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
      <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>Edit</button>

    </div>
     
    </div>
  ));
};

export default Todo;