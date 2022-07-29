# Binary Search 
Binary search uses recursion function call 

## Binaray Search Algorithm

```
 fucntion binarySearch(arr, low, high. key ) {
    var mid = low+Math.floor((high-low)/2)
    //Base condition 
    if(arr[mid]==key) {
        return mid
    }

    if (arr[mid]>key) {
        retutn binarySearch(arr, low, mid-1, key)
    }
    retutn binarySearch(arr, mid+1, high, key)
 }

```
