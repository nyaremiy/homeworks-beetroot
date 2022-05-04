// Cтворіть порожній об'єкт cat.
// Додайте властивість name зі значенням "Мурка".
// Додати властивість lags зі значенням 4.
// Додайте властивість color зі значенням "Черепаховий".
// Додайте властивість full name зі значенням "Мурка Філомена Усі-Пусіка".
// Виведіть full name.

const cat = {
  name: 'Мурка',
  lags: 4,
  color: 'Черепаховий',
  'full name': 'Мурка Філомена Усі-Пусіка',
};
console.log(cat['full name']);

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
// Висновок на екран з інформацією про автомобіль.
// Додавання водія, який має право керувати автомобілем.
// Заправка автомобіля.

const car = {
  producer: 'Volkswagen',
  model: 'CC',
  graduationYear: '2008-2017',
  averageSpeed: 150,
  tankVolume: 70,
  tankVolume100: 7,
  driver: null,
  carTank: 45,
};

console.log(
  `Виробник: ${car['producer']}\nМодель: ${car['model']}\nРік випуску: ${
    car['graduationYear']
  }р.\nСередня швидкість: ${
    car['averageSpeed']
  }км/год.\nОбсяг паливного бака: ${
    car['tankVolume']
  }л.\nСередня витрата палива на 100 км.: ${car['tankVolume100']}л.\nВодій: ${
    null || 'немає'
  }\nКількість пального ${car['carTank']}л.`
);
// Водій
const driver = {
  name: 'Andrei',
  driverLicense: true,
};
// Додавання нового водія
car.driver = driver.driverLicense === true ? driver.name : null;

console.log(`Новий водій: ${car.driver}`);
// Запарвка
car.carTank = 70;
console.log(`Нова кількість пального: ${car.carTank}л.`);

// Створіть об'єкт із днями тижня. Ключами в ньому повинні бути номери днів від початку тижня (понеділок - перший і т.д.). Виведіть поточний день тижня на екран.
const day = {
  1: 'понеділок',
  2: 'вівторок',
  3: 'середа',
  4: 'четвер',
  5: "п'ятниця",
  6: 'субота',
  7: 'неділя',
  nameDayToday: function () {
    const dateObj = new Date();
    let indexDay = dateObj.getDay();
    console.log(`Сьогодні: ${this[indexDay]}`);
  },
};

day.nameDayToday();
