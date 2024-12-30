import React from "react";

const TodoHeader = () => {
    return(
        <>
        <div className=" w-full flex md:h-[80px] h-[60px] items-center justify-between ">
            <div className=" justify-between flex m-4 p-4 space-x-4 items-center ">
                <img src="https://w7.pngwing.com/pngs/670/265/png-transparent-checkmark-done-exam-list-pencil-todo-xomo-basics-icon-thumbnail.png" alt="" className="w-10 cursor-pointer " />
                <h2 className="font-lexend font-semibold items-center sm:text-[30px] text-[26px] cursor-pointer " >ToDo App</h2>
            </div>
        </div>
        <div className="h-10 text-white w-full shadow-sm flex "></div>
        </>
    )
}

export default TodoHeader;