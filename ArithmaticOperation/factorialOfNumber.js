
// Recursive Approach
function factorial(n) {
    if(n == 0 || n ==1) {
        return 1
    }
    return n* factorial(n-1); 
}
console.log(factorial(4));

// Iterative Approach 
function factorialIterative(n) {
    var factorial = 1; 
    for(var i = 2; i<=n; i++) {
        factorial*= i;
    }
    return factorial;
}

console.log(factorialIterative(4));


// Trailing Zero in factorial : 
function getTraillingZeroInFactorial(n) {
    res = 0 
    for(var i=5; i<=n; i= i*5) {
        res = res + Math.floor(n/i);
    }
    return res
}
console.log(getTraillingZeroInFactorial(251));