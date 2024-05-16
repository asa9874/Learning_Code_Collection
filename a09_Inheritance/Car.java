package a9_Inheritance;

public class Car {
    int speed;
    int tire_num=4;
    String name;

    Car(int speed, String name){
        this.speed=speed;
        this.name=name;
    }

    void run(){
        System.out.println("그냥차 달린다.");
    }

}


class super_car extends Car{
    super_car(int speed, String name){
        super(speed,name);
    }

    void run(){
        System.out.println("슈퍼챠 달린다");
    }
    void run2(){
        super.run();
    }
}



