import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState('');

  const writeTodo = (e) => {
    setInputVal(e.target.value);
  }

  const addTodo = () => {
    if (inputVal !== '') {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal('');
    }
  }

  const delTodo = (todoIndex) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodoIndex) => {
        return prevTodoIndex !== todoIndex;
      })
    );
  }
  return (
    <main>
      <h1>To-Do List</h1>
      <div className='input-container'>
        <input id='input-todo'
          type='text'
          placeholder='Whats on the agenda today?'
          onChange={writeTodo}
          value={inputVal}
        />
        <button
          onClick={addTodo}
        >+</button>
      </div>
      <div className='container'>
        {todos.map((todos, index) => {
          return (
            <div className='todo' key={index}>
              <p>{todos}</p>
              <div className='actions'>
                <input type='checkbox' />
                <button onClick={() => delTodo(index)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default App
