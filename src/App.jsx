import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: 'Breakfast' },
    { id: 2, title: 'Shower' },
    { id: 3, title: 'Drive' },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = (title) => {
    setNewTodo(title);
    
    // setTodos(previousState => {
    //   return [...previousState, { id: previousState.length + 1, title }];
    // })
    
    setTodos([...todos, { id: todos.length + 1, title }]);
  };

  return (
    <>
      <div>
          <h1>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo} />
          <p>New Todo: {newTodo}</p>
          <TodoList todos={todos} />
      </div>
    </> 
  )
}

export default App;