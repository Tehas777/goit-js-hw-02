/* Виконай задачу 3: перевірка спаму

У task-3.js доповни функцію checkForSpam(message). 
Вона має знаходити слова spam або sale незалежно від регістру літер.



Приведи message до одного регістру методом toLowerCase().
Перевір методом includes(), чи містить оновлений рядок "spam".
Так само перевір наявність "sale".
Об’єднай обидві перевірки логічним оператором «АБО».
Поверни результат перевірки — true або false.
Додай сім викликів console.log з ТЗ і залиш їх для ментора.


Не порівнюй окремо всі можливі варіанти регістру. Спочатку нормалізуй весь рядок.
 */
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes(`spam`) || lowerMessage.includes(`sale`)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
