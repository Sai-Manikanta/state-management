import { v4 as uuidv4 } from 'uuid'

/// action types
const LOAD_TODOS = 'todosLoaded';
const TODO_ADDED = 'todoAdded';
const DELETE_TODO = 'todoDeleted';
const COMPLETE_TODO = 'todoCompleted';

/// reducer
function todosReducer(todos, action){
    switch(action.type){
        case LOAD_TODOS: 
                return action.payload
            break;
        case TODO_ADDED:
                return [...todos, action.payload]
            break;
        case DELETE_TODO:
                return todos.filter(todo => todo._id !== action.payload)
            break;
        case COMPLETE_TODO:
                return todos.map(todo => todo._id === action.payload ? { ...todo, completed: true } : todo)
            break;
        default:
            return todos
    }
}

export default todosReducer

export const loadTodos = todos => ({
    type: LOAD_TODOS,
    payload: todos
})

export const addTodo = todo => ({
    type: TODO_ADDED,
    payload: todo
});

export const deleteTodo = _id => ({
    type: DELETE_TODO,
    payload: _id
});

export const completeTodo = _id => ({
    type: COMPLETE_TODO,
    payload: _id
})