export const getFromStorage = (name) => JSON.parse(localStorage.getItem(name));

export const saveToStorage = (name, data) => localStorage.setItem(name, JSON.stringify(data));