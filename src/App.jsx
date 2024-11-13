import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function App() {

  return (
    <>
        <h1>Todo List</h1>
        <ul>
          {todoList.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
    </> 
  )
}

export default App
