#include <iostream>
#include <stdio.h>


int main() {
    int numbers[5] = {1, 2, 3, 4, 5}; // 크기가 5인 정수형 배열 선언 및 초기화
    int numbers2[5] = {1, 2}; // 나머지 요소는 0으로 자동 초기화
    int matrix[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
    for (int i = 0; i < 5; ++i) {
        std::cout << numbers[i] << " "; // 배열의 각 요소 출력
    }
    std::cout << std::endl;

    int numbers3[] = {10, 20, 30, 40};
    int* ptr = numbers3; // 배열의 첫 번째 요소를 가리키는 포인터

    for (int i = 0; i < 4; ++i) {
        std::cout << *(ptr + i) << " "; // 포인터를 사용하여 배열 요소에 접근
    }
}