package a07_Class_instance;

public class a7_class {
    public static void main(String[] args){
        Car car1=new Car("방방이");
        car1.setName("빙빙이");
        System.out.println(car1.name); 
        System.out.println(car1.people);       
        System.out.println(Car.tire_num);
        

        Car2 car2=Car2.getInstance();
        Car2 car3=Car2.getInstance();
        System.out.println(car2==car3);




    }
}



