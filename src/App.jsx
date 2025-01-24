import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [todoList, setTodoList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      };
  
      try {
        const response = await fetch(url, options);
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        const data = await response.json();
        const todos = data.records.map((todo) => ({
          id: todo.id,
          title: todo.fields.title,
        }));
  
        setTodoList(todos);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
  
    fetchData();
  }, []);
  

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]); 
  };

 const removeTodo = (id) => {
  const updatedTodoList = todoList.filter((todo) => todo.id !== id);
  setTodoList(updatedTodoList);
 };

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Default route for the Todo List */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* New route for "New Todo List" */}
        <Route
          path="/new"
          element={
            <h1>New Todo List</h1>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
