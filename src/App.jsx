import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from "./App.module.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // feteched data from Airtable
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;
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
  }, []); 

  // adding toDo in Airtable
  const addTodo = async (newTodo) => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: { title: newTodo.title },
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      const addedTodo = {
        id: data.id,
        title: data.fields.title,
      };

      setTodoList((prevList) => [...prevList, addedTodo]);
    } catch (error) {
      console.error("Error adding todo:", error.message);
    }
  };

  // Deleting toDo from Airtable
  const removeTodo = async (id) => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`;
    const options = {
      method: "DELETE",
      headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}` },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error.message);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className={style.heading}>Todo List</h1>
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