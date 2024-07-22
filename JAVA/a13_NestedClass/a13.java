package a13_NestedClass;

public class a13 {
    public static void main(String[] args){
        ClassA a1 = new ClassA();
        ClassA.ClassB b1= a1.new ClassB();
        b1.methodA();


        ClassA.ClassC c1= new ClassA.ClassC();
        ClassA.ClassC.methodB();
        c1.methodA();
        
        ClassA a2 = new ClassA();
        a2.method();

    }
}
