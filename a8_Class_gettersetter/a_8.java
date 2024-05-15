package a8_Class_gettersetter;

public class a_8 {
    public static void main(String[] args){
        Car car1=new Car();
        car1.setSpeed(100);
        System.out.println(car1.getSpeed());
        car1.setSpeed(-1);
        System.out.println(car1.getSpeed());
    }

}
