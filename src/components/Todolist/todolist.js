import Todo from "../Todo/todo";

const Todolist = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo => ( 
            <Todo key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </ul>
)

export default Todolist;