package a18_ExceptionHandling;



public class a18 {
    static void method() throws ArrayIndexOutOfBoundsException{
        int[] b={1};
        b[2]=1;
    }
    public static void main(String[] args){
        
        try {
            method();

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("배열오류");
        } catch(NumberFormatException e){
            System.out.println("숫자변환오류");
        }

        
        finally{
            System.out.println("출력");
        }


    }
}

