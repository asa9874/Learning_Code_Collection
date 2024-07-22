package a16_Anonymous;

public interface RemoteControl {
    void TurnOn();
}

//일반
class TV implements RemoteControl{
    @Override
    public void TurnOn() {}
}


class ClassA{
    RemoteControl remote= new RemoteControl() {
        @Override
        public void TurnOn() {}
    };
}