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


function updateStatus(list, index) {
  if (list[index].completed === true) {
    list[index].completed = false;
  } else {
    list[index].completed = true;
  }
  LocalStorage.setItem('todo', JSON.stringify(list));
  return list;
}


function removeCompleted(list) {
  const newList = list.filter((todo) => todo.completed !== true);
  LocalStorage.setItem('todo', JSON.stringify(newList));
  return newList;
}

function editTodo(list, index, newDescription) {
  list[index].description = newDescription;
  LocalStorage.setItem('todo', JSON.stringify(list));
  return list;
}

function dragDrop(list, position1, position2) {
  list.forEach((object) => {
    const li = document.createElement('li');
    li.classList.add('list');
    li.innerHTML = `<input type="checkbox" class="checkbox" data-id="${object.index}"  ${object.completed ? 'checked' : ''}>
            <input type="text" value="${object.description}" data-index="${object.index}" draggable="false" class="todo-text ${object.completed ? 'completed' : ''}">
            <i class="fas fa-ellipsis-v dots" data-id="${object.index}"></i>
            <i class="fas fa-trash deleteBtn" data-type="deleteBtn" data-trash="${object.index}"></i>`;
    document.body.appendChild(li);
  });
  const b = list[position2].index;
  list[position2].index = list[position1].index;
  list[position1].index = b;
  LocalStorage.setItem('todo', JSON.stringify(list));
  return list;
}

beforeAll(() => {
  const list = [
    { description: 'hiii', completed: false, index: 1 },
    { description: 'hello', completed: false, index: 2 },
    { description: 'masi', completed: true, index: 3 },
  ];
  LocalStorage.setItem('todo', JSON.stringify(list));
});

describe('Edit last object in the array', () => {
  test('Edit last object', () => {
    const newDescription = 'Hello everyone';
    const listResult = JSON.parse(LocalStorage.getItem('todo'));
    const result = editTodo(listResult, 1, newDescription);
    expect(result[1].description).toBe('Hello everyone');
  });
  test('Edit first object', () => {
    const newDescription = 'first element';
    const listResult = JSON.parse(LocalStorage.getItem('todo'));
    const result = editTodo(listResult, 0, newDescription);
    expect(result[0].description).toBe('first element');
  });
});

describe('All completed tasks will disapear', () => {
  test('Last task will disapear', () => {
    const listResult = JSON.parse(LocalStorage.getItem('todo'));
    const result = removeCompleted(listResult);
    expect(result).toHaveLength(2);
  });
});

describe('The function will update completed status', () => {
  test('2nd object will turn true', () => {
    const listResult = JSON.parse(LocalStorage.getItem('todo'));
    const checked = updateStatus(listResult, 1);
    expect(checked[1].completed).toBe(true);
  });
  test('2nd object will turn false now', () => {
    const listResult = JSON.parse(LocalStorage.getItem('todo'));
    const checked = updateStatus(listResult, 1);
    expect(checked[1].completed).toBe(false);
  });
});

describe('The function will mock drag and drop', () => {
  test('The position1 and position2 will change index on drag and drop', () => {
    const listResult = JSON.parse(LocalStorage.getItem('todo'));
    const swapPlaces = dragDrop(listResult, 0, 1);
    expect(swapPlaces[0].index).toBe(2);
  });
  test('The position1 and position2 will change index on drag and drop again', () => {
    const listResult = JSON.parse(LocalStorage.getItem('todo'));
    const swapPlaces = dragDrop(listResult, 0, 1);
    expect(swapPlaces[0].index).toBe(1);
  });
});