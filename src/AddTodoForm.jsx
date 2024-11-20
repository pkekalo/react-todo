import { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
    const [title, setTitle] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        const todoTitle = title; // Get the value of the input field
        console.log(todoTitle); // Log the value to the console
        onAddTodo(todoTitle); // Call the parent function to handle the new todo
        setTitle(''); // Clear the input field
    };

    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title {title}</label>
            <input
                type="text"
                id="todoTitle"
                name="title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)} 
                }
            />
            <button type="submit">Add</button>
        </form>
    );
}


export default AddTodoForm;