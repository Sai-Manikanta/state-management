import { createContext, useReducer } from 'react'
import todosReducer from './reducers/todos';

export const TodosContext = createContext();

function TodosProvider({ children }) {
    const [todos, dispatch] = useReducer(todosReducer, []);

    return (
        <TodosContext.Provider value={{
            todos,
            dispatch
        }}>
            { children }
        </TodosContext.Provider>
    )
}

export default TodosProvider
