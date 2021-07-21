

const LocalStorage = (function() {
    let store = {};
  
    return {
      getItem: function(key) {
        return store[key] || null;
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      removeItem: function(key) {
        delete store[key];
      },
      clear: function() {
        store = {};
      }
    };
  })();

beforeAll(() => {
    const list = [
        { description: 'hiii', completed: false, index: 1},
        { description: 'hello', completed: false, index: 2}
    ]
    LocalStorage.setItem("todo", JSON.stringify(list))
});

describe('add function', () => {
    test('list length is 2', () => {
        const listResult = JSON.parse(LocalStorage.getItem('todo'));
        expect(listResult.length).toBe(2)
    })
    test('add object', () => {
        const listResult = JSON.parse(LocalStorage.getItem('todo'));
        const newObj = { description: 'zero', completed: false, index: 3}
        listResult.push(newObj);
        LocalStorage.setItem("todo", JSON.stringify(listResult))
        expect(listResult.length).toBe(3)
    })
    
})