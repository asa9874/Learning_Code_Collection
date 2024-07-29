#include <iostream>
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    int sum = a + b;   // 15
    int diff = a - b;  // 5
    int prod = a * b;  // 50
    int quot = a / b;  // 2
    int mod = a % b;   // 0

    bool isEqual = (a == b);   // false
    bool isNotEqual = (a != b); // true
    bool isLess = (a < b);     // false
    bool isGreater = (a > b);  // true

    bool x = true;
    bool y = false;

    bool andResult = x && y;  // false
    bool orResult = x || y;   // true
    bool notResult = !x;      // false

    int a = 5;  // 0101 
    int b = 3;  // 0011 

    int andResult = a & b;  // 0001 
    int orResult = a | b;   // 0111 
    int xorResult = a ^ b;  // 0110 
    int notResult = ~a;     // 1010 
    int leftShift = a << 1; // 1010 
    int rightShift = a >> 1; // 0010

    int x = 10;
    x += 5; 

    int a = 10;
    int b = 20;
    int max = (a > b) ? a : b; 

    struct Person {
    std::string name;
    int age;
    };

    Person p;
    p.name = "Alice";  // .을 사용하여 객체의 멤버에 접근

    Person* ptr = &p;
    ptr->age = 30;     // ->를 사용하여 포인터를 통해 객체의 멤버에 접근

    int value = 42;
    int* ptr1 = &value; 

    int derefValue = *ptr1; 
    
    int x1 = 5;

    int y = x1++; // 후위 증가: x는 6이 되고 y는 5
    int z = ++x1; // 전위 증가: x는 7이 되고 z는 7
}
