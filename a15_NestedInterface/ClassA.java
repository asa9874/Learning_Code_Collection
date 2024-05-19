package a15_NestedInterface;

public class ClassA {
    //중첩 인터페이스
    interface Remote{
        void method();
    }
    
    //인터페이스 타입필드
    Remote remote;
    
    //매개변수 다형성
    void method1(Remote remote){}
    
    //구현객체의 메소드 호출
    void method2(Remote remote){remote.method();}
}


//구현클래스
class Tv implements ClassA.Remote{
    @Override
    public void method() {}
}