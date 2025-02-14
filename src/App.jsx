import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("savedTodoList"); // Load saved todos
    return savedTodos ? JSON.parse(savedTodos) : []; // Default to empty array
  });

  const [isLoading, setIsLoading] = useState(todoList.length === 0); // Only load if empty

  useEffect(() => {
    if (!isLoading) return; // Skip if already loaded

    const fetchData = async () => {
      const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
      const options = {
        method: "GET",
        headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}` },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Error: ${response.status}`);

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
  }, [isLoading]); // Only runs if still loading

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList)); // Save todos
    }
  }, [todoList, isLoading]); // Runs when todos update

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;