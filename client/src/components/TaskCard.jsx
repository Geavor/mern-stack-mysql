import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  useEffect(() => {
    formatDate();
  }, []);

  const handleDone = async ({ id, done }) => {
    await toggleTaskDone(id, done);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done === 1 ? '✔' : '❌'}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span className='block my-1'>{formatDate(task.createdAt)}</span>
      <div className="flex gap-x-1">
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => handleDone(task)}
        >
          Toggle task
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
