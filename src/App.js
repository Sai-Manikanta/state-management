import AddTodo from "./components/AddTodo";
import styled from 'styled-components';
import TodoList from './components/TodoList';

const Wrapper = styled.div`
    max-width: 400px;
    margin: 0px auto;
    padding: 20px;
`;

function App() {
    return (
        <Wrapper>
            <AddTodo />
            <TodoList />
        </Wrapper>
    )
}

export default App
