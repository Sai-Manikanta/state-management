import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { TodosContext } from '../contexts/Todos'
import { loadTodos, deleteTodo, completeTodo } from '../contexts/reducers/todos'
import axiosInstance from '../utils/axios';

const Todo = styled.div`
    padding: 8px;
    background-color: #fff;
    margin-bottom: 6px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TodoText = styled.p`
    text-decoration: ${props => props.completed ? 'line-through' : 'normal'};
`;

const DeleteBtn = styled.button`
    padding: 6px;
    border: none;
`;

function TodoList() {
    const { todos, dispatch } = useContext(TodosContext);

    useEffect(() => {
        axiosInstance.get('/todos')
          .then(res => dispatch(loadTodos(res.data.data)))
          .catch(err => console.error(err.message))
    }, [dispatch])

    const handleCompleteTodo = _id => {
        axiosInstance.patch(`/todos/${_id}`, {
            completed: true
        })
          .then(res => dispatch(completeTodo(_id)))
          .catch(err => console.error(err.message))
    }

    const handleDeleteTodo = _id => {
        axiosInstance.delete(`/todos/${_id}`, {
            completed: true
        })
          .then(res => dispatch(deleteTodo(_id)))
          .catch(err => console.error(err.message))
    }

    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo._id}>
                    <TodoText 
                        onClick={() => handleCompleteTodo(todo._id)}
                        completed={todo.completed}
                    >
                        {todo.name}
                    </TodoText>
                    <DeleteBtn onClick={() => handleDeleteTodo(todo._id)}>
                        Delete
                    </DeleteBtn>
                </Todo>
            ))}
        </div>
    )
}

export default TodoList

