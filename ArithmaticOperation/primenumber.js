// Prime number which is divisible itself and 1 only 

// First method
function isPrime(n) {
    if (n == 1) {
        return false;
    }
    for(var i=2;i<n;i++) {
        if (n%i == 0) {
            return false 
        }
    }
    return true
}
// Second Method 
/*
This method is based on the
x*y <= n
if x*x <=n 
*/

function isPrimeSecondMethod(n) {
// base condition  
 if (n ==1 ) {
    return false
 }
 for(var i=2; i*i<=n; i++) {
    if(n%i == 0) {
        return false
    }
 } 
 return true
}
// Third Method 
function isPrimeThirdMethod(n) {
   if (n==1 || n%2 == 0 || n%3 == 0) {
       return false
   }

   for(var i=5; i*i<n; i=i+6) {
    if(n%i ==0 || n%(i+2)==0 ) {
        return false
    }
   }
   return true

}


// Sieve of Erotesthenes

/*
Problem : Get the Prime number between a specific number 
*/

function getPrimeNumberBetweenANumber(n) {
    var array = new Array(n+1).fill(true);
    for(var i=2; i<=n; i++) {
        if(array[i]) {
            console.log(`Prime Number: ${i}`);
            for(var j=i*i; j<=n; j=j+i) {
                array[j] = false
            }
        }
    }
}
getPrimeNumberBetweenANumber(1000)

// console.log(isPrimeThirdMethod(1231));
// console.log(isPrimeSecondMethod(1231));
// console.log(isPrime(2));