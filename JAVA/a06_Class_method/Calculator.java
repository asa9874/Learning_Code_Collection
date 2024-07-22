package a06_Class_method;

public class Calculator {
    int plus(int a, int b){
        return a+b;
    }

    double plus(double a, double b){
        return a+b;
    }

    int sumarry(int[] a){
        int sum=0;
        for(int i=0;i<a.length;i++){
            sum+=i;
        }
        return sum;
    }
}
