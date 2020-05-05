import React, {useState} from 'react';
import './Todolist.css';
import '../App.css';

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

export default ToDoForm;