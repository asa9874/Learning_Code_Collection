function sum(x,y){
    x=x||0;
    y=y||0;
    return x+y;
}

//ES6
function sum2(x=0,y=0){
    return x+y;
}

function sum3(...rest){
    let sum=0;
    for(let i=0;i<rest.length;i++){sum+=rest[i]};
    return sum;
}

console.log(sum3(1,3,6,4));
//14

function sum4(a,b,c){console.log(a+b+c);}

sum4(...[3,4,5])

//12