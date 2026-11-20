/* Виконай задачу 1: замовлення дроїдів

У task-1.js оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits). 
Вона має порівняти загальну вартість замовлення з кредитами клієнта
Обчисли загальну вартість замовлення.
Перевір, чи перевищує загальна вартість значення customerCredits.
Якщо коштів недостатньо, поверни "Insufficient funds!".
Інакше поверни шаблонний рядок із кількістю дроїдів і загальною вартістю.
Додай пять викликів console.log з ТЗ і залиш їх для перевірки ментором.


Якщо вартість замовлення дорівнює кредитам клієнта, коштів достатньо. */

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return `Insufficient funds!`;
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!
`;
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
