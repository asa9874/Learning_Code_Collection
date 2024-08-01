#include <iostream>

int main() {
    int* p = new int; // 단일 정수형 메모리 할당
    *p = 5; // 할당된 메모리 공간에 값 저장

    std::cout << "p의 값: " << *p << std::endl;

    delete p; // 메모리 해제


    int* arr = new int[5]; // 정수형 배열 메모리 할당

    for (int i = 0; i < 5; ++i) {
        arr[i] = i * 10; // 배열에 값 저장
    }

    for (int i = 0; i < 5; ++i) {
        std::cout << arr[i] << " "; // 배열 출력
    }
    std::cout << std::endl;
    delete[] arr;
    return 0;
}