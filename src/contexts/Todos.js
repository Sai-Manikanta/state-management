import { createContext, useState, useEffect } from 'react'
import axiosInstance from '../utils/axios';

export const TodosContext = createContext();

function TodosProvider({ children }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axiosInstance.get('/todos')
          .then(res => setTodos(res.data.data))
          .catch(err => console.error(err.message))
    }, [])

    const addTodo = todo => {
        axiosInstance.post('/todos', {
            name: todo
        })
          .then(res => setTodos([ ...todos, res.data.data]))
          .catch(err => console.error(err.message))
    }

    const completeTodo = id => {
        axiosInstance.patch(`/todos/${id}`, {
            completed: true
        })
          .then(res => {
            const newTodos = todos.map(t => t._id === id ? { ...t, completed: true } : t);
            setTodos(newTodos);
          })
          .catch(err => console.error(err.message))
    }

    const deleteTodo = id => {
        axiosInstance.delete(`/todos/${id}`)
          .then(res => {
            const newTodos = todos.filter(t => t._id !== id);
            setTodos(newTodos);
          })
          .catch(err => console.error(err.message))
    }

    return (
        <TodosContext.Provider value={{
            todos,
            addTodo,
            completeTodo,
            deleteTodo
        }}>
            { children }
        </TodosContext.Provider>
    )
}

export default TodosProvider
