import './style.css';
import { updateStatus } from './modules/status.js';

const taskList = document.getElementById('task-list');
const form = document.querySelector('#form');

let tasks = [];
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="task${index}" ${task.completed ? 'checked' : ''}>
      
      <form id = 'worr'>
        <input value="${task.description}" id='word' readonly>
      </form>
      
      <button class="delete">
        <i class="fa-solid fa-times" id='times'></i>
        <i class="fa-solid fa-pen" id='pen'></i>
      </button>
    `;
    taskList.appendChild(li);
    const checkbox = li.querySelector('#task' + index);
    checkbox.addEventListener('change', () => {
      updateStatus(task, index);
      task.completed = checkbox.checked;
      updateLocalStorage();
    });
    const pen = li.querySelector('#pen');
    const worr = li.querySelector('#worr');
    const edit = li.querySelector('#word');
    pen.addEventListener('click', () => {
      pen.parentElement.classList.add('change');
      edit.removeAttribute('readonly');
      edit.focus();
      worr.addEventListener('submit', (e) => {
        e.preventDefault();
        pen.parentElement.classList.remove('change');
        edit.setAttribute('readonly', 'readonly');
        task.description = edit.value;
        updateLocalStorage();
      });
    });
    const times = li.querySelector('#times');
    times.addEventListener('click', () => {
      taskList.removeChild(li);
      tasks = tasks.filter(t => t.index !== task.index);
      tasks.forEach((t, i) => {
        t.index = i + 1;
      });
      updateLocalStorage();
    });
  });
}

function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  if (input.value === '') { return; }
  const task = {
    description: input.value,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(task);
  renderTasks();
  input.value = '';
  updateLocalStorage();
});

window.addEventListener('load', () => {
  const reshow = JSON.parse(localStorage.getItem('tasks'));
  if (reshow!==null) renderTasks();
  
});

const clearCompletedButton = document.getElementById('clear-completed');
clearCompletedButton.addEventListener('click', clearCompleted);
function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
  updateLocalStorage();
  renderTasks();
}

export { updateLocalStorage, renderTasks }

