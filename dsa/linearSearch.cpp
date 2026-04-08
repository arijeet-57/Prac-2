#include <iostream>

using namespace std;

struct Array {
    int A[10];
    int size, length;
};
void display(Array arr){
    cout<<"The array is : ";
    for(int i =0;i <arr.length;i++)
        cout<<arr.A[i]<< " ";
}

void swap(int *x, int *y) {  //this function is for swapping two elements, note how we took pointer as we want it to change in the real array
    int temp; //temp variable
    temp = *x;
    *x=*y;
    *y=temp;
}

// int linearSearch(Array arr, int key) { //here we are not taking pointer because we only need to search and do not need to manipulate any value in the array
//     for(int i=0;i<arr.length;i++)   
//         if(key == arr.A[i]) //if the key matches the element in the array
//             return i;   //it will return the index
//     return -1; //else it will return wrong index
// }   

int transpositionLinearSearch(Array *arr, int key) { //here we are taking pointer because we will use the address of the original array an manipulate the array by shifting the elements
    int i;
    for(i=0;i<arr->length;i++)   
        if(key == arr->A[i]) { //if the key matches the element in the array
            swap(&arr->A[i], &arr->A[i-1]);
            return i-1;   
        }//it will return the index
    return -1; //else it will return wrong index
}   

int main() {

    Array arr1 = {{1,2,3,4,5}, 5, 5};
    
    cout << transpositionLinearSearch(&arr1, 5) << endl; //transpostion will happen  only once per function call, so to see it move, we need to call it multiple times
    display(arr1);
    cout << endl;

    cout << transpositionLinearSearch(&arr1, 5) << endl; //transpostion will happen  only once per function call, so to see it move, we need to call it multiple times
    display(arr1);
    cout << endl;

    cout << transpositionLinearSearch(&arr1, 5) << endl; //transpostion will happen  only once per function call, so to see it move, we need to call it multiple times
    display(arr1);
    cout << endl;

    cout << transpositionLinearSearch(&arr1, 5) << endl; //transpostion will happen  only once per function call, so to see it move, we need to call it multiple times
    display(arr1);
    cout << endl;

    cout << transpositionLinearSearch(&arr1, 5) << endl; //transpostion will happen  only once per function call, so to see it move, we need to call it multiple times
    display(arr1);
    cout << endl;

    cout << transpositionLinearSearch(&arr1, 5) << endl; //transpostion will happen  only once per function call, so to see it move, we need to call it multiple times
    display(arr1);
    cout << endl;

    return 0;
}