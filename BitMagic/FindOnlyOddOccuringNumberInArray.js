/*
Problem : Find Odd Occurance in Array 
Arr = [2,3,2,4,4,4,2,2,4]
2 : 4
4 : 4
3 : 1
O/p = 3
*/

function getOddElentInArr(arr) {
    var res = 0
    for (var i=0;i<arr.length;i++) {
        res = res^arr[i]
    }
    return res;
}

var arr =  [2,3,2,4,4,4,2,2,4,1]

console.log(getOddElentInArr(arr));