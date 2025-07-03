import React from 'react';

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet. Add one above!</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {/* Will handle this later */}}
              className="task-checkbox"
            />
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
              {task.text}
            </span>
            <button 
              onClick={() => {/* Will handle this later */}}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;