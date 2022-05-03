console.log("!!!");
// Мінімум
// 1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
console.log(`0,1 + 0,2 = ${(0.1 + 0.2).toFixed(1)}`);
//
// 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let numberOne = "1";
let numberTwo = 2;
console.log(`"1" + 2 = ${+numberOne + numberTwo}`);
//
//
// 3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
(() => {
  // Завдання до задачі
  alert(
    "Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку."
  );
  // Користувач вводить дані
  let memoryFlashCard = prompt("Вкажіть обсяг флешки (Гб): ");
  // перевіряємо введені дані
  if (isNumber(memoryFlashCard) && memoryFlashCard > 0) {
    // функція isNumber робить перевірку на число і якщо це число виконується друга перевірка, дані перетворюються в число і перевіряються чи вони більші нуля
    alert(
      `В флешку поміщається ${((memoryFlashCard * 1024) / 820).toFixed(
        0
      )} файл/файлів`
    );
  } else {
    alert("Ви ввели неправильні дані!!!");
  }
})();
//
//
// Норма
(() => {
  // Завдання до задачі
  alert(
    "Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться."
  );
  // Користувач вводить дані
  let userMoney = prompt("Введіть суму Ваших грошей (грн): ");
  let priceChocolate = prompt("Введіть ціну однієї шоколадки: ");
  // Перевірка
  if (
    isNumber(userMoney) &&
    +userMoney > 0 &&
    isNumber(priceChocolate) &&
    +priceChocolate > 0
  ) {
    // Кількість шоколадок
    let numbersChocolate = (userMoney / priceChocolate).toFixed(0);
    alert(
      `Ви можете купити ${numbersChocolate} шокол. і у Вас залишиться ${
        userMoney - numbersChocolate * priceChocolate
      } грн.`
    );
  } else {
    alert("Мало грошей або Ви ввели неправильні дані!!!");
  }
})();

//
//
(() => {
  // Завдання до задачі
  alert("Запитай у користувача тризначне число і виведи його задом наперед.");
  let userNumber = prompt("Введіть тризначне число: ");
  let userNumberReverse = "";
  // Масив цифр
  let numberBox = [];
  if (isNumber(userNumber) && (+userNumber >= 100 || +userNumber <= -100)) {
    for (let i = 0; i < userNumber.length; i++) {
      // Записуємо цифри в масив
      numberBox[i] = userNumber.charAt(i);
    }
    // Зворотний порядок
    for (let i = numberBox.length - 1; i >= 0; i--) {
      userNumberReverse += numberBox[i];
    }
    alert(userNumberReverse);
  } else {
    alert("Ви ввели неправильні дані!!!");
  }
})();

// Максимум
// 
// 
(() => {
  // Завдання до задачі
  alert(
    "Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків."
  );
  let sumaMoneyUser = prompt("Вкажіть суму вкладу: ");
  let interestRate = 5;
  let timeLimit = 2;
  if (isNumber(sumaMoneyUser) && +sumaMoneyUser > 0) {
    let rateYear = (interestRate * +sumaMoneyUser) / 100;
    alert(
      `За 2 місяця Вам нараховано - ${((rateYear / 12) * timeLimit).toFixed(2)}`
    );
  } else {
    alert("Ви ввели неправильні дані!!!");
  }
})();

// Перевірка на число
function isNumber(value) {
  if (
    (typeof value === "string" && value !== "") ||
    typeof value === "number"
  ) {
    value = +value;
    if (!isNaN(value)) {
      console.log(`isNumber ${value}`);
      return true;
    }
  }
  console.log(`isNotNumber ${value}`);
  return false;
}
