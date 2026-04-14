#include <iostream>

using namespace std;

struct Array {
    int A[10];
    int size, length;
};

void display(Array arr){
    for(int i =0; i<arr.length;i++){
        cout<<arr.A[i]<< " ";
    };
};

void swap(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y = temp;
};

void reverseArray(Array *arr){
    
    //we will take an empty array for the reversal here
    int *B = new int[arr->length];
    int i,j;
    for(i=arr->length-1,j=0;i>=0;i--,j++){
        B[j] = arr->A[i];   
    };
    for(i =0;i<arr->length;i++){
        arr->A[i]=B[i];
    };
    delete[] B; //need to free the memory to prevent memory leak
};

void reverseArray2(Array *arr){
    //here we will be swapping the elements with their places inside the array, without needing a second empty array
    for(int i=0,j=arr->length-1;i<j;i++,j--){
        swap(&arr->A[i], &arr->A[j]);
    };
};

int main () {

    Array arr1 =  {{1,2,3,4,5,6,7,8,9,10},10,10};

    reverseArray2(&arr1);

    display(arr1); //not using cout here 

}