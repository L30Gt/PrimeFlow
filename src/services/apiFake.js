import { tasks as initialTasks, columns as initialColumns } from '../dados';

let tasks = [...initialTasks];
let columns = [...initialColumns];

export const getColumnsData = () => {
  return columns.map(col => ({
    ...col,
    tasks: col.taskIds.map(taskId => tasks.find(t => t.id === taskId)).filter(Boolean)
  }));
};

export const saveTask = (task) => {
  if (task.id) {
    // Update existing
    tasks = tasks.map(t => t.id === task.id ? task : t);
  } else {
    // Create new
    const newTask = {
      ...task,
      id: `t-${Math.floor(Math.random() * 10000)}`,
      createdAt: new Date().toISOString()
    };
    tasks.push(newTask);

    // Add to column
    const colId = task.columnId;
    const col = columns.find(c => c.id === colId);
    if (col) {
      col.taskIds.push(newTask.id);
    }
    return newTask;
  }
  return task;
};

export const deleteTask = (taskId) => {
  tasks = tasks.filter(t => t.id !== taskId);
  columns.forEach(col => {
    col.taskIds = col.taskIds.filter(id => id !== taskId);
  });
};
