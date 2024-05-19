package a14_NestedClass2;

public class Outter {
    public void method2(int arg){
        int Localval=1;
        //arg=100;
        //Localval=100;
        class Inner{
            public void method(){
                int result = arg + Localval;
            }
        }
    }

}
