package a12_Interface;

public class Myclass {
    RemoteCotrol rc;
    Myclass(Television tv){
        tv.Turn_on();
    }
    Myclass(Computer com){
        com.Turn_on();
    }
}
