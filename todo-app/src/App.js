import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a todo app", completed: true },
    { id: 3, text: "Practice JavaScript", completed: false }
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>My To-Do List</h1>
      </div>
      <div className="todo-container">
        <AddTaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;