//Euclid division lemma 

// First method 
function gcd(a,b) {
    while(a!=b) {
        if (a>b) {
            a = a -b 
        } else {
            b = b -a 
        }
    }
    return a 
}

// Second Method 

function gcd2(a,b) {
    if (b ==0) {
        return a 
    }
    return gcd2(b, a%b)
}
