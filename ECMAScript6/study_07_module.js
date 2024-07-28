export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}



import { add, subtract } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2