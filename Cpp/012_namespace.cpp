#include <iostream>

// 네임스페이스 정의
namespace MyNamespace {
    int value = 42;

    void print() {
        std::cout << "Value: " << value << std::endl;
    }
}

using namespace MyNamespace;

int main() {
    print(); // MyNamespace::print() 호출
    std::cout << "Value: " << value << std::endl; // MyNamespace::value 접근
    return 0;
}