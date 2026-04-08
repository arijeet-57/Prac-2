#include <iostream>

using namespace std;

struct Array {
    int A[10];
    int size, length;
};

void display(Array arr){
    for(int i = 0; i<arr.length;i++)
        cout<<arr.A[i]<<" ";
}

void swap(int *x, int *y) {
    int temp;
    temp = *x;
    *x=*y;
    *y=temp;
}

int moveToHead(Array *arr, int key) {
    for(int i=0;i<arr->length;i++)
        if(key == arr->A[i]){
            swap(&arr-> A[i], &arr->A[0]);  //moving to the first index
            return i;
        }
    return -1;
}

int main () {

    Array arr1 = {{1,2,3,4,5}, 5,5};

    moveToHead(&arr1, 4 );
    display(arr1);

    moveToHead(&arr1, 3 );
    display(arr1);


    moveToHead(&arr1, 2 );
    display(arr1);


    moveToHead(&arr1, 5 );
    display(arr1);


    return 0;
}   