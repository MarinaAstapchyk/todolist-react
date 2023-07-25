import React from 'react';
import {Row} from "react-bootstrap";


const TodoList = ({todos, setTodos, setEditTodo}) => {

  const handleComplete = (todo) => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return {...item, completed: !item.completed}
        }
        return item
      })
    )
  }

  const handleEdit = ({id}) => {
    const findTodo = todos.find(todo => todo.id === id)
    setEditTodo(findTodo)
  }

  const handleDelete = ({id}) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="d-inline-block responsive d-flex justify-content-between">
    <Row>

      {todos.map(todo => (
        <li className="list-item d-inline-block responsive d-flex justify-content-between"
            key={todo.id}
        >
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={event => event.preventDefault()}
          />



          <div>
            <button
              className='button-complete task button'
              onClick={() => handleComplete(todo)}
            >
              Complete
            </button>


            <button
              className='button-edit task button'
              onClick={() => handleEdit(todo)}
            >
              Edit
            </button>


            <button
              className='button-delete task button'
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button>

          </div>

        </li>
      ))}

    </Row>
    </div>
  );
};

export default TodoList;