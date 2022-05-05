console.log('!!!');

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Circle {
  constructor(radiusCircle) {
    this.radius = radiusCircle || 0;
  }
  get radiusCircle() {
    return this.radius;
  }
  set radiusCircle(radiusCircle) {
    this.radius = radiusCircle;
  }
  get diameterCircle() {
    return this.radius + this.radius;
  }

  squareCircle() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getLengthCircle() {
    return 2 * Math.PI * this.radius;
  }
}

let circle = new Circle(5);

console.log(
  `Клас Circle(radius: 5): \nGet-властивість: ${
    circle.radiusCircle
  } \nSet-властивість: ${(circle.radiusCircle = 8)} \nGet-властивість, діаметр кола: ${
    circle.diameterCircle
  } \nПлоща кола: ${circle.squareCircle().toFixed(2)} \nДовжина кола: ${circle
    .getLengthCircle()
    .toFixed(2)}`
);

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

// Продемонструй роботу написаних методів.

class StationeryMarker {
  constructor(colorMarker, amountOfInk) {
    this.colorMarker = colorMarker;
    this.amountOfInk = amountOfInk;
  }
  get colorM() {
    return this.colorMarker;
  }
  set colorM(colorMarker) {
    this.colorMarker = colorMarker;
  }
  get amountInk() {
    return this.amountInk;
  }
  set amountInk(amountOfInk) {
    this.amountOfInk = amountOfInk;
  }
  getText(text) {
    while (this.amountOfInk > 0) {
      console.log(`Текст: ${text}, колір: ${this.colorMarker}`);
      this.amountOfInk -= 0.5;
      console.log(`Чорнил залишилось: ${this.amountOfInk}`);
    }
  }
}

class NewMarker extends StationeryMarker {
  constructor(colorMarker, amountOfInk) {
    super(colorMarker, amountOfInk);
  }
  addToMarkerInk() {
    this.amountOfInk = 100;
  }
}

let marker = new NewMarker('red', 30);
console.log(
  `Клас StationeryMarker і NewMarker\ \nКолір маркера: ${marker.colorMarker} \nКількість чорнил в маркері: ${marker.amountOfInk}% \nМетод який виводить текст: getText('текст') \nМетод перезаправляє маркер - addToMarkerInk()`
);

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
// Створив клас Employee
class Employee {
  constructor(firstName, lastName, ageEmploye, experience, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ageEmploye = ageEmploye;
    this.experience = experience;
    this.salary = salary;
  }
}
// Масив працівників Employee
let bankEmployees = [
  new Employee('Yaremiy', 'Nazar', 20, 0.5, 15_000),
  new Employee('Andrei', 'Vlurh', 32, 5, 10_000),
];
// Клас з таблицею працівників
class EmpTable {
  constructor(arrayEmployees) {
    this.arrayEmployees = arrayEmployees;
  }
  // метод який виводить таблицю з працівниками
  getHtml() {
    console.log(`Прізвище \tІм\`я \tВік \tДосвід \tЗарплата`);
    for (let i = 0; i < this.arrayEmployees.length; i++) {
      console.log(
        `${this.arrayEmployees[i].firstName}| \t${this.arrayEmployees[i].lastName}| \t${this.arrayEmployees[i].ageEmploye}р.| \t${this.arrayEmployees[i].experience}р.| \t${this.arrayEmployees[i].salary}грн`
      );
    }
  }
}

let tableEmployee = new EmpTable(bankEmployees);
console.log(`Клас Employee`);
tableEmployee.getHtml();
