#include <iostream>

class Base {
public:
    Base() {
        std::cout << "Base Constructor" << std::endl;
    }

    ~Base() {
        std::cout << "Base Destructor" << std::endl;
    }
};

class Derived : public Base {
public:
    Derived() {
        std::cout << "Derived Constructor" << std::endl;
    }

    ~Derived() {
        std::cout << "Derived Destructor" << std::endl;
    }
};

class Base1 {
public:
    virtual void speak() {
        std::cout << "Base class speaking..." << std::endl;
    }

    virtual ~Base1() = default; // 가상 소멸자
};

class Derived1 : public Base1 {
public:
    void speak() override {
        std::cout << "Derived class speaking..." << std::endl;
    }
};


int main() {
    Derived obj;
    Base1* ptr;
    Derived1 d;
    ptr = &d;

    ptr->speak(); // Derived 클래스의 speak() 호출
    return 0;
}