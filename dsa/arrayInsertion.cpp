#include <iostream>

using namespace std;

struct Array {
    int A[10];
    int size;
    int length;
};

void display(Array arr) {   //this function is for displaying the array (base array)
     cout<<"The elements of the array are: ";
     for(int i=0;i<arr.length;i++)    //here we are using the struct itself so we can use the (.) dot operator
         cout<<arr.A[i]<< " ";
    
};

void append(Array *arr, int x){   //this function will append a new element in the last index of the array, note that here we have used the -> operator, as *arr is pointer to the struct not the struct itself
                                  //
    cout<<"The appended array is : ";
        if(arr->length<arr->size) // here we are checking if the length of the array is less than that of its size
            arr->A[arr->length++]=x;  //here we are saying to put x at the end of the array and then increase the length of the array as a new element has been added//
        for(int i=0;i<arr->length;i++)
            cout<< arr->A[i]<<" "; 
};

void insert(Array *arr,int  index, int x) { //this function will insert an element at a desired index inside the array
        if(index>=0  && index<=arr->length)  //first we check if the array is actually inside the range 
            for(int i = arr->length; i>index;i--)  //we start from the last array length, go towards the index, until the index is smaller than i, we keep deprecating it until it reaches the desired index position
                arr->A[i]=arr->A[i-1]; //assigning the index 
            arr->A[index]=x; 
            arr->length++; //increasing the length of the array
        
        cout<<"The inserted array is: ";
        for(int i=0;i<arr->length;i++)
            cout<<arr->A[i]<<" ";
}



int main()

{
    Array arr1 = {{1,2,3,4}, 6,4};
    append(&arr1, 10);
    insert(&arr1, 1, 11);
    
    return 0;

}

