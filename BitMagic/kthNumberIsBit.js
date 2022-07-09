/*
Problem : Find Kth bit is set or not 
*/

// Method 1 Left Shift: 
function isKthBitIsSet(n,k) {
    return ((n&(1<<(k-1))) !== 0)
}
console.log(isKthBitIsSet(5,3)); 
/*
Explaination Method 1: 
Let n =5, k = 3 

5 = 000101
1<< 2 = 000100
Now doing And 
000101
000100
------
000100 ----> Return true 

let k =2
1<<1 = 0000010 
Now doing And 
000101
000010
------
000000  ---> 0 Return False 
*/


// Method 2 Right Shift 

function isKthBitIsSetByRightShift(n,k) {
    return ((n >> (k-1) & 1) === 1) 
}
console.log(isKthBitIsSetByRightShift(10,3));

/*
Explaination Method 2:
Let n = 10 
k = 3
n = 0000...1010 (32 bit)
n>>k-1 = 0000...10 (Add two 0 in right)

Now doing And 
0000....10
0000....01
-----------
0000....00  ---> Return False

Let k =4 
n>> k -1 = 0000....01

Now doing And
0000....01
0000....01
----------
0000....01 ---> 1 ---> return true
*/