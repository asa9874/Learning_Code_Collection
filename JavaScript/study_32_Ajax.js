
const o={
    "name":"Park",
    "gender":"male",
    "age":10
}


const strObj= JSON.stringify(o);
document.write(strObj+"<br>")


const o2= JSON.parse(strObj)
document.write(o2.name+"<br>")
document.write(o2.gender+"<br>")
document.write(o2.age+"<br>")

const xhr = new XMLHttpRequest();
