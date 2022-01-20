import './App.css';
import Footer from './components/Footer/footer'
import AddTodo from './containers/AddTodo/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList/VisibleTodoList'

export default function App() {
    return (
        <div className="app">
            <h1>Todo App</h1>
            <div id="divBlock">
            <AddTodo />
            <VisibleTodoList />
            <Footer />
            </div>
        </div>
    )

}