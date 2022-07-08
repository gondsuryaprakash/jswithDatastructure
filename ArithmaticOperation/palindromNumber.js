// A palindrome is a number where the reverse of number and number both same .  

const isPalindrome = (n)=> {
    // First change number to its reverse of the number 
    let rev = 0;
    let temp = n; 
    while(temp!=0) {
        rev = rev * 10 + temp%10;
        temp = Math.floor(temp/10);
    }
    return rev === n;
}
console.log(isPalindrome(11111));

/* 
Logic for reverse the Number: 
Ex 123 
rev = 0 
123%10 = 3 
rev = 0*10 + 3 = 3  
n = n/10 = (floor value in JS)
n = 12 
12%10 = 2
rev = 3*10 + 2 =32
n = n/10 = 1 
1%10 = 1 
rev = 32*10 + 1 
321 
Here 321 != 123 return false 
*/