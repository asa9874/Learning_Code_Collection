package a10_Polymorphism;

public class a10 {
    public static void main(String[] args){
        Cat cat1= new Cat();
        Animal animal1=cat1;
        System.out.println(cat1==animal1);


        Animal animal2=new Cat();
        Cat cat2= (Cat) animal2;

        System.out.println(animal2 instanceof Cat);

        
    }
}
