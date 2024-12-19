import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { useSemiPersistentState } from './useSemiPersistentState';

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]); // Update todoList
  };

 

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
