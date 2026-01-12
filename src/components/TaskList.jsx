import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../features/tasks/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '20px' }}>
      {tasks.map((task) => (
        <div 
          key={task.id} 
          style={{ 
            backgroundColor: task.completed ? '#d4edda' : '#f8d7da', // Green / Red
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <span>{task.text}</span>
          <div>
            <button onClick={() => dispatch(toggleTask(task.id))}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;