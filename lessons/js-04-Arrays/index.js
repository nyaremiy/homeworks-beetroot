// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.

let shoppingList = [];
let newNotBuyProductList = [];
let newBuyProductList = [];
function addProduct(nameP, numberOfProductsP, boughtP, priceP) {
  shoppingList.push({
    name: nameP,
    numberOfProducts: numberOfProductsP,
    bought: boughtP,
    price: priceP,
    suma: function () {
      return (this.numberOfProducts * this.price).toFixed(2);
    },
  });
}

addProduct('Strawberries', 0, false, 12.99);
addProduct('Bread', 0, false, 15.99);
addProduct('Wine', 0, false, 66.99);
addProduct('Ice cream', 0, false, 22.99);
addProduct('Banana', 0, false, 112.99);

console.log(shoppingList);
// Покупка продукту
const buyProduct = (name) => {
  for (let i = 0; i < shoppingList.length; i++) {
    if (name === shoppingList[i].name) {
      shoppingList[i].bought = true;
      console.log(`Товар ${name} придбаний!`);
      shoppingList[i].numberOfProducts++;
      break;
    }
  }
};
buyProduct('Strawberries');
buyProduct('Wine');
buyProduct('Ice cream');

//Список непридбаних продуктів
const notBuyProductList = () => {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].bought === false) {
      newNotBuyProductList.push(shoppingList[i]);
    }
  }
};
notBuyProductList();
//Список придбаних продуктів
const buyProductList = () => {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].bought === true) {
      newBuyProductList.push(shoppingList[i]);
    }
  }
};
buyProductList();

const showShoppingList = () => {
  // Не придбані
  console.log(newNotBuyProductList);
  // Не придбані
  console.log(newBuyProductList);
};
showShoppingList();

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
let newShoppingList = [];
const deleteProduct = (name) => {
  for (let i = 0; i < shoppingList.length; i++) {
    if (name !== shoppingList[i].name) {
      newShoppingList.push(shoppingList[i]);
    }
  }
};
deleteProduct('Bread');
console.log(newShoppingList);

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

const newBuyProduct = (name) => {
  for (let i = 0; i < shoppingList.length; i++) {
    if (name === shoppingList[i].name) {
      shoppingList[i].bought = true;
      shoppingList[i].numberOfProducts++;
      console.log(`Товар ${name} придбаний!`);
      break;
    }
  }
};
newBuyProduct('Strawberries');

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
const sumaAllProducts = () => {
  let suma = 0;
  for (let i = 0; i < shoppingList.length; i++) {
    suma += +shoppingList[i].suma();
  }
  return suma;
};
console.log(`Сума всіх продуктів: ${sumaAllProducts()}`);

// Підрахунок суми всіх (не) придбаних продуктів.
const sumaAllNotBuyProducts = () => {
  let suma = 0;
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].bought === false) {
      suma += +shoppingList[i].price;
    }
  }
  return suma;
};
console.log(`Сума всіх не придбаних продуктів: ${sumaAllNotBuyProducts()}`);
