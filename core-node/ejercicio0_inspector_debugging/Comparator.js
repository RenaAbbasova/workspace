export default class Comparator {
  /**
   * Constructor.
   * @param {function(a: *, b: *)} [compareFunction] - Permite pasar una función de comparación personalizada.
   * Si no se proporciona una función personalizada, se usará una función predeterminada.
   */
  constructor(compareFunction) {
  // Si no se pasa una función de comparación, usa la función predeterminada definida en `defaultCompareFunction`.
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Función predeterminada de comparación.
   * Se asume que "a" y "b" son números o cadenas de texto.
   * Retorna:
   *  - `0` si "a" y "b" son iguales.
   *  - `-1` si "a" es menor que "b".
   *  - `1` si "a" es mayor que "b".
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0; // Retorna 0 si ambos valores son iguales.
    }

    return a < b ? -1 : 1; // Retorna -1 si "a" es menor; 1 si "a" es mayor.
  }

  /**
   * Verifica si dos valores son iguales.
   * @param {*} a
   * @param {*} b
   * @return {boolean} - Retorna `true` si "a" y "b" son iguales.
   */
  equal(a, b) {
    // Compara los valores usando la función de comparación.
    return this.compare(a, b) === 0;
  }

  /**
   * Verifica si "a" es menor que "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean} - Retorna `true` si "a" es menor que "b".
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0; // Verifica si el resultado de la comparación es menor que 0.
  }

  /**
   * Verifica si "a" es mayor que "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean} - Retorna `true` si "a" es mayor que "b".
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0; // Verifica si el resultado de la comparación es mayor que 0.
  }

  /**
   * Verifica si "a" es menor o igual que "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean} - Retorna `true` si "a" es menor o igual que "b".
   */
  lessThanOrEqual(a, b) {
    // Combina las condiciones de "lessThan" y "equal".
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Verifica si "a" es mayor o igual que "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean} - Retorna `true` si "a" es mayor o igual que "b".
   */
  greaterThanOrEqual(a, b) {
    // Combina las condiciones de "greaterThan" y "equal".
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * Invierte el orden de comparación.
   * Esto es útil si quieres cambiar la lógica de "mayor que" a "menor que" o viceversa.
   */
  reverse() {
    const compareOriginal = this.compare; // Guarda la función de comparación actual.
    // Cambia la función de comparación para invertir el orden de los parámetros.
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
