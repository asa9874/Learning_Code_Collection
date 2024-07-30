#include <iostream>



int main(){
    std::cout << "Hello, World!" << std::endl;
    std::cout << "숫자: " << 42 << std::endl;

    int number;
    std::cin >> number; 
    std::cout << "입력된 숫자: " << number << std::endl;
    std::cerr << "에러!" << std::endl;
}