#include <iostream>
#include <stdio.h>
void increment(int& num) {
    num++; // 참조자를 통해 원본 변수 값을 직접 수정
}

int main() {
    int value = 10;   // 원본 변수
    int& ref = value; // 참조자 ref가 value를 참조

    std::cout << "변경 전 값: " << value << std::endl;

    increment(value); // value의 참조자를 함수에 전달

    std::cout << "변경 후 값: " << value << std::endl;

}

