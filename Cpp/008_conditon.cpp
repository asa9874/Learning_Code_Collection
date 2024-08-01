#include <iostream>


int main(){
    int number = 10;

    if (number > 0) {
        std::cout << "number는 양수입니다." << std::endl;
    }
    else if (number < 0) {
        std::cout << "number는 음수입니다." << std::endl;
    }
    else {
        std::cout << "number는 0입니다." << std::endl;
    }
    char grade = 'B';

    switch (grade) {
        case 'A':
            std::cout << "우수" << std::endl;
            break;
        case 'B':
            std::cout << "좋음" << std::endl;
            break;
        case 'C':
            std::cout << "보통" << std::endl;
            break;
        case 'D':
            std::cout << "미흡" << std::endl;
            break;
        case 'F':
            std::cout << "낙제" << std::endl;
            break;
        default:
            std::cout << "잘못된 성적" << std::endl;
            break;
    }
}