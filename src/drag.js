let current = null;
let targetItem = null;

export function dragStart() {
  current = this;
  current.classList.add('current-active');
}

export function dragEnd() {
  current.classList.remove('current-active');
  current = null;
}

export function dragEnter(event) {
  event.preventDefault();
}

export function dragLeave() {
  targetItem = null;
}

export function allowDrop(event) {
  event.preventDefault();
}

export function drop(event) {
  targetItem = document.getElementById(event.target.parentNode.id);
  current.parentElement.insertBefore(current, targetItem);
  const children = Array.from(current.parentElement.children);
  const updatedList = children.map((el, index) => ({
    index, completed: el.children[0].checked, description: el.children[1].value,
  }
  ));
  localStorage.setItem('TodoList', JSON.stringify(updatedList));
}