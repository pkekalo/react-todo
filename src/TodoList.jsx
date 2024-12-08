import TodoListItem from './TodoListItem';

function TodoList({todos}) {
    // const todoList = [
    //     {
    //       id: 1,
    //       title: 'Breakfast'
    //     },
    //     {
    //       id: 2,
    //       title: 'Shower'
    //     },
    //     {
    //       id: 3,
    //       title: 'Drive'
    //     }
    //   ];
    
    return (
        <ul>
            {todos.map((item) => (
                <TodoListItem key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default TodoList;
