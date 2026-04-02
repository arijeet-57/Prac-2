#include <iostream>

using namespace std;

int main () {
    int x = 5;
    int *p = &x;

    cout<<"Value of x: " << x <<endl;
    cout<<"Address of x: " << &x << endl;
    cout <<"Value of p: " << p << endl;
    cout << "Value using pointer (*p): " << *p << endl;

    return 0;

}


