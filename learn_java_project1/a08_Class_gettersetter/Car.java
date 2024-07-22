package a08_Class_gettersetter;

public class Car {
    private int speed;
    public int getSpeed(){
        return speed;
    }

    public void setSpeed(int speed){
        if(speed>0){
            this.speed=speed;
        }
    }
}
