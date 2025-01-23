import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { useSemiPersistentState } from './useSemiPersistentState';

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]); 
  };

 const removeTodo = (id) => {
  const updatedTodoList = todoList.filter((todo) => todo.id !== id);
  setTodoList(updatedTodoList);
 };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
}

export default App;
