public class a3_for {
    public static void main(String[] args){
        for(int i=1;i<10;i++){
            //2일때 반복문 조건식으로 이동
            if(i==2){continue;}

            System.out.println(i);
            //5일때 탈출
            if(i==5){break;}
        }
    }
}
