const mySymbol = Symbol();

const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2); // false

const sym = Symbol('immutable');

// 심볼 값을 변경하려는 시도는 불가능
sym = Symbol('new'); // TypeError: Assignment to constant variable.

const hiddenSymbol = Symbol('hidden');
const obj = {
    [hiddenSymbol]: 'secret',
    visible: 'public'
};

// 기본적인 열거 작업에서 Symbol 속성은 숨겨짐
for (let key in obj) {
    console.log(key); // 'visible'만 출력됨
}