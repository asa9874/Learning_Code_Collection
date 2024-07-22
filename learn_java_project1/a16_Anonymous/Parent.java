package a16_Anonymous;

public class Parent {
    void method(){}
}


//일반상속
class Child extends Parent{
    @Override
    void method() {}

}


class ClassA{
    Parent parent = new Child();
}


//익명
class ClassB{
    //필드선언
    Parent parent = new Parent(){
        void newmethod(){}
        
        @Override
        void method(){}

    };
    void method4(){
        //parent.newmethod();
        parent.method();
    }
    






    //로컬
    void method1(){
        Parent parent1= new Parent(){
            @Override
            void method(){}
        };
    }


    //매개변수
    void method2(Parent parent1){}

    void method3(){
        method2(new Parent(){
            @Override
            void method(){}
        }   
        );
    }

}