import { createContext, useState } from "react";

type TodoContextProps = {
    children: React.ReactNode
}

type Todo = {
    name: string
    priority: string
    status?: boolean
}[];

type TodoContextType = {
    todoList: Todo | null
    setTodoList: React.Dispatch<React.SetStateAction<Todo>>
    searchText: string
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export const TodoContext = createContext<TodoContextType|null>(null);

const initState = [
    {name: 'Learn React', priority: 'High', status: true},
    {name: 'Learn typescript', priority: 'Medium', status: false},
    {name: 'Learn redux', priority: 'Low', status: false}
];

export const TodoContextProvider = ({children}:TodoContextProps) => {
    const [todoList, setTodoList] = useState<Todo>(initState); 
    const [searchText, setSearchText] = useState('');
    const values = {
        todoList, 
        setTodoList,
        searchText,
        setSearchText
    }
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}