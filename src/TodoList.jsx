import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
    return (
        <>
            <ul>
                {todoList.map((item) => (
                    <TodoListItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
}

export default TodoList;
