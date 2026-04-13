#include <iostream>

using namespace std;

struct Array {
    int A[10];
    int size, length;
};

//displaying the element
void display(Array arr) {
    for(int i=0;i<arr.length;i++) {
        cout<<arr.A[i]<< " ";
    };
};

//getting an element
int getElement(Array arr, int index) {  //get a specific element from an index of the array

    if(index >=0 &&  index <= arr.length){
        return arr.A[index];
    };
    return -1;
};

//setting an element
int setElement(Array *arr, int index, int x) {  //set an element to a specific index in the array
    if(index >=0 && index <=arr->length) { //note how i have used pointer as we need to manipulate the data in the main array 
        arr->A[index] = x;
    };
    return -1;
};

//sumof all elements in an array of integers
int sumOfArray(Array arr) {
    int sum = 0;
    for(int i=0; i<=arr.length-1;i++){ //-1 becasue we need to go till the last element not the last index
        sum = sum + arr.A[i];  // sum+=arr.A[i] this is the alternative syntax
    };
    return sum;
}

int max(Array arr){
    int max = arr.A[0]; //starting from the first index
    for(int i =1;i<=arr.length;i++) //starting from index 1
    {
        if(arr.A[i]>max){
            max = arr.A[i];
        };
    };return max;
}

int min(Array arr){
    int min = arr.A[0]; //starting from the first index
    for(int i=1;i<=arr.length;i++){
        if(arr.A[i]<min){
            min = arr.A[i];
        };
    };return min;
}

float averageOfElements(Array arr)  {
    return (float)sumOfArray(arr)/arr.length; //need to pass the array and change it explicitly to float 
}
  
int main () {

    Array arr1 = {{1,2,3,4,5,6,7,8,9,10}, 10,10};

    // setElement(&arr1, 1, 6);

    // cout<<sumOfArray(arr1);
    // display(arr1);
    // cout<<max(arr1);
    // cout<<min(arr1);
    cout<<averageOfElements(arr1);

}