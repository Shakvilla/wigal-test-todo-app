import React, {useState} from 'react';
import Todo from './Todo';
import { FaPlus } from 'react-icons/fa'
import TodoForm from './TodoForm';
import Modal from './Modal'

// import { FaPlus } from 'react-icons/fa'




function TodoList({onClose}) {

  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  


  function closeModal() {
    setIsOpen(false);
  }
 
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  }
  

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Modal 
      open={isOpen} 
      onClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      >
        <TodoForm onSubmit={addTodo} onClick={onClose} closeModal={closeModal}/>
      </Modal>

      <button className="menuOpenButton" onClick={() => setIsOpen(true)}>
        <FaPlus />
      </button>

    <Todo 
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    
    />

    
    
      
    </>
  )
}

export default TodoList
