fun main(){
    fun1();
}

fun fun1(){
    val a=30;
    var b=20;
    val c:Int =3;
    print(a+b+c);
}


//최상위
//val data1:Int; 오류
//var data3;     오류
val data2=10;
lateinit var data11:String;

//함수내부
fun fun2(){
    val data4:Int;
    //val data5; 오류
    data4=10;
    print(data4);
}

fun fun3(){
    var data1:Int=10;
    data1.plus(100);
}