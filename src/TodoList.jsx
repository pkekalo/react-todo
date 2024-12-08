function TodoList() {
    const todoList = [
        {
          id: 1,
          title: 'Breakfast'
        },
        {
          id: 2,
          title: 'Shower'
        },
        {
          id: 3,
          title: 'Drive'
        }
      ];
    
    return (
        <ul>
            {todoList.map((item) => (
            <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;