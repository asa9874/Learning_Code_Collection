package a17_Exception;

public class a17 {
    public static void main(String[] args){
        //String data= null;
        //System.out.println(data.toString());

        //int[] a={1,2};
        //a[3]=0;

        //String a="a11";
        //System.out.println(Integer.parseInt(a));

        Parent parent = new Parent();
        Child child = (Child) parent;
    }
}


class Parent{}

class Child extends Parent{}