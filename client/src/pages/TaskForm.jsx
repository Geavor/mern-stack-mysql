import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({ title: task.title, description: task.description });
      }
    };
    loadTask();
  }, []);

  useEffect(() => {
    setTask({ title: '', description: '' });
  }, [params.id]);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
            actions.resetForm();
          }
          navigate('/');
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? 'Edit task' : 'New Task'}
            </h1>

            <label className="block font-bold" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              className="px-2 py-1 rounded-sm w-full "
              onChange={handleChange}
              value={values.title}
            />

            <label className="block font-bold" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              className="px-2 py-1 rounded-sm w-full "
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button
              disabled={isSubmitting}
              type="submit"
              className="block bg-indigo-500 px-2 py-1 text-white rounded-md"
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
