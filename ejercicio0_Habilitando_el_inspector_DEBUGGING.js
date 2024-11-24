// Implementación de la estructura de datos Stack
export default class Stack {
    constructor() {
      // Usamos un array para almacenar los elementos del stack
      this.items = [];
    }
  
    // Método para agregar un elemento al stack
    push(element) {
      this.items.push(element);
    }
  
    // Método para remover el último elemento del stack
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Método para ver el último elemento sin removerlo
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Método para verificar si el stack está vacío
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método para vaciar el stack
    clear() {
      this.items = [];
    }
  
    // Método para convertir el stack en un array
    toArray() {
      return [...this.items];
    }
  }
  