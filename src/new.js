const taskList = document.getElementById('task-list');
const form = document.querySelector('#form');
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

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
  });
}

function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask() {
  const times = document.querySelectorAll('#times');
  times.forEach((time, n) => {
    time.addEventListener('click', () => {
      time.parentElement.parentElement.remove();
      tasks.forEach((t, m) => {
        if (n === m) {
          tasks = tasks.filter((tee) => tee.index !== t.index);
          // changeindexs
          tasks.forEach((t, n) => {
            t.index = n + 1;
            window.location.reload();
          });
          updateLocalStorage();
        }
      });
    });
  });
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

  // add tasks
  tasks.push(task);
  renderTasks();
  input.value = '';
  updateLocalStorage();

  // changeicon
  const pen = document.querySelectorAll('#pen');

  pen.forEach((p) => {
    p.addEventListener('click', () => {
      // const grand = p.parentElement.parentElement;
    });
  });

  // remove task
  deleteTask();

  // edit task

  pen.forEach((p, y) => {
    p.addEventListener('click', () => {
    // change the icon
      p.parentElement.classList.add('change');
      const grand = p.parentElement.parentElement;

      // set the input to readonly
      const edit = grand.querySelector('#word');
      edit.removeAttribute('readonly');
      edit.focus();

      // change the description in array and LS
      edit.addEventListener('keyup', () => {
        tasks.forEach((e, z) => {
          if (y === z) {
            e.description = edit.value;
            updateLocalStorage();
          }
        });
      });

      // off the edit function
      const worr = grand.querySelector('#worr');
      worr.addEventListener('submit', (e) => {
        e.preventDefault();
        p.parentElement.classList.remove('change');
        edit.setAttribute('readonly', 'readonly');
      });
    });
  });
});

window.addEventListener('load', () => {
  const reshow = JSON.parse(localStorage.getItem('tasks'));
  tasks.push(...tasks, ...reshow);
  renderTasks();

  // changeicon
  const pen = document.querySelectorAll('#pen');

  pen.forEach((p) => {
    p.addEventListener('click', () => {
      // const grand = p.parentElement.parentElement;
    });
  });

  // remove task
  deleteTask();

  // edit task

  pen.forEach((p, y) => {
    p.addEventListener('click', () => {
    // change the icon
      p.parentElement.classList.add('change');
      const grand = p.parentElement.parentElement;

      // set the input to readonly
      const edit = grand.querySelector('#word');
      edit.removeAttribute('readonly');
      edit.focus();

      // change the description in array and LS
      edit.addEventListener('keyup', () => {
        tasks.forEach((e, z) => {
          if (y === z) {
            e.description = edit.value;
            updateLocalStorage();
          }
        });
      });

      // off the edit function
      const worr = grand.querySelector('#worr');
      worr.addEventListener('submit', (e) => {
        e.preventDefault();
        p.parentElement.classList.remove('change');
        edit.setAttribute('readonly', 'readonly');
      });
    });
  });
});

// export { renderTasks, addTask, deleteTask, editTask, updateLocalStorage }