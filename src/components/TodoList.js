import React from 'react';
import './Todolist.css';
import '../App.css';

//inside the function brackets is where you could use props or you could use a destructuring declaration
//Here it is with props (i think)
/*function Todo(props) {
    return (
        <div className="todo">
            props.index;
            props.todo
        </div>
    )
}*/

//here it is with destructuring
function Todo({index, todo, completeTodo, deleteTodo}) {
    return (
        <div className="todo"
             style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
        >
            {todo.text}
            <div>
                <button className="complete" onClick={() => completeTodo(index)}>✓</button>
                <button className="delete" onClick={() => deleteTodo(index)}>✘</button>
            </div>
        </div>
    );
}

export default Todo;