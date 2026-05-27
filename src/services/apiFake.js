import { tasks as initialTasks, columns as initialColumns, projects as initialProjects } from '../dados';

const loadFromStorage = (key, defaultData) => {
  const stored = localStorage.getItem(key);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Error parsing localStorage for', key, e);
    }
  }
  localStorage.setItem(key, JSON.stringify(defaultData));
  return [...defaultData];
};

let tasks = loadFromStorage('primeflow_tasks', initialTasks);
let columns = loadFromStorage('primeflow_columns', initialColumns);
let projects = loadFromStorage('primeflow_projects', initialProjects);

const saveToStorage = () => {
  localStorage.setItem('primeflow_tasks', JSON.stringify(tasks));
  localStorage.setItem('primeflow_columns', JSON.stringify(columns));
  localStorage.setItem('primeflow_projects', JSON.stringify(projects));
};

export const getProjects = () => {
  return projects;
};

export const getProjectById = (projectId) => {
  return projects.find(p => p.id === projectId);
};

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
    saveToStorage();
    return newTask;
  }
  saveToStorage();
  return task;
};

export const deleteTask = (taskId) => {
  tasks = tasks.filter(t => t.id !== taskId);
  columns.forEach(col => {
    col.taskIds = col.taskIds.filter(id => id !== taskId);
  });
  saveToStorage();
};

export const createColumn = (title, projectId) => {
  const newCol = {
    id: `col-${Math.floor(Math.random() * 10000)}`,
    projectId,
    title,
    taskIds: [],
    createdAt: new Date().toISOString()
  };
  columns.push(newCol);
  saveToStorage();
  return newCol;
};

