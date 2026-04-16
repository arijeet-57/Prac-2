#include <iostream>
using namespace std;

struct Array {
    int A[10];
    int size;
    int length;
};

// Display function
void Display(const Array &arr) {
    cout << "\nElements are:\n";
    for (int i = 0; i < arr.length; i++) {
        cout << arr.A[i] << " ";
    }
    cout << endl;
}

// Merge function
Array* Merge(const Array *arr1, const Array *arr2) {
    int i = 0; //index for arr1
    int j = 0; //index for arr2
    int k = 0; //index for arr3 which is the result array

    // Allocate memory using new (C++ way)
    Array *arr3 = new Array; //this will store the merged array

    while (i < arr1->length && j < arr2->length) { //Keep comparing while both arrays still have elements
        if (arr1->A[i] < arr2->A[j]) { //Compare current elements of both arrays and always pick the smaller one
            arr3->A[k++] = arr1->A[i++]; //copy and move forward
        } else { 
            arr3->A[k++] = arr2->A[j++]; //copy and move forward
        } 
    }

    // Copy remaining elements
    while (i < arr1->length) { //If arr2 finishes first Copy all remaining elements of arr1
        arr3->A[k++] = arr1->A[i++];
    }

    while (j < arr2->length) { //If arr1 finishes first Copy all remaining elements of arr2
        arr3->A[k++] = arr2->A[j++];
    }

    arr3->length = arr1->length + arr2->length; //total length of arr3
    return arr3;
}

int main() {
    Array arr1 = {{2, 9, 21, 28, 35}, 10, 5};
    Array arr2 = {{2, 3, 16, 18, 28}, 10, 5};  // FIXED name

    Array *arr3 = Merge(&arr1, &arr2);

    Display(*arr3);

    delete arr3; // free memory

    return 0;
}