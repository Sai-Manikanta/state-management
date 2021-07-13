import { useRef, useContext } from 'react'
import styled from 'styled-components'
import { TodosContext } from '../contexts/Todos'

const Title = styled.h1`
    color: #87af38;
    margin-bottom: 10px;
`;

const Form = styled.form`
    display: flex;
    margin-bottom: 10px;
`;

const Input = styled.input`
    flex: 1 1 0;
    padding: 8px;
    border: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    padding: 0px 10px;
    border: none;
    background-color: #87af38;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
`;

function AddTodo() {
    const { addTodo } = useContext(TodosContext);
    const todoInputRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const todo = todoInputRef.current.value;
        addTodo(todo)
        todoInputRef.current.value = "";
    }

    return (
        <>
            <Title>Add Todo</Title>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    placeholder="Enter todo" 
                    ref={todoInputRef}
                />
                <Button type="submit">Add</Button>
            </Form>
        </>
    )
}

export default AddTodo
