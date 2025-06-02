import { tasks } from "./database";

const getTasksDescriptions = (tasksList) =>
  tasksList.map((task) => task.description);

const filterTasksByPriority = (tasksList, priority) =>
  tasksList.filter((task) => task.priority === priority);

const findTaskById = (tasksList, id) =>
  tasksList.find((task) => task.id === id);

const removeTask = (tasksList, id) => {
  const index = tasksList.findIndex((task) => task.id === id);

  if (index !== -1) {
    const removed = tasksList.splice(index, 1);
    return removed;
    return "Tarefa não encontrada.";
  }
};
