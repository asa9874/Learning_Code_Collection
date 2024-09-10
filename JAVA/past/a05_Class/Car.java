package a05_Class;

public class Car {
    String name="슈퍼멋진차";
    int tire_num=4;
}

class Car2{
    String name="기본차";
    int tire_num;
    int people;
    Car2(String name){
        this(name,4,4);
    } 

    Car2(String name, int tire_num){
        this(name,tire_num,4);
    } 

    Car2(String name, int tire_num, int people){
        this.name=name;
        this.tire_num=tire_num;
        this.people=people;
    } 




    

}