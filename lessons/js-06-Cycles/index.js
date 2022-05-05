console.log(`!!!`);

// Перевірка на рядок з пробілів
const сheckSpaces = (str) => str.trim() !== '';

//Перевірка на число {Якщо це число або число в 'string' - true}
const isNumber = (value) => {
  if (typeof value === 'number' && !isNaN(value) && isFinite(value)) {
    return true;
  } else if (
    typeof value === 'string' &&
    value !== null &&
    value &&
    сheckSpaces(value)
  ) {
    value = +value;
    if (isNaN(value)) {
      return false;
    }
    return true;
  }
  return false;
};

// Сума до сплати зі знижкою
const priceWithDiscount = (price, discount) => {
  if (isNumber(price) && isNumber(discount)) {
    return (+price * +discount) / 100;
  }
};

const minNumberOneTask = () => {
  // Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
  let ageUser = prompt('Введіть свій вік: ');
  if (ageUser >= 0 && ageUser <= 120 && ageUser !== null && ageUser !== '') {
    if (ageUser >= 0 && ageUser <= 11) {
      alert('Ви ще дитина)');
    } else if (ageUser >= 12 && ageUser <= 17) {
      alert('Ви вже підліток!');
    } else if (ageUser >= 18 && ageUser <= 59) {
      alert('Доросла людина)');
    } else if (ageUser >= 60) {
      alert('Та Ви вже пенсіонер!!!');
    }
  } else {
    alert('Введено некоректні дані!');
  }
};

const minNumberTwoTask = () => {
  // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
  let numberUser = prompt('Введіть число від 0 до 9:');
  switch (+numberUser) {
    case 1:
      alert('Спецсимвол - !');
      break;
    case 2:
      alert('Спецсимвол - @');
      break;
    case 3:
      alert('Спецсимвол - #');
      break;
    case 4:
      alert('Спецсимвол - $');
      break;
    case 5:
      alert('Спецсимвол - %');
      break;
    case 6:
      alert('Спецсимвол - ^');
      break;
    case 7:
      alert('Спецсимвол - &');
      break;
    case 8:
      alert('Спецсимвол - *');
      break;
    case 9:
      alert('Спецсимвол - (');
      break;
    default:
      alert('Введено некоректні дані!');
  }
};

// Переробити!!!
const minNumberThreeTask = () => {
  // Підрахуй суму всіх чисел в заданому користувачем діапазоні.
  let numberFrom = prompt('Задайте діапазон чисел. \n Від:');
  let numberTo = prompt('Задайте діапазон чисел. \n До:');
  let suma = 0;
  for (let i = +numberFrom; i <= +numberTo; i++) {
    suma += i;
  }
  alert(
    `Сума цифр в діапазоні від ${numberFromUser} до ${numberToUser} = ${suma}`
  );
};

const minNumberFourthTask = () => {
  // Запитай у користувача 2 числа і знайди найбільший спільний дільник.
  // Користувач вводить числа
  let userNumberOne = prompt('Введіть перше число:');
  let userNumberTwo = prompt('Введіть друге число:');
  // Перевірка на число
  if (isNumber(userNumberOne) && isNumber(userNumberTwo)) {
    // Знайшов мінімальне з двох чисел
    minNum = +userNumberOne <= +userNumberTwo ? +userNumberOne : +userNumberTwo;
    for (let divisor = minNum; divisor > 0; divisor--) {
      // Умова пошуку найбільшого спільного дільника
      if (+userNumberOne % divisor === 0 && +userNumberTwo % divisor === 0) {
        alert(
          `Найбільшим спільним дільником чисел ${userNumberOne} і ${userNumberTwo} являється - ${divisor}`
        );
        break;
      }
    }
  } else {
    alert('Невірні дані!');
  }
};

const minNumberFiveTask = () => {
  // Запитай у користувача число і виведи всі дільники цього числа
  // Користувач вводить число
  let userNumber = prompt('Введіть число:');
  // Масив дільників
  let divisorNumber = [];
  // Перевірка на число
  if (isNumber(userNumber) && +userNumber > 0) {
    for (let i = +userNumber, index = 0; i > 0; i--) {
      // Запис дільника в масив
      if (+userNumber % i === 0) {
        divisorNumber[index] = i;
        // Збільшується індекс масива
        index++;
      }
    }
    alert(
      `В числа ${userNumber} є ${divisorNumber.length} дільників/(ка) - ${divisorNumber}`
    );
  } else {
    alert('Невірні дані!');
  }
};

