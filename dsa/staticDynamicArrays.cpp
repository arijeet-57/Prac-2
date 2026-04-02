#include <iostream>

using namespace std;

int main () {
    int A[4]= {1,2,3,4}; //static array 

    //printing the static array
    cout<<"The static array is: ";
    for(int i = 0;i<4;i++)
        cout<<A[i];
        

    int *P= new int[4]; //dynamically allocated array

    //assigning values to the array
    P[0]=0;
    P[1]=1;
    P[2]=2;
    P[3]=3;

    //printing it
    cout<<"The dynamically allocated array is: ";
    for(int i = 0;i<4;i++)
        cout<<P[i];

    return 0;
        

}


