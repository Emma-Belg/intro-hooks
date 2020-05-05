import React, {useState} from 'react';
import "./App.css";

//inside the function brackets is where you could use props or you could use a destructuring declaration
//Here it is with props (ithink)
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
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
        </div>
    );
}

function ToDoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = eventPeram => {
        eventPeram.preventDefault();
        //this line means you can't submit an empty value
        if (!value) return;
        //this will be passed in as a prop
        addTodo(value);
        //then to clear the form after use
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   className="input"
                   placeholder="Add your to do task"
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
        </form>
    )
}

function App() {
    //creating state - this has two components/variables
    //the 1st is the value of the state. and can be thought of as "this.state" from the older Class component system
    //the 2nd: a function to update the state. This can be thought of as "this.setState from the old class component way
    const [todos, setTodos] = useState([
        {
            text: 'Learn about hooks',
            isCompleted: false,
        },
        {
            text: 'Meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'Build cool app',
            isCompleted: false,
        }
    ]);

    const addTodo = text => {
        //using a spread operator (with the dots) to copy everything that is already there and then adding the input text
        const newTodos = [...todos, {text}];
        //set Todos is used to update the state
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
                <ToDoForm addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default App;