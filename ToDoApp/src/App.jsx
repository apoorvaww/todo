"use client";
import React, { useEffect, useState } from "react";
import { TodoForm, TodoHeader, TodoHero, TodoComponents, Footer } from "./components";
import "./index.css";
import { TodoProvider } from "./contexts/index";
import TodoItems from "./components/todoComponents/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo}, ...prev]);
  };

  const editToDo = (todo, id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleToDo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    //this method will get the todos already stored in the local storage
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addToDo, editToDo, deleteToDo, toggleToDo }}>
      <TodoHeader />
      <TodoHero todoCompleted={0} todoTotal={0} />
      <TodoForm />
      <div className="flex flex-wrap gap-y-3 mt-10 ">
        {/* <TodoComponents todos={todos} /> */}
        {todos.map((todo) => (
          <div key={todo.id} className="w-full">
            <TodoItems todo={todo} />
          </div>
        ))}
      </div>
      <Footer/>
    </TodoProvider>
    
  );
}

export default App;
