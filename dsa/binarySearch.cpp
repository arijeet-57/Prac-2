#include <iostream>

using namespace std;

struct Array {
    int A[10];
    int size, length;
};

void display(Array arr) {
    for(int i=0;i<arr.length;i++){
        cout<<arr.A[i]<<" ";
    };
};

int binarySearch(Array arr, int key) {
    
    int l,h,mid;   
    l =0;
    h = arr.length -1;
    
    while(l<=h){
        mid = (l+h) /2;  //calculating the mid here
        if(key==arr.A[mid]){  //if key matches the mid, the we get it right away
            return mid;
        }
        else if(key<arr.A[mid]){
            h=  mid - 1; //do not return mid-1, we need to update the high value for the next iteration so that it can use that to search in the new left-half
        }else if(key>arr.A[mid]){
            l =  mid +1 ; //do not return mid+1, we need to update the low value for the next iteration so that it can use that to search in the new right-half
        };
    }return -1; //this is when the l>h which is when the element is not found
};

int RecursiveBinarySearch(int a[],int l,int h,int key){
    int mid  = 0; //initialised mid as 0
    if(l<=h){ //while low is less than or equal to high ...
        mid=(l+h)/2;    //we calculate mid
        if(key == a[mid]){ //if key matches the mid, return it 
            return mid; 
        }else if(key < a[mid]) { //if key is less than that of mid, then we  return the function again but with the new high which is one less that the mid
            return RecursiveBinarySearch(a,l,mid-1,key) ;
        }else if(key > a[mid]){  //if the key is more than that of mid, then we return the function again but with the new low which is one more that the mid
            return RecursiveBinarySearch(a,mid+1,h,key);
        }
    }return -1; //if not found then -1
};

int main() {

    Array arr1 = {{1,2,3,4,5,6,7,8,9,10},10,10};

    // cout<<binarySearch(arr1, 9)<<endl;
    cout<<RecursiveBinarySearch(arr1.A,0,arr1.length-1,2)<<endl;

    display(arr1);

    return 0;
}