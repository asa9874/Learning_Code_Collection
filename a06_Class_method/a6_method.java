package a6_Class_method;

public class a6_method {
    public static void main(String[] args){
        Calculator cal= new Calculator();
        System.out.println(cal.plus(1,2));
        System.out.println(cal.plus(1.0,2.0));
        int[] value1={1,2,3,4,5};
        System.out.println(cal.sumarry(value1));
    }

}
