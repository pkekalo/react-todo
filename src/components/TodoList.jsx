import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo  }) {
    return (
        <>
            <ul>
                {todoList.map((todo) => (
                    <TodoListItem 
                        key={todo.id} 
                        todo={todo} 
                        onRemoveTodo={onRemoveTodo}
                    />
                ))}
            </ul>
        </>
    );
}

export default TodoList;

import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired,
    onRemoveTodo: PropTypes.func.isRequired
};