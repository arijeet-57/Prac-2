#include <iostream>

using namespace std;

struct Array {
    int A[10];
    int length,size;
};

void display(Array arr)
{
    for(int i =0;i<arr.length;i++){
        cout<<arr.A[i]<<" ";
    };
};

void swap(int *x, int *y){
    int temp = *x;
    *x=*y;
    *y=temp;
};

void insertSort(Array *arr, int key){
    int i = arr->length-1;
    while(arr->A[i]>key){
        arr->A[i+1]=arr->A[i]; 
        i--;  //i will reduce with each iteration
    };
    arr->A[i+1]=key;  //assigning the i+i=key
    arr->length++; //incresing the array size after adding an element
};

void insertionForLoop(Array *arr, int key){ //same insertion logic but with for loop
    int i;
    for(i=arr->length-1;arr->A[i]>key;i--){
        arr->A[i+1]=arr->A[i];  
    };
    arr->A[i+1]=key;
    arr->length++;
};

void sortCheck(Array arr){  //we can use bool here too
    for(int i=0;i<arr.length-1;i++){
        if(arr.A[i]>arr.A[i+1]){
            cout<<"false";
            return;
        };
    };cout<<"true";
};

void shifting(Array *arr){ //separating neggative and positive elements
    int i = 0;
    int j = arr->length-1;
    while(i<j)
    {
        while(arr->A[i]<0) i++; //if i is negative then skip, only hold positive
        while(arr->A[j]>0) j--; //if j is positive then skip, only hold negative
        if(i<j)swap(&arr->A[i],&arr->A[j]);  //
    };  
};

int main() {
    Array arr1 ={{1,2,-4,-5,7,-9,10},7,10};

    //  insertionForLoop(&arr1, 8);

    //  display(arr1);

    shifting(&arr1);
    display(arr1);
};