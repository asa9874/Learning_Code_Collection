package a19_threading;

import a19_threading.MyRunnable.MyThread;

public class a19 {
    public static void main(String[] args) {
        MyRunnable myRunnable = new MyRunnable();
        Thread t1 = new Thread(myRunnable);
        t1.start();  // 스레드 시작
        System.out.println("먼저나가야지~");

        MyThread t2 = new MyThread();
        t2.start();
        System.out.println("먼저나가야지~");
    }
}

    class MyRunnable implements Runnable {
        public void run() {
            try {Thread.sleep(500);} catch(Exception e){}
            System.out.println("Thread is running");
            
    }
    
    static class MyThread extends Thread {
        public void run() {
            try {Thread.sleep(500);} catch (Exception e) {}
            System.out.println("Thread is running");
        }
    }
}