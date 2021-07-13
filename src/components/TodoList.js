import { useContext } from 'react'
import styled from 'styled-components'
import { TodosContext } from '../contexts/Todos'

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
    const { todos, completeTodo, deleteTodo } = useContext(TodosContext);

    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo._id}>
                    <TodoText 
                        onClick={() => completeTodo(todo._id)}
                        completed={todo.completed}
                    >
                        {todo.name}
                    </TodoText>
                    <DeleteBtn onClick={() => deleteTodo(todo._id)}>
                        Delete
                    </DeleteBtn>
                </Todo>
            ))}
        </div>
    )
}

export default TodoList
