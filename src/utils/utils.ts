/**
 * Генератор чисел с шагом 21
 * Вариант с замыканием на начальное значение в самовызываемой функции.
 * @returns {Number}
 */
export const generateCode = (function (start = 20) {
  return () => ++start;
}());