import React, { useState } from 'react'
import Form from '../Form'
import Todo from '..'
import 'bootstrap/dist/css/bootstrap.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Button, Container } from 'react-bootstrap'
import style from './style.css'

function List(props) {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(...todos)
  }

  const updateTodo = (todoId, newValue) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, text: newValue }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const removeTodo = (todoId) => {
    setTodos((prev) => prev.filter((item) => item.id !== todoId))
  }

  const clearAll = () => {
    setTodos([])
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const getCompletedTodos = () => {
    const completedTodos = []
    todos.forEach((todo) => {
      if (todo.isComplete) {
        completedTodos.push(todo)
      }
    })
    return completedTodos
  }

  const getUncompletedTodos = () => {
    const uncompletedTodos = []
    todos.forEach((todo) => {
      if (!todo.isComplete) {
        uncompletedTodos.push(todo)
      }
    })
    return uncompletedTodos
  }

  const getTodoCount = () => {
    if (todos.length === 0) {
      return 'No todos'
    }
    if (todos.length === 1) {
      return '1 todo'
    }
    return `${todos.length} todos`
  }

  return (
    <div>
      <Container className="container">
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Todos
        </h1>
        <div>
          <Row className="nav">
            <Col xs="6">
              <div className="todo-list-count">
                <span>{getTodoCount()}</span>
              </div>
            </Col>
            <Col xs="3">
              <div className="addTodo">
                <Form onSubmit={addTodo} />
              </div>
            </Col>
            <Col xs="3">
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  variant="danger"
                  className="clear-button"
                  onClick={clearAll}
                >
                  Clear All
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ display: 'block' }}>
          <Row>
            <Col xs="6">
              <h4>Todos</h4>
              <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            </Col>
            <Col>
              <h4>Uncompleted Todos</h4>
              <ul className="incomplete">
                {getUncompletedTodos().map((todo, index) => (
                  <li key={index}>{todo.text}</li>
                ))}
              </ul>
            </Col>
            <Col>
              <h4>Completed Todos</h4>
              <ul className="complete">
                {getCompletedTodos().map((todo, index) => (
                  <li key={index}>{todo.text}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default List
