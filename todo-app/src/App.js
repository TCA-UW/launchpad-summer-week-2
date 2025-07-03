import React from 'react';
import AddTaskForm from './AddTaskForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>My To-Do List</h1>
      </div>
      <div className="todo-container">
        <AddTaskForm />
      </div>
    </div>
  );
}

export default App;