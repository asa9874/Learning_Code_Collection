fun main(){
    print(sum(5));
    print(sum(b=100,a=11));
}

fun sum(a:Int , b:Int=30): Int{
    return a+b;
}