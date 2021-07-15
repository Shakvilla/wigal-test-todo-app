import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { BsCheckCircle, BsCircle, BsPen } from "react-icons/bs";


const TODO_COMPLETED = {

  color: 'green',
  fontWeight: '700'
}
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
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? ` todo-row complete` : `todo-row `}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      
      <div className='icons'>
        {/* <input type="radio" className="comple-todo" /> */}
        
        {todo.isComplete ? <BsCheckCircle onClick={() => completeTodo(todo.id)} style={TODO_COMPLETED}/> : <BsCircle
        
          onClick={() => completeTodo(todo.id)}
        /> }


        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <BsPen
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    

    </div>
  ));
};

export default Todo;

