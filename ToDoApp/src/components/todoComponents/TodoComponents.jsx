import React from "react";
import TodoItems from "./TodoItems";

const TodoComponents = ({ todos }) => {
  return (
    <div>
      <ol className="self-center w-[97%] flex flex-col items-center mt-[27px] mb-[27px] gap-[27px] ">
        {todos && todos.length > 0 ? (
          todos?.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItems todo={todo} />
            </div>
          ))
        ) : (
          <p className="items-center sm:text-lg md:text-xl font-custom">
            Seems lonely in here, what are you upto?
          </p>
        )}
      </ol>
    </div>
  );
};

export default TodoComponents;
