import React, { useState } from 'react'
import Form from './Form'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <Container key={index}>
      <Row>
        <Col xs="6">
          <div class="checkboxes">
            <div class="checkboxes__row">
              <div class="checkboxes__item">
                <label class="checkbox style-h">
                  <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => completeTodo(todo.id)}
                  />
                  <div class="checkbox__checkmark"></div>
                  <div
                    class="checkbox__body"
                    style={{
                      textDecoration: todo.isComplete ? 'line-through' : 'none',

                      color: todo.isComplete ? '#ccc' : '#000',
                    }}
                  >
                    {todo.text}
                  </div>
                </label>
              </div>
            </div>
          </div>
        </Col>
        <Col xs="3">
          <div className={todo.isComplete ? 'complete' : ''}>
            <div>
              <button className="edit-btn btn btn-primary" onClick={() => setEdit({ id: todo.id, value: todo.text })}>
                Edit
              </button>
            </div>
          </div>
        </Col>
        <Col xs="3">
          <div className="remove">
            <button className="btn-remove btn btn-danger" onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  ))
}

export default Todo
