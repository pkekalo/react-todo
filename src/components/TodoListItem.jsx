import React from 'react';
import style from "./TodoListItem.module.css";

function TodoListItem({ todo, onRemoveTodo }) {
    return (
        <li className={style.ListItem}>
            {todo.title}
            <button
                type="button"
                onClick={() => onRemoveTodo(todo.id)}
            >
                Remove
            </button>
        </li>
    );
}

export default TodoListItem;

import PropTypes from 'prop-types';

TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired
};