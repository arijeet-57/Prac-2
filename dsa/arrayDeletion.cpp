#include <iostream>

using namespace std;

struct Array {
    int A[10];
    int size;
    int length;
};

void display(Array arr) {
    cout<<"This is the array: "<<endl;
    for(int i =0;i<arr.length;i++)
        cout<<arr.A[i]<<" ";
};

int deleteElement(Array *arr, int index) {   //the function type is int because we need return index and the eleemnt which is an integer

    int x=0; //this will store the value of the element from the specific index,currently it is 0
    //first we wil check if the index is within the range or not (validity of the index)
    if(index>=0 && index<arr->length)
    {
        x = arr->A[index]; //storing the element to delete before the shifting starts to not lose it
        for(int i=index;i<arr->length-1;i++) //for loop which will start from the index and will iterate till length-1
            arr->A[i]=arr->A[i+1]; //this will copy the element on the i from the i+i
        arr->length--;
        return x; //this returns the deleted element
    }
    return 0; //returns 0 if the index given in invalid
}

int main () {
    Array arr1 = {{1,2,3,4,5},10,5};

    cout<<" \n"<<deleteElement(&arr1, 1);

    display(arr1);
}