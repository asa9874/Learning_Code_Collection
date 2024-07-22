package a09_Inheritance;

public class a9 {
    public static void main(String[] args){
        super_car car1= new super_car(44,"붕붕이");
        System.out.println(car1.speed);
        System.out.println(car1.name);
        System.out.println(car1.tire_num);

        car1.run();
        car1.run2();
    }

}
