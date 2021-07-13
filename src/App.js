import { useState, useEffect } from 'react'
import AddTodo from "./components/AddTodo";
import styled from 'styled-components';
import TodoList from './components/TodoList';
import axiosInstance from './utils/axios';

const Wrapper = styled.div`
    max-width: 400px;
    margin: 0px auto;
    padding: 20px;
`;

function App() {
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
        <Wrapper>
            <AddTodo 
                todos={todos} 
                addTodo={addTodo} 
            />
            <TodoList 
                todos={todos} 
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
            />
        </Wrapper>
    )
}

export default App
