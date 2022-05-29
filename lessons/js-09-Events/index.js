console.log('!!!');
// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
document.addEventListener('keydown', (e) => {
  const taskOne = document.getElementById('js-task-one');
  if (e.code == 'KeyE' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    const text = document.getElementById('js-text');
    const textValue = text.textContent;
    const texTarea = document.createElement('textarea');
    texTarea.id = 'js-textarea';
    texTarea.innerText = textValue;
    text.remove();
    taskOne.appendChild(texTarea);
  }
  if (e.code == 'KeyS' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    const texTarea = document.getElementById('js-textarea');
    const texTareaValue = texTarea.value;
    const div = document.createElement('div');
    div.id = 'js-text';
    div.innerText = texTareaValue;
    texTarea.remove();
    taskOne.appendChild(div);
  }
});
// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
const taskTwo = document.getElementById('js-task-two');
const userListTitles = ['ID', 'Ім`я', 'Прізвище', 'Вік', 'Місце проживання'];
const userstList = [
  {
    id: 1,
    firstName: 'Олена',
    lastName: 'Дмитренко',
    age: 30,
    location: 'Львів',
  },
  {
    id: 2,
    firstName: 'Ніна  ',
    lastName: 'Лемеш',
    age: 21,
    location: 'Тернопіль',
  },
  {
    id: 3,
    firstName: 'Дмитро',
    lastName: 'Блауш',
    age: 44,
    location: 'Луцьк',
  },
  {
    id: 4,
    firstName: 'Тетяна',
    lastName: 'Гліб',
    age: 28,
    location: 'Івано-Франківськ',
  },
  {
    id: 5,
    firstName: 'Олена',
    lastName: 'Зубок',
    age: 34,
    location: 'Одеса',
  },
];

const createTableList = () => {
  const table = document.createElement('table');
  const tBody = document.createElement('tbody');
  table.appendChild(tBody);
  taskTwo.appendChild(table);
  const tr = document.createElement('tr');
  // Title table
  userListTitles.forEach((item) => {
    const th = document.createElement('th');
    th.innerText = item;
    tr.appendChild(th);
  });
  tBody.appendChild(tr);
  //Content table
  for (let i = 0; i < userstList.length; i++) {
    const tr = document.createElement('tr');
    for (const key in userstList[i]) {
      const td = document.createElement('td');
      td.innerText = userstList[i][key];
      tr.appendChild(td);
    }
    tBody.appendChild(tr);
  }
  for (const i of document.querySelectorAll('th')) {
    i.addEventListener('click', () => {
      switch (i.textContent) {
        case 'ID':
          removeTable();
          sortByArray(userstList, 'id');
          createTableList();
          console.log(i.textContent);
          break;
        case 'Ім`я':
          removeTable();
          sortByArray(userstList, 'firstName');
          createTableList();
          console.log(i.textContent);
          break;
        case 'Прізвище':
          removeTable();
          sortByArray(userstList, 'lastName');
          createTableList();
          console.log(i.textContent);
          break;
        case 'Вік':
          removeTable();
          sortByArray(userstList, 'age');
          createTableList();
          console.log(i.textContent);
          break;
        case 'Місце проживання':
          removeTable();
          sortByArray(userstList, 'location');
          createTableList();
          console.log(i.textContent);
          break;
      }
    });
  }
};

const removeTable = () => {
  document.querySelector('table').remove();
};

const sortByArray = (arr, typeObj) => {
  arr.sort((a, b) => (a[typeObj] > b[typeObj] ? 1 : -1));
};
createTableList();

// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
const block = document.getElementById('js-box-text');
let widthBlock = null;
let heightBlock = null;
block.addEventListener('mousedown', () => {
  document.onmousemove = function (event) {
    event = event || window.event;
    widthBlock = event.offsetX;
    heightBlock = event.offsetY;
    block.style = `width: ${event.offsetX}px; height: ${event.offsetY}px`;
  };
});
document.addEventListener('mouseup', () => {
  document.onmousemove = function (event) {
    event = event || window.event;
    block.style = `width: ${widthBlock}px; height: ${heightBlock}px`;
  };
});
