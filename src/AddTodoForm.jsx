import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

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
            <InputWithLabel 
                value={todoTitle}
                onChange={handleTitleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
}


export default AddTodoForm;
