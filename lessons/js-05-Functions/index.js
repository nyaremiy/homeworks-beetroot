const log = (data) => console.log(data);

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

const perfectNumber = (number) => {
  let pNum = 0;
  for (let i = number - 1; i > 0; i--) {
    if (number % i === 0) {
      pNum += i;
    }
  }
  if (number === pNum) {
    log(`Число ${number} є досконалим числом.`);
  } else {
    log(`Число ${number} не є досконалим числом.`);
  }
};
perfectNumber(6);
perfectNumber(91);
perfectNumber(28);

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

const rangePerfectNumber = (min, max) => {
  for (let i = min; i <= max; i++) {
    perfectNumber(i);
  }
};
log('!!!');
rangePerfectNumber(5, 30);
log('!!!');

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
const numberArgs = (args1, args2) => {
  return numberArgs.length;
};

log(`Кількість переданих аргументів - ${numberArgs(1, 2)}`);
log('!!!');

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

const getСomparisonNumbers = (num1, num2) => {
  return num1 > num2 ? -1 : num2 > num1 ? 1 : 0;
};
log(`Числа 10 і 2 = ${getСomparisonNumbers(10, 2)}`);
log(`Числа 2 і 10 = ${getСomparisonNumbers(2, 10)}`);
log(`Числа 10 і 10 = ${getСomparisonNumbers(10, 10)}`);
log('!!!');

// Напиши функцію, яка обчислює факторіал переданого їй числа.

const factorialNumber = (number) => {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  log(`Факторіал числа ${number}: ${factorial}`);
};
factorialNumber(0);
factorialNumber(6);
log('!!!');

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

const numberToBigNumber = (num1, num2, num3) => {
  log(`${num1}${num2}${num3}`);
};
numberToBigNumber(1, 4, 9);
log('!!!');

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

const squareFigure = (length, width) => {
  if (width === undefined) {
    log(`Площа квадрата: ${(Math.pow(length, 2) / 2).toFixed(2)}`);
  } else {
    log(`Площа прямокутника: ${(length * width).toFixed(2)}`);
  }
};
squareFigure(4);
squareFigure(4, 7);
