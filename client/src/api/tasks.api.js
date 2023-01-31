import axios from 'axios';
import { API_URL } from '../constants/env';

export const getTasksRequest = async () => {
  return await axios.get(`${API_URL}/api/tasks`);
};

export const getTaskRequest = async (id) => {
  return await axios.get(`${API_URL}/api/tasks/${id}`);
};

export const createTaskRequest = async (task) => {
  return await axios.post(`${API_URL}/api/tasks`, task);
};

export const updateTaskRequest = async (id, task) => {
  return await axios.patch(`${API_URL}/api/tasks/${id}`, task);
};

export const deleteTaskRequest = async (id) => {
  return await axios.delete(`${API_URL}/api/tasks/${id}`);
};

export const toggleTaskDoneRequest = async (id, done) => {
  return await axios.patch(`${API_URL}/api/tasks/${id}`, { done });
};
