public class a2_switch {
    public static void main(String[] args){
        int a=3;
        //a를 변수로
        switch (a) {
            //1일때
            case 1:
                System.out.println("1");
                break;

            //2일때
            case 2:
                System.out.println("2");
                break;

            //3일때
            case 3:
                System.out.println("3");
                break;

            //그외일때
            default:
                System.out.println("나머지");
                break;
        }
    }
}
