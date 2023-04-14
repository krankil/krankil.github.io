import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
//import './App.css';
import {useState} from "react";
import React from 'react';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if(todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <ToDoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <ToDoList list={todos} remove={deleteTodo} />
    </div>
  );
};

export default App;

