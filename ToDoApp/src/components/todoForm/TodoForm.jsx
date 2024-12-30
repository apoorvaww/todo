import React, { useState } from "react";
import { useTodo } from "../../contexts/TodoContext";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addToDo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    if (!todo) return;

    addToDo({ todo: todo, isCompleted: false });
    setTodo("");
  };

  return (
    <div className="flex items-center justify-center mt-[40px] ">
      <form onSubmit={handleSubmit} className="flex gap-4 sm:gap-6 md:gap-8">
        <label
          htmlFor="todo"
          className="items-center justify-center flex text-white "
        >
          <input
            type="text"
            placeholder="Enter your next task"
            className=" rounded-xl w-[180px] sm:w-[300px] md:w-[340px] sm:gap-5 md:gap-6  items-center bg-[rgb(126,124,124)] text-white text-md font-custom outline-none justify-center sm:px-4 sm:py-3 px-3 py-2 placeholder-white"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>

        <button
          className="bg-blue-400 hover:bg-blue-500 px-4 sm:px-5 py-2 md:px-5 md:py-2 rounded-xl font-custom "
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
