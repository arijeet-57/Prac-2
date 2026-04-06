#include <iostream>

using namespace std;

class Array //defining a class for array that would provide a blue print to work on
{
private:  //variables can only be accessed inside the class
    int *A;
    int size;
    int length;

public: //can be accessed from outside the class as well
    Array(int size) {       //initialising tghe instance for defininf the number of max elements to be stored in an array
        this->size = size;
        A = new int[size];
    }

    void create() {   //create fuction to create the array
        cout<<"Enter the number of elements for the array: "<<endl;
        cin>>length;
       
        cout<<"Enter the elements of the array:"<<endl;
        for(int i=0;i<length;i++)
            cin>>A[i];
    }

    void display() { //display ing the array using this function
        for (int i=0;i<length;i++)
            cout<<A[i]<<" ";
    }

    ~Array() { //this is a destructor , this runs automatically when an object is destroyed
        delete[] A;
        cout<<"Destroyed Array"<< endl;
    }


};

int main () {

    Array arr(10); //defining the max number of elements that can be input in this array, arr is an object of the class Array

    arr.create(); //calling the create function using an object
    arr.display(); //calling the display function using the same arr object


    return 0;
}


