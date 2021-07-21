/**
 * @jest-environment jsdom
 */

const LocalStorage = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
}());

function addTodo(event) {
  const list = JSON.parse(LocalStorage.getItem('todo'));
  list.push(event);
  list.forEach((object) => {
    const li = document.createElement('li');
    li.classList.add('list');
    li.innerHTML = `<input type="checkbox" class="checkbox" data-id="${object.index}"  ${object.completed ? 'checked' : ''}>
        <input type="text" value="${object.description}" data-index="${object.index}" draggable="false" class="todo-text ${object.completed ? 'completed' : ''}">
        <i class="fas fa-ellipsis-v dots" data-id="${object.index}"></i>
        <i class="fas fa-trash deleteBtn" data-type="deleteBtn" data-trash="${object.index}"></i>`;
    document.body.appendChild(li);
  });
  LocalStorage.setItem('todo', JSON.stringify(list));
}

function removeTodo(event) {
  const todos = JSON.parse(LocalStorage.getItem('todo'));
  todos.splice(todos[event], 1);
  LocalStorage.setItem('todo', JSON.stringify(todos));
}

beforeAll(() => {
  const list = [
    { description: 'hiii', completed: false, index: 1 },
    { description: 'hello', completed: false, index: 2 },
  ];
  LocalStorage.setItem('todo', JSON.stringify(list));
});

describe('add function', () => {
  test('list length is 2', () => {
    const listResult = JSON.parse(LocalStorage.getItem('todo'));
    expect(listResult.length).toBe(2);
  });
  test('add object', () => {
    const listResult = JSON.parse(LocalStorage.getItem('todo'));
    const newObj = { description: 'zero', completed: false, index: 3 };
    listResult.push(newObj);
    LocalStorage.setItem('todo', JSON.stringify(listResult));
    expect(listResult.length).toBe(3);
  });
  test('Add html', () => {
    const newObj = { description: 'zero', completed: false, index: 3 };
    addTodo(newObj);
    const list = document.querySelectorAll('.list');
    expect(list).toHaveLength(4);
  });
});

describe('remove function', () => {
  test('remove a function from the list', () => {
    removeTodo(0);
    const list = JSON.parse(LocalStorage.getItem('todo'));
    expect(list).toHaveLength(3);
  });
});