import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (!todoTitle.trim()) return; // Checking, so we don't add nothing empty 
        onAddTodo({ title: todoTitle }); // Passing only title, Airtable creates ID
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