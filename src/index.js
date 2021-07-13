import ReactDOM from 'react-dom'
import App from './App'
import TodosProvider from './contexts/Todos'
import GlobalStyles from './GlobalStyles'

ReactDOM.render(
    <>
     <GlobalStyles />
     <TodosProvider>
        <App />
     </TodosProvider>
    </>,
    document.getElementById('root')
)