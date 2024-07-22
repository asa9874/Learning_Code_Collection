public class a5_arr {
    public static void main(String[] args){
        int[] intarray;
        int intarray2;
        

        //intarray={1,2,3} 에러발생함
        intarray= new int[] {1,2,3};

        int[] intarray3=new int[5];
        intarray3[0]=1;
        System.out.println(intarray3[0]);

        int[][] intarray4= new int[3][4];


        String[] strArray= new String[3];
        strArray[0]="hi";
        strArray[1]="hi";
        strArray[2]= new String("hi");
        System.out.println(strArray[0]==strArray[1]);
        System.out.println(strArray[0]==strArray[2]);
    }
}
