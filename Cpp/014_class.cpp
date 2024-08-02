#include <iostream>

class Car {
private:
    std::string model;
    int year;

public:
    // 생성자
    Car(std::string m, int y) : model(m), year(y) {}

    // 공용 멤버 함수
    void display() const {
        std::cout << "Model: " << model << ", Year: " << year << std::endl;
    }
};

class Sample {
public:
    // 생성자
    Sample() {
        std::cout << "Constructor called" << std::endl;
    }

    // 소멸자
    ~Sample() {
        std::cout << "Destructor called" << std::endl;
    }
};


int main() {
    // 객체 생성
    Car myCar("Toyota Camry", 2021);

    // 메서드 호출
    myCar.display();

    return 0;
}