
function outfun(){
    var x=10;
    var infun = function() {document.write(x+"<br>")}
    infun()
}
outfun()



function outfun2(){
    var x=10;
    var infun = function() {document.write(x)+"<br>"}
    return infun
}
var inner= outfun2()
inner()




function Createcounter(){
    var count = 0;
    return function(){
        count++
        document.write("<br>"+count)
    }

    return
}
var counter=Createcounter()
var counter2=Createcounter()
counter()
counter()
counter()
counter()
counter()


function Counter(){
    var counter=0;
    this.increase= function(){return ++counter}
    this.decrease= function(){return --counter}
}
counter1= new Counter();
document.write("<br>"+counter1.increase())
document.write("<br>"+counter1.decrease())
document.write("<br>"+counter1.decrease())
document.write("<br>"+counter1.decrease())

