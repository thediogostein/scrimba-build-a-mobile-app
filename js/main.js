import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';

import {
  getDatabase,
  ref,
  push,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
  databaseURL: 'https://realtime-database-7fa60-default-rtdb.firebaseio.com/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'shoppingList');

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');

addButtonEl.addEventListener('click', function () {
  let inputValue = inputFieldEl.value;

  push(shoppingListInDB, inputValue);
  const shoppingList = document.querySelector('#shopping-list');
  const li = document.createElement('li');
  li.innerText = inputValue;
  shoppingList.append(li);
});
