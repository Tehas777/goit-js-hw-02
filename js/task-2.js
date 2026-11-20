/* У task-2.js оголоси функцію formatMessage(message, maxLength). 
Вона має повернути початковий рядок або його скорочену версію.
Доповни функцію так:

Якщо довжина message дорівнює або менша за maxLength, функція повертає початковий рядок без змін.
Якщо довжина перевищує maxLength, функція обрізає рядок до maxLength символів і додає трикрапку "..." в кінці.


Порівняй довжину message з maxLength.
Якщо рядок не довший за дозволену довжину, поверни message без змін.
Якщо рядок довший, отримай перші maxLength символів методом slice().
Додай до скороченого рядка "..." і поверни результат.
Додай шість викликів console.log з ТЗ і залиш їх для ментора.
 */
function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"
