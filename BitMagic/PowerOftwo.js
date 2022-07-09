/*
Check the number is Power of two or not 
/*

100
010
000
*/ 


/*
1 = 01
2 = 10 
3 = 11 
4 = 100
5 = 101
6 = 110
7 = 111
8 = 1000
16 = 10000 
Always setCount is 1 
*/


function isPowerOfTwo(n) {
    if(n==0) {
        return false
    }
    return ((n & (n-1))===0) 
}

console.log("surya",isPowerOfTwo(2));