const getPriceGoods = () => {
  // Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
  // від 200 до 300 - знижка буде 3%;
  // від 300 до 500 - 5%;
  // від 500 і вище - 7%.

  // Користувач вводить число
  let priceUser = prompt('Введіть суму покупки:');
  // Перевірка на число
  if (isNumber(priceUser) && +priceUser >= 0) {
    // Перевів в тип number
    priceUserInt = +priceUser;
    // Умова задачі
    if (priceUserInt >= 200 && priceUserInt < 300) {
      alert(
        `Сума: ${priceUserInt} грн. \nВаша знижка - 3%. До сплати: ${(
          priceUserInt - priceWithDiscount(priceUserInt, 3)
        ).toFixed(2)} грн.`
      );
    } else if (priceUserInt >= 300 && priceUserInt < 500) {
      alert(
        `Сума: ${priceUserInt} грн. \nВаша знижка - 5%. До сплати: ${(
          priceUserInt - priceWithDiscount(priceUserInt, 5)
        ).toFixed(2)} грн.`
      );
    } else if (priceUserInt >= 500) {
      alert(
        `Сума: ${priceUserInt} грн. \nВаша знижка - 7%. До сплати: ${(
          priceUserInt - priceWithDiscount(priceUserInt, 7)
        ).toFixed(2)} грн.`
      );
    } else {
      alert(`Сума: ${priceUserInt} грн. \nУ Вас нажаль немає знижки.`);
    }
  } else {
    alert('Невірні дані!');
  }
};

const getStatisticNumbers = () => {
  //Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
  // Користувач вводить число
  let numberUser;
  let positiveNumber = 0,
    negativeNumber = 0,
    zeroNumber = 0;
  for (let i = 1; i <= 10; i++) {
    numberUser = prompt(`Введіть 10 чисел \n Число № ${i}:`);
    console.log();
    if (isNumber(numberUser)) {
      let numberUserInt = +numberUser;
      if (numberUserInt > 0) {
        positiveNumber++;
      } else if (numberUserInt < 0) {
        negativeNumber++;
      } else if (numberUserInt === 0) {
        zeroNumber++;
      }
    } else {
      alert(`Введено невірні дані, повторіть спробу.`);
      --i;
    }
  }
  alert(
    `Введено: \n Додатніх чисел: ${positiveNumber} \n Від’ємних чисел: ${negativeNumber} \n Нулів: ${zeroNumber}`
  );
};

const getDaysOfTheWeek = () => {
  // Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
  // Масив днів тижня
  const weekDay = [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота',
  ];
  const dateObj = new Date();
  // Номер дня тижня
  let indexDay = dateObj.getDay();
  // Значення з масиву відносно ідексу дня
  let dayOfTheWeek = weekDay[indexDay];
  let nextDay = false;
  // Цикл працює доки nextDay === true
  do {
    if (indexDay === 7) {
      indexDay = 0;
    }
    dayOfTheWeek = weekDay[indexDay];
    nextDay = confirm(`${dayOfTheWeek}. Хочете побачити наступний день тижня?`);
    // Збільшуєьться ідекс дня
    indexDay += 1;
  } while (nextDay);
};

const guessTheNumber = () => {
  // Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N
  if (
    confirm(
      "Давайте зіграємо в гру 'Вгадай число'. Загадайте число а я повинен його відгадати =)"
    )
  ) {
    let minNumber = 0,
      maxNumber = 100,
      userNumberTrue;
    let userNumber = prompt(
      `Число в діапазоні від ${minNumber} до ${maxNumber}`
    );
    userNumberTrue = (maxNumber + minNumber) / 2;
    while (true) {
      if (
        isNumber(userNumber) &&
        +userNumber >= minNumber &&
        +userNumber <= maxNumber
      ) {
        userNumberInt = +userNumber;
        let whereNumber = prompt(
          `Ваше загадане число ${userNumberTrue.toFixed(
            0
          )} ? \n + Так \n > Загадане число більше \n < Загадане число менше`
        );
        if (whereNumber === '<') {
          if (userNumber >= userNumberTrue) {
            alert(
              `Не обманюйте! Я прекрасно знаю що Ваше число і воно не є менше за ${userNumberTrue.toFixed(
                0
              )} \nГра закічена!`
            );
            break;
          }
          maxNumber = userNumberTrue;
          userNumberTrue = (maxNumber + minNumber) / 2;
        } else if (whereNumber === '>') {
          if (userNumber <= userNumberTrue) {
            alert(
              `Не обманюйте! Я прекрасно знаю Ваше число і воно не є більше за ${userNumberTrue.toFixed(
                0
              )} \nГра закічена!`
            );
            break;
          }
          minNumber = userNumberTrue;
          userNumberTrue = (maxNumber + minNumber) / 2;
        } else if (whereNumber === '+') {
          if (userNumber <= userNumberTrue) {
            alert(
              `Не обманюйте! Я прекрасно знаю Ваше число і воно = ${Number(
                userNumber
              ).toFixed(0)} \nГра закічена!`
            );
            break;
          }
          alert('Урааа!!! Я вгадав)))');
          break;
        } else {
          alert('Помилка! \nГра закічена!');
          break;
        }
      } else {
        alert('Ви ввели щось неправильне =|');
        break;
      }
    }
  } else {
    alert(`Ехх, жаль(`);
  }
};

const getMultiplicationTable = () => {
  // Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
  let arrayTable = new Array();
  for (let i = 1; i <= 10; i++) {
    arrayTable[i - 1] = [];
    for (let k = 1; k <= 10; k++) {
      arrayTable[i - 1][k - 1] = i * k;
    }
  }
  console.log(arrayTable);
  // alert(arrayTable);
};
