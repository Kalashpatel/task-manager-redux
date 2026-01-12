import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;