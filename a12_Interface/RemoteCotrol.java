package a12_Interface;

public interface RemoteCotrol {
    public int Max_VOLUME=10;
    public int Min_VOLUME=0;

    public void Turn_on();
    public void Turn_off();
}

interface Internet{
    public void connect_internet();
}

class Television implements RemoteCotrol,Internet{
    @Override
    public void Turn_on() {
        System.out.println("TV ON");
    }

    public void Turn_off(){
        System.out.println("TV OFF");
    }
    public void connect_internet(){
        System.out.println("INTERNET CONNECTED");
    }
}


class Computer implements RemoteCotrol,Internet{
    @Override
    public void Turn_on() {
        System.out.println("Computer ON");
    }

    public void Turn_off(){
        System.out.println("Computer OFF");
    }
    public void connect_internet(){
        System.out.println("INTERNET CONNECTED");
    }
}


