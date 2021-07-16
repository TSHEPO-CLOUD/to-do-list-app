import {
  dragStart, allowDrop, dragEnd, drop, dragEnter, dragLeave,
} from './drag.js';
import './style.css';
import updateStatus from './status.js';

const list = document.getElementById('list');

let todoList = [
  {
    description: 'Walk my Dog',
    completed: true,
    index: 3,
  },
  {
    description: 'Add README.md file',
    completed: true,
    index: 2,
  },
  {
    description: 'Take a screenshot',
    completed: false,
    index: 1,
  },
  {
    description: 'Install webpack',
    completed: false,
    index: 0,
  },
  {
    description: 'Run npm start',
    completed: true,
    index: 4,
  },
  {
    description: 'Fix linter errors',
    completed: false,
    index: 5,
  },
];

function renderList(arr) {
  list.innerHTML = arr.map((item) => `<li class="flex-row todo" draggable="true" id="${item.index}">
                                      <input type="checkbox" class="checkbox" data-id="${item.index}"  ${item.completed ? 'checked' : ''}>
                                      <input type="text" value="${item.description}" data-index="${item.index}" draggable="false" class="todo-text ${item.completed ? 'completed' : ''}">
                                      <i class="fas fa-ellipsis-v dots" data-id="${item.index}"></i>
                                      </li>`).join('');

  list.addEventListener('dragenter', dragEnter);

  document.querySelectorAll('.todo').forEach((t) => {
    t.addEventListener('dragstart', dragStart);
    t.addEventListener('dragend', dragEnd);
    t.addEventListener('dragenter', dragEnter);
    t.addEventListener('dragleave', dragLeave);
    t.addEventListener('drop', drop);
    t.addEventListener('dragover', allowDrop);
  });

  document.querySelectorAll('.todo-text').forEach((text) => {
    text.addEventListener('focus', (event) => {
      document.querySelectorAll('.todo').forEach((t) => {
        t.style.backgroundColor = '#fff';
      });
      event.target.parentNode.style.backgroundColor = '#fea';
    });
    text.addEventListener('blur', () => {
      document.querySelectorAll('.todo').forEach((t) => {
        t.style.backgroundColor = '#fff';
      });
    });
  });

  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((chbox) => {
    chbox.addEventListener('change', updateStatus);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('TodoList')) {
    todoList = JSON.parse(localStorage.getItem('TodoList'));
  } else {
    localStorage.setItem('TodoList', JSON.stringify(todoList.sort((a, b) => +a.index - +b.index)));
  }

  renderList(todoList.sort((a, b) => +a.index - +b.index));
});