import { useState, useEffect } from 'react';

function useSemiPersistentState() {
    const [todoList, setTodoList] = useState(() => {
        const saved = localStorage.getItem("savedTodoList");
        return saved ? JSON.parse(saved) : [];
    });

    // useEffect to save todoList to localStorage
    useEffect(() => {
        localStorage.setItem("savedTodoList", JSON.stringify(todoList)); // Save as JSON string
    }, [todoList]); // Dependency array ensures this runs when todoList changes

    return [todoList, setTodoList];
}

export { useSemiPersistentState };