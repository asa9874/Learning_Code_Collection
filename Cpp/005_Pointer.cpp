#include <iostream>
#include <stdio.h>

int main() {
    int value = 42;  // 일반 변수
    int* ptr = &value; // value의 주소를 저장하는 포인터
    std::cout << "포인터가 가리키는 값: " << *ptr << std::endl; 

    int numbers[] = {10, 20, 30, 40};
    int* ptr1 = numbers; // 배열의 첫 번째 요소를 가리키는 포인터

    std::cout << "포인터 연산을 통해 배열 요소 접근:" << std::endl;
    for (int i = 0; i < 4; ++i) {
        std::cout << *(ptr1 + i) << " "; // 포인터 연산으로 배열 요소 접근
    }
    std::cout << std::endl;
}