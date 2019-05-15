import ToDo from './components/ToDo/ToDo.js';
import { openDB } from 'idb';
import checkConnectivity from './connection';

(async function(document) {
  const database = await openDB('app-store', 1, {
    upgrade(db) {
      db.createObjectStore('todos', { autoIncrement: true });
    }
  })

  checkConnectivity(3,1000);

  const app = document.querySelector('#app');

  document.addEventListener('add-todo', addTodo);
  document.addEventListener('delete-todo', deleteTodo);
  document.addEventListener('connection-changed', connectionChange);

  if (navigator.onLine) {
      const data = await fetch('http://localhost:3000/todos');
      const json = await data.json();
      await database.put('todos', json, 'todos');
  }

  const todos = await database.get('todos', 'todos');
  const todo = new ToDo(todos);
  app.appendChild(todo);

  async function addTodo(event) {
    let todos = await database.get('todos', 'todos');
    const todoAdded = { todo: event.detail, id: todos.length > 0 ? todos[todos.length-1].id+1 : 1 };
    console.log(todoAdded);
    todos === undefined ? todos = [todoAdded] : todos.push(todoAdded);
    await database.put('todos', todos, 'todos');

    if (navigator.onLine)
      pushAddTodo({todo: event.detail})

  }

  async function deleteTodo(event) {
    let todos = await database.get('todos', 'todos');
    let filter = todos.filter((item) => item.todo === event.detail);
    const todoDeleted = { todo: event.detail, id: filter[0].id };
    todos = removeDuplicates(todos, todoDeleted.todo);
    await database.put('todos', todos, 'todos');
    if (navigator.onLine)
      pushDeleteTodo(todoDeleted.id);

  }

  async function pushDeleteTodo(todoId) {
    await fetch('http://localhost:3000/todos/' + todoId, {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
    });
  }

  async function pushAddTodo(todo) {
    await fetch('http://localhost:3000/todos', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(todo)
    });
  }

  async function connectionChange(event) {
    if(!event.detail.online)
      return;

    const data = await fetch('http://localhost:3000/todos');
    const json = await data.json();
    const todos = await database.get('todos', 'todos');
    insertOfflineModif(todos, json);
    deleteOfflineAction(todos, json);
  }

  function insertOfflineModif(localTodos, serverTodos) {
     let jsonItemsNames = serverTodos.map(jsonItem => {
         return jsonItem.todo
     });
     let itemsToInsert = localTodos.filter(item => !jsonItemsNames.includes(item.todo));
     if (itemsToInsert.length > 0) {
         itemsToInsert.forEach(item => pushAddTodo(item));
     }
   }

  function deleteOfflineAction(localData, jsonData) {
     let todoItemsNames = localData.map(todoItem => {
         return todoItem.todo
     });

     let itemsToDelete = jsonData.filter(item => !todoItemsNames.includes(item.todo));

     if (itemsToDelete.length > 0) {
         itemsToDelete.forEach(item => pushDeleteTodo(item.id));
     }
  }

  function removeDuplicates(myArr, val) {
    return myArr.filter(function(item) {
      return !item.todo.includes(val);
    });
  }

})(document);
