package a14_NestedClass2;

public class ClassA {
    int a;
    static int b;
    
    //인스턴스 멤버클래스
    class ClassB{
        void method(){
            ClassA.this.a=1;
            a=1;
            b=1;
        }
    }
    //정적멤버 클래스
    static class ClassC{
        void method(){
            //a=1;
            b=1;
        }
    }

    //인스턴스 필드에서 둘다 가능
    ClassB b1= new ClassB();
    ClassC c1= new ClassC();

    //인스턴스 메소드에서 둘다 가능
    void method(){
        ClassB b2= new ClassB();
        ClassC c3= new ClassC();
    }

    //static 에서 인스턴스 맴버 클래스 사용불가
    //static ClassB b3= new ClassB();
    static ClassC c3= new ClassC();

    static void method2(){
        //ClassB b4= new ClassB();
        ClassC c4= new ClassC();
    }


}
