#include <iostream>

class Example {
private:
    int* data;

public:
    // 생성자
    Example(int value) : data(new int(value)) {
        std::cout << "Constructor called" << std::endl;
    }

    // 복사 생성자
    Example(const Example& other) : data(new int(*other.data)) {
        std::cout << "Copy Constructor called" << std::endl;
    }

    // 대입 연산자
    Example& operator=(const Example& other) {
        if (this != &other) { // 자기 자신에 대한 대입 방지
            delete data; // 기존 데이터 삭제
            data = new int(*other.data); // 새로운 데이터 복사
        }
        std::cout << "Assignment Operator called" << std::endl;
        return *this;
    }

    // 소멸자
    ~Example() {
        delete data;
        std::cout << "Destructor called" << std::endl;
    }

    void print() const {
        std::cout << "Data: " << *data << std::endl;
    }
};

int main() {
    Example obj1(10);
    Example obj2(20);
    obj2 = obj1; // 대입 연산자 호출

    obj1.print();
    obj2.print();

    return 0;
}