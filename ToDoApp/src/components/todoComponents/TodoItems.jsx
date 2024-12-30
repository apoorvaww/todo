import React, { useState } from "react";
import { useTodo } from "../../contexts/index";

const TodoItems = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { editToDo, deleteToDo, toggleToDo } = useTodo();

  const updateTodo = () => {
    editToDo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleToDo(todo.id);
  };

  return (
    <div className="flex items-center justify-center  ">
      <div
        className={`flex w-[300px] sm:w-[400px] md:w-[500px] items-center justify-between p-4 sm:p-5 md:p-6 rounded-md transition-transform shadow-md shadow-black ${
          todo.isCompleted ? "bg-blue-500" : "bg-gray-700"
        } `}
      >
        <div className="flex items-center gap-3 flex-grow ">
          <input
            type="checkbox"
            className="cursor-pointer mb-2 "
            checked={todo.isCompleted}
            onChange={toggleCompleted}
          />
          <input
            type="text"
            className={` text-white bg-transparent rounded-md font-custom border-2 px-3 py-2 w-full h-5 border-none outline-none ${
              isTodoEditable ? "px-5" : " border-transparent"
            } ${
              todo.isCompleted ? "line-through" : ""
            } `}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
          />
        </div>
        {/* edit,save button */}
        <div className="flex items-center justify-center gap-2">
          <button
            className="flex items-center w-8"
            onClick={() => {
              if (todo.isCompleted) return;

              if (isTodoEditable) {
                updateTodo();
              } else {
                setIsTodoEditable((prev) => !prev);
              }
            }}
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* delete button */}
          <button className="w-8" onClick={() => deleteToDo(todo.id)}>
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
