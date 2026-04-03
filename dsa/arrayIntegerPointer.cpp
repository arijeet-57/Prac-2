#include <iostream>

using namespace std;

int main() {
    int *A[3]; //declaring an array of integer pointer here
       
    //now initialising the array
    for(int i =0; i<3;i++) {
       A[i] = new int[4];
    }

    //assiginng values to the array 
    A[0][0] = 1;
    A[0][1] = 2;
    A[0][2] = 3;
    A[0][3] = 4;
    A[1][0] = 5;
    A[1][1] = 6;
    A[1][2] = 7;
    A[1][3] = 8;
    A[2][0] = 9;
    A[2][1] = 10;
    A[2][2] = 11;
    A[2][3] = 12;

    for(int i= 0; i<3;i++){
        cout<<endl;
        for(int j = 0;j<4;j++) {
            cout<< A[i][j];
        }
    }
}

