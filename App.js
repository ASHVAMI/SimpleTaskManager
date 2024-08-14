import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskList from './components/TaskList';
import { addTask } from './features/tasks/taskSlice';

function App() {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask(taskName.trim()));
      setTaskName('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Simple Task Manager</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter a new task"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg ml-2 px-4 py-2"
          >
            Add Task
          </button>
        </div>
      </form>
      <TaskList />
    </div>
  );
}

export default App;
