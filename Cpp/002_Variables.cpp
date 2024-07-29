#include <iostream>
#include <stdio.h>


int main() {
    extern int globalVar;
    int a = 5;       // 값 초기화
    int b(10);       // 괄호 초기화
    int c{15};       // 중괄호 초기화
    int x = 10;   // 초기화
    x = 20;       // 대입: 변수 x에 20을 할당
}