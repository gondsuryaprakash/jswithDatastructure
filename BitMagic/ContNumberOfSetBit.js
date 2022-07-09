/*
Problem count set Bit in a number 
n =5 
0101  Set Bit is 2
n =13
01101 Set Bit is 3 
*/
function countSetBit(n) {
    let count = 0 
    while(n!=0) {
        if (n&1==1) {
            count++
        }
        n=n>>1
    }
    return count
}


console.log(countSetBit(5));  //2
console.log(countSetBit(13));  //3

