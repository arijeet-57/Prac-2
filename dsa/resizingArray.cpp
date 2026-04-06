#include <iostream>

using namespace std;

int main () 
{
    int *p = new int[2]; 
    int i;

    p[0]=1; p[1] = 2;

    cout<<"The current array p is: ";
    for(i=0;i<2;i++) {
        cout<<p[i] <<" ";
    }

    int *q = new int[5];

    for(i=0;i<2;i++) {
        q[i]=p[i];
    }
        
    delete[] p;

    p=q;

    q=nullptr;

    p[2]=1;p[3]=1;p[4]=1;

    cout<<"The newer array is: ";
    for(i=0;i<5;i++) {
        cout<<p[i]<< " ";
        cout<<endl;
       }
       
    delete[] p;

    return 0;

}
