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
        const newTodo = { title: todoTitle, id: String(Date.now()) }; // Create the new todo object
        onAddTodo(newTodo); // Pass the todoTitle state to the parent
        setTodoTitle('');
    };

    
    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel 
                id="todoTitle"
                value={todoTitle}
                onChange={handleTitleChange}
            >
            Title
            </InputWithLabel>
            <button type="submit">Add</button>
        </form>
    );
}


export default AddTodoForm;

import PropTypes from 'prop-types';

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired
};