import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import React, { useState, useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: { todoList: [{ id: 1, text: 'Example Todo' }] } });
        }, 2000); // 2 seconds wait
      });
    };

    fetchData().then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false); 
    });
  }, []);

  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList)); 
    }
    
  }, [todoList, isLoading]);

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
      {isLoading ? (
        <p>Loading...</p> 
      ) : (
      <>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      </>
      )}
    </>
  );
}

export default App;
