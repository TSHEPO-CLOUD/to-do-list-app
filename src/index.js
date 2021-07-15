import './style.css';

const list = document.getElementById('list');

const todoList = [
  {
    description: 'Install and set up webpack',
    completed: false,
    index: 4,
  },
  {
    description: 'Edit GitHub profile Page',
    completed: true,
    index: 3,
  },
  {
    description: 'Edit README.md File',
    completed: false,
    index: 2,
  },
  {
    description: 'Submit the To do project',
    completed: false,
    index: 1,
  },
];

function renderList(arr) {
  list.innerHTML = arr.sort((a, b) => +a.index - +b.index).map((item) => `<li class="flex-row todo" data-id="${item.index}">
 <input type="checkbox" class="checkbox" id="${item.index}" ${item.completed ? 'checked' : ''}>
 <input type="text" value="${item.description}" data-index="${item.index}" class="todo-text ${item.completed ? 'completed' : ''}">
 <i class="fas fa-ellipsis-v dots"></i>
 </li>`).join('');
  document.querySelectorAll('.todo-text').forEach((text) => {
    text.addEventListener('focus', (event) => {
      document.querySelectorAll('.todo').forEach((t) => {
        t.style.backgroundColor = '#fff';
      });
      event.target.parentNode.style.backgroundColor = '#fea';
    });
  });

  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((chbox) => {
    chbox.addEventListener('change', (event) => {
      event.target.nextElementSibling.classList.toggle('completed');
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderList(todoList);
});