#include <iostream>


void passByValue(int x) {
    x = 10; // 함수 외부의 변수에는 영향이 없음
}
void passByReference(int& x) {
    x = 10; // 함수 외부의 변수에도 영향이 있음
}
void passByPointer(int* x) {
    *x = 10; // 함수 외부의 변수에도 영향이 있음
}

// 두 정수를 더하는 함수
int add(int a, int b) {
    return a + b;
}

// 두 실수를 더하는 함수
double add(double a, double b) {
    return a + b;
}

// 기본 매개변수 값을 갖는 함수
void printInfo(const std::string& name, int age = 18) {
    std::cout << "이름: " << name << ", 나이: " << age << std::endl;
}

int main() {
    int a=10;
    passByValue(a);
    passByPointer(&a);
    passByReference(a);
    int result = add(3, 4); // 함수 호출
    std::cout << "3 + 4 = " << result << std::endl;
   
    std::cout << "정수 덧셈: " << add(3, 4) << std::endl;
    std::cout << "실수 덧셈: " << add(3.5, 4.5) << std::endl;

    printInfo("Alice"); // age는 18로 기본 값 사용
    printInfo("Bob", 25); // age는 25로 지정
    return 0;

}