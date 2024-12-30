import {useContext, createContext } from 'react'

//create context lets you create a context that components can use and read.
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Task 1',
            isCompleted: false
        }
    ],
    
    addToDo: (todo) => {},
    editToDo: (todo, id) => {},
    deleteToDo: (id) => {},
    toggleToDo: (id) => {}

})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
