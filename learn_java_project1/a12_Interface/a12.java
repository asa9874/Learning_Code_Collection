package a12_Interface;

public class a12 {
    public static void main(String[] args){
        RemoteCotrol remote1;

        remote1= new Television();
        remote1.Turn_on();
        remote1= new Computer();
        remote1.Turn_on();


        Myclass a = new Myclass(new Television());
        Myclass b = new Myclass(new Computer());
    }

}
