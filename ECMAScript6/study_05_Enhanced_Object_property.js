let x = 1, y = 2;

// ES5
var obj = {
    x: x,
    y: y
};

// ES6
const obj = { x, y };


let i = 0;

// ES5
obj2[++i] = i;
obj2[++i] = i;
obj2[++i] = i;

// ES6
const obj1 ={
    [`${++i}`]:i,
    [`${++i}`]:i,
    [`${++i}`]:i,
}

var obj4 = {
    // ES5
    sayHi: function() {
        console.log('Hi! ');
    },
    // ES6
    sayHi2() {
        console.log('Hi! ');
    }

};





