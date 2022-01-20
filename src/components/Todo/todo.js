import React from 'react';

const Todo = ({ onClick, completed, text }) => (
    <li
    onClick = {onClick}
    style = {{
        listStyle: 'none',
        textDecoration: completed ? 'line-through':'none'
    }}
    >
        {text}
    </li>
)

export default Todo;