
/*
Let suppose we have K count in n number so we can write like that 

10^k-1 <= n < 10^k
Taking both side log

k-1 <= logn < k
Adding both side +1 
k <= logn + 1 <k+1

i.e. k = floor(log10n + 1); 

K = floor(log10(N) + 1)
*/

const countDigitOfNumber = (n)=> {
    return Math.floor(Math.log10(n))+1;
}
console.log(countDigitOfNumber(72));
console.log(countDigitOfNumber(22232));

// Second Approch 
const countDigitOfNumber2 = (n)=> {
    let digiCount = 0;
    while(n!=0) {
        n = Math.floor(n/10);
        digiCount++;
    }
    return digiCount;
}

console.log(countDigitOfNumber2(102));