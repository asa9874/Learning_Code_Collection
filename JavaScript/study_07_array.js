
var arr=[1,2,3, ,4];
document.write(arr+"<br>")
document.write(arr[1]+"<br>");
document.write(arr[3]+"<br>");
arr[3]=9;
document.write(arr[3]+"<br>"+"<br>"+"<br>");



var arr2= new Array(1,2,3);
document.write(typeof(arr2)+"<br>");
document.write(Array.isArray(arr2)+"<br>");



var arr3={"고기":"맛있다","두번째":"bb"}

document.write(arr3["고기"]+"<br>")
document.write(arr3.두번째+"<br>"+"<br>")


var arr4=[[1,2,3],[4,5,6]]
document.write(arr4[1][1])
    
