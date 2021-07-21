function addTodo(event) {
    const input = event.target.children[0];
    const todos = getFromStorage('TodoList');
    todos.push({ index: todos.length, description: input.value, completed: false });
    input.value = '';
    saveToStorage('TodoList', todos);
    renderList(todos);
  }
  
function removeTodo(event) {
    if (event.target.dataset.type === 'deleteBtn') {
      const todos = getFromStorage('TodoList');
      todos.splice(event.target.parentNode.id, 1);
      const modifiedIndex = todos.map((el, index) => ({ ...el, index }));
      saveToStorage('TodoList', modifiedIndex);
      renderList(modifiedIndex);
    }
  }
  
module.exports = { addTodo, removeTodo };