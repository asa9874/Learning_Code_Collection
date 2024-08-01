#include <iostream>

int main() {
    for (int i = 0; i < 5; ++i) {
        std::cout << "i = " << i << std::endl;
    }
    int i = 0;
    while (i < 5) {
        std::cout << "i = " << i << std::endl;
        ++i;
    }

    i = 0;
    do {
        std::cout << "i = " << i << std::endl;
        ++i;
    } while (i < 5);
    return 0;
}