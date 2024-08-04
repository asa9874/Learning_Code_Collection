#include <iostream>
#include <stdexcept>

void functionC() {
    throw std::runtime_error("Error in functionC");
}

void functionB() {
    functionC();
}

void functionA() {
    functionB();
}

int main() {
    try {
        functionA();
    } catch (const std::runtime_error& e) {
        std::cout << "Caught an exception: " << e.what() << std::endl;
    }

    return 0;
}