function findMissingNumber(arr,n) {
    res = 0 
    for(var i=1;i<n;i++) {
        res= i^arr[i]
    }
    console.log(res);
}

var arr = [6,1,2,8,3,4,7,10,5]
findMissingNumber(arr, 10)

