import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleteTask } from '../features/tasks/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleCompleteTask(task._id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
      </div>
      <button onClick={handleDelete} className="text-red-500">Delete</button>
    </div>
  );
};

export default TaskItem;
