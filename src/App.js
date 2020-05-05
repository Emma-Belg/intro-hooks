import React, {useState} from 'react';
import Todo from "./components/TodoList";
import ToDoForm from "./components/TodoForm";
import "./App.css";

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