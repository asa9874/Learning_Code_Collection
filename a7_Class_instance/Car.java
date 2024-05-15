package a7_Class_instance;

public class Car {

    final int people=4;
    static final int tire_num=4;
    String name;
    
    Car(String name){
        this.name=name;
    }
    void setName(String name) {
        this.name = name;
    }
}

class Car2 {
    private static Car2 singleton = new Car2();
    
    private Car2(){
    }

    static Car2 getInstance(){
        return singleton;
    }
}