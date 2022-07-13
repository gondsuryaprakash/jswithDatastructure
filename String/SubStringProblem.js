/*
Function to check string is subsequence or not 
*/

// Iterative Aprroach 
function isSubSequence(str, subStr) {
    var j = 0;
    var i =0;
    while(i < str.length && j < subStr.length) {
        if(str[i]==subStr[j]) {
            i++
            j++
        } else if (str[i]!= subStr[j]) {
            i++
        } 
    }
    if(j == subStr.length) {
        return true
    }
    return false
}
 
var str = "ABCD" 
var subStr = "AD"

// console.log(isSubSequence(str, subStr));


// Recursive Approach 


function checkStringIsSubSequence(str, subStr,m,n) {
    // Base case 

    if(n==0) {
        return true
    }
    if (m==0) {
        return false
    }
    if (str[m-1]==subStr[n-1]) {
        return checkStringIsSubSequence(str, subStr, m-1, n-1)
    }
    return checkStringIsSubSequence(str, subStr, m-1, n)
}


var str = "ABCD" 
var subStr = "ADC"

console.log(checkStringIsSubSequence(str, subStr, str.length, subStr.length));
