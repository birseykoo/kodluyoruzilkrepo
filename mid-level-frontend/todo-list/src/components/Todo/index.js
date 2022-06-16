import React, { useState } from 'react'
import Form from './Form'
import { Container, Row, Col } from 'react-bootstrap'

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
				<Col>
					<div>
						<input
							type="checkbox"
							checked={todo.isComplete}
							onChange={() => completeTodo(todo.id)}
						/>
						<span>{todo.text}</span>
					</div>
				</Col>
				<Col>
					<div className={todo.isComplete ? 'complete' : ''}>
						<div>
							<button
								onClick={() => setEdit({ id: todo.id, value: todo.text })}
							>
								Edit
							</button>
							<button onClick={() => removeTodo(todo.id)}>Remove</button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	))
}

//		 <div
//			 key={index}
//			 className={`todo ${todo.completed ? 'completed' : ''}`}
//		 >
//		 <div>
//			 <input
//				 type="checkbox"
//				 checked={todo.completed}
//				 onChange={() => completeTodo(todo.id)}
//			 />
//			 <p>{todo.text}</p>
//			 </div>

//		 <div>
//			 <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>
//				 Edit
//			 </button>
//			 <button onClick={() => removeTodo(todo.id)}>Remove</button>
//		 </div>
//		 </div>
//	 ));
// };

export default Todo
