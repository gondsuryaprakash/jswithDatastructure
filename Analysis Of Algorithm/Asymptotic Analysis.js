/*
 
Analysys of Time Complexity : 

Lets take an example of sum of n number  
*/

/* First Approach :
   Time Complexity : O(1) 
*/
const sum1 = (n)=> {
    const initialTime = new Date();
    const sum =  n*(n+1)/2;
    console.log(`sum1 : = ${sum}`)
    console.log(`Time difference in millisecond : = ${getTimeDifference(initialTime)}`);
    
}

/* Second Approach :
   Time Complexity : O(n) 
*/
const sum2 = (n)=> {
    const initialTime = new Date();
    let sum =0 
    for(var i=1;i<=n; i++) {
        sum +=i;
    }
    console.log(`sum2 : = ${sum}`)
    console.log(`Time difference in millisecond : = ${getTimeDifference(initialTime)}`);
}

/* Third Approach :
   Time Complexity : O(n*n) 
*/

const sum3 = (n) => {
    const initialTime = new Date();
    let sum = 0;
    for(var i=1; i<=n; i++) {
        for(var j=1; j<=i; j++) {
            sum+=1;
        }
    }
    console.log(`sum3 : = ${sum}`)
    console.log(`Time difference in millisecond : = ${getTimeDifference(initialTime)}`);
}


const getTimeDifference= (initialTime)=> {
    var startDate = new Date(initialTime);
    var endDate   = new Date();
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    return seconds;
}

sum1(100000);
sum2(100000);
sum3(100000);


