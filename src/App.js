import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // Create a todos state handler to store all our todos as an array
  const [todos, setTodos] = useState([], () => {
    const storedToDos = localStorage.getItem('todos');
    return storedToDos ? JSON.parse(storedToDos) : [];
  });
  // Create a currenttodo state handler to store the current todo
  const [currentTodo, setToDo] = useState("");
  // Create an error state handler to help us inform the user in case there is an error

  const handleChange = (e) => {
    // We capture the value of the input and set it as current todo
    setToDo(e.target.value);
  };

  const handleSubmit = (e) => {

  };
  const handleClick = (e) => {
    todos.push(currentTodo);
    window.localStorage.setItem('todos', JSON.stringify(todos));
    setToDo("");
    e.preventDefault();
  }
  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem('todos'));
    if (storedToDos) {
      setTodos(storedToDos);
    }
  }, []);

  // useEffect(() => {
  //   console.log(todos);
  //   window.localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos])

  return (
    <>
      <div class="header">Dragos's Tasks</div>
      <div className="root">
        <div className="dashboard">
          <p className="in-progress">{todos.length}</p>
          <p>in progress</p>
        </div>
        <form onSubmit={handleSubmit} className="add-todo-form">
          <div className="input-row">
            <input
              placeholder="Add a todo here..."
              className="input"
              value={currentTodo}
              onChange={handleChange}
              type="text"
            ></input>
            <button className="submit-button" type="submit" onClick={handleClick}>
              Add todo
            </button>
          </div>
        </form>
        <p className="todos-title">Todos:</p>
        <>
          <ol>
            {todos.length > 0 && todos.map((result, i) => (
              <li className="todo" key={i}>{result}</li>
            ))}
          </ol>
        </>
      </div>
    </>
  );
}

export default App;
