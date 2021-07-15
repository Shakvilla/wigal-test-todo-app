import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { BsArrowLeft} from 'react-icons/bs'



function App() {
  
  return (
    <>
     
  <div className='todo-app'>
    <div className="current_date">
      <div className="todo-title" >
        <BsArrowLeft  className="arrow-back" />
        <h2>  Thu. July, 2017</h2>
      </div>

        </div>

      <TodoList />
     
    </div>
    </>
  );
}

export default App;
