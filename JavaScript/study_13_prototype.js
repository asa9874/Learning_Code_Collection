
function student(name,age){
    this.name=name;
    this.age=age;
}
function student2(name,age){
    this.name=name;
    this.age=age;
}


document.write(student.hasOwnProperty('name')+"<br><br><br>")


document.write((student.__proto__ == student2.__proto__)+"<br>")
document.write((student.__proto__==Function.prototype)+"<br>")
document.write((Function.prototype.__proto__==Object.prototype)+"<br>")
document.write((Function.prototype==Function.__proto__)+"<br>")
document.write((Object.prototype.__proto__)+"<br><br><br><br><br>")


function Human(){}
var me=new Human();
document.write((Human.prototype.constructor==Human)+"<br>")
document.write((me.constructor==Human)+"<br>")
document.write((Human.constructor==Function)+"<br>")

