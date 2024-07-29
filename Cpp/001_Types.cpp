#include <stdio.h>
#include <iostream>

int main() {
    bool isEven = (5 % 2 == 0); // 5는 홀수이므로 isEven은 false입니다.

    if (isEven) {
        std::cout << "숫자는 짝수입니다." << std::endl;
    } else {
        std::cout << "숫자는 홀수입니다." << std::endl;
    }


    char letter = 'A'; // 문자 'A'를 저장
    char digit = '1';  // 문자 '1'을 저장

    std::cout << "문자: " << letter << std::endl;
    std::cout << "숫자: " << digit << std::endl;

    int age = 25;  // 정수 25를 저장
    int year = 2024; // 정수 2024를 저장

    std::cout << "나이: " << age << std::endl;
    std::cout << "년도: " << year << std::endl;

    double pi = 3.141592653589793;  // 파이의 값을 저장
    double height = 1.82;           // 신장 값을 저장

    std::cout << "파이: " << pi << std::endl;
    std::cout << "신장: " << height << " 미터" << std::endl;


    const int DAYS_IN_WEEK = 7; // 상수 정의, 변경 불가능

    struct Person {
        std::string name;
        int age;
    };

    class Car {
    private:
        std::string model;
        int year;

    public:
        void setModel(const std::string& m) { model = m; }
    };

    enum Color {
    RED,
    GREEN,
    BLUE
    };
}