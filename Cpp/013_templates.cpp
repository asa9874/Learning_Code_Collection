#include <iostream>

// 함수 템플릿 정의
template <typename T>
T max(T a, T b)
{
    return (a > b) ? a : b;
}

template <typename T>
class Box
{
private:
    T value;

public:
    Box(T v) : value(v) {}

    T getValue() const
    {
        return value;
    }

    void setValue(T v)
    {
        value = v;
    }
};

int main()
{
    std::cout << "Max of 5 and 10 is " << max(5, 10) << std::endl;           // int
    std::cout << "Max of 3.14 and 2.71 is " << max(3.14, 2.71) << std::endl; // double
    std::cout << "Max of 'a' and 'b' is " << max('a', 'b') << std::endl;     // char

    Box<int> intBox(123);
    Box<double> doubleBox(45.67);

    std::cout << "Int Box contains: " << intBox.getValue() << std::endl;
    std::cout << "Double Box contains: " << doubleBox.getValue() << std::endl;
    return 0;
}