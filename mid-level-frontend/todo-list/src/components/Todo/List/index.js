import React, { useState } from 'react';
import Form from '../Form';
import Todo from '..';

function List() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, todo]);
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, text: newValue };
      }
      return todo;
    }
    );
    setTodos(newTodos);
  }

  const removeTodo = todoId => {
    setTodos(prev => prev.filter(item => item.id !== todoId));
  }

  const clearAll = () => {
    setTodos([]);
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const getCompletedCount = () => {
    let count = 0;
    todos.forEach(todo => {
      if (todo.isComplete) {
        count++;
      }
    }
    );
    return count;
  }

  const getCompletedTodos = () => {
    const completedTodos = [];
    todos.forEach(todo => {
      if (todo.isComplete) {
        completedTodos.push(todo);
      }
    }
    );
    return completedTodos;
  }

  const getUncompletedTodos = () => {
    const uncompletedTodos = [];
    todos.forEach(todo => {
      if (!todo.isComplete) {
        uncompletedTodos.push(todo);
      }
    }
    );
    return uncompletedTodos;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Form onSubmit={addTodo}
       />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <button onClick={clearAll}>Clear All</button>
      <p>Completed: {getCompletedCount()}</p>
      <ul>
        {getCompletedTodos().map((todo, index) => (
          <li key={index}>
            {todo.text}
          </li>
        ))}
      </ul>
      <ul>
        {getUncompletedTodos().map((todo, index) => (
          <li key={index}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
