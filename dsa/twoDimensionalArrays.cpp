#include <iostream>

using namespace std;
 
int main() {
        int A[3][4]= {{1,2,3,4}, {1,2,3,4}, {2,4,6,7}};

        for(int i=0;i<3;i++) {
            cout<<endl;
            for(int j=0;j<4;j++) {
                cout<<A[i][j]; 
            }
        }
        
        return 0;
   };
