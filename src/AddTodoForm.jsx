import { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value; // Retrieve input value
        setTodoTitle(newTodoTitle); // Update state
    };

    const handleAddTodo = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        const newTodo = { title: todoTitle, id: Date.now() }; // Create the new todo object
        onAddTodo(newTodo); // Pass the todoTitle state to the parent
        setTodoTitle('');
    };

    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title </label>
            <input
                type="text"
                id="todoTitle"
                name="title"
                value={todoTitle}
                required
                onChange={handleTitleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
}


export default AddTodoForm;
