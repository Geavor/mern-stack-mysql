import { useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { useTasks } from '../context/TaskContext';

const TasksPage = () => {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return <h1 className="text-white text-center text-xl">No Tasks yet</h1>;
    }
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center my-5">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
};

export default TasksPage;
