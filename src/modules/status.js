import { updateLocalStorage, renderTasks } from '../new.js'

export const updateStatus = (task, index) => {
  task.completed = !task.completed;
  updateLocalStorage();
  renderTasks();
}