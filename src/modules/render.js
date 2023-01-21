/*const taskList = document.getElementById('task-list');
const form = document.querySelector('#form');

let tasks = [];
// Function to render the task list to the DOM
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
    // Add event listener to change task status when checkbox is clicked
    const checkbox = li.querySelector('#task' + index);
    checkbox.addEventListener('change', () => {
      updateStatus(task, index);
      task.completed = checkbox.checked;
      updateLocalStorage();
    });
    
    // Add event listener to make task editable when pen icon is clicked
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
    // Add event listener to delete task when times icon is clicked
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

export { renderTasks, tasks, taskList, form }*/