import React from "react";

const TodoHero = ({ todoCompleted, todoTotal }) => {
  return (
    <div className="flex items-center justify-center mt-20 sm:mt-16 md:mt-8 ">
      <section className="border-white rounded-[45px] w-[300px] sm:w-[450px] md:w-[500px] flex sm:gap-8 md:gap-10 border-[1.5px] justify-center h-[150px] sm:h-[200px] items-center sm:p-10 md:p-10 shadow-md shadow-white ">
        <div className="flex-col items-center justify-center w-2/3  ">
          <p className="font-custom md:text-3xl sm:text-2xl text-xl ">Tasks Done</p>
          <p className="font-custom md:text-xl sm:text-lg text-sm ">Keep going!</p>
        </div>

        <div className="flex  items-center relative justify-center ">
          <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-blue-300 rounded-full "></div>
          {/* {todoCompleted} / {todoTotal} */}
          <p className="text-black z-10 font-semibold font-custom text-[20px] "> 1 / 3 </p>
        </div>
      </section>
    </div>
  );
};

export default TodoHero;
