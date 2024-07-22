package a13_NestedClass;

public class ClassA {
    //인스턴스 맴버 클래스
    class ClassB{
        public void methodA(){
            System.out.println("A");
        }
    }
    
    //정적 맴버 클래스
    static class ClassC{
        public void methodA(){
            System.out.println("A");
        }
        public static void methodB(){
            System.out.println("B");
        }
    }

    //로컬클래스
    void method(){
        class ClassD{
            public void methodA(){
                System.out.println("A");
            }
        }
        ClassD d1 = new ClassD();
        d1.methodA();
    }

}
