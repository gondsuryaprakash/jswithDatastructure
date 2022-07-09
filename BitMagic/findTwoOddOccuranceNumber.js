function singleNumber(nums){
    //code here
    
    //Get Xor OF number 
    var xor = 0
    for(var i=0;i<nums.length;i++){xor=xor^nums[i]}
    
    console.log(xor)
    
    //Now take res
    
    var res1=0;
    var res2=0;
    var sn= xor&(~(xor-1))
    
     var arr1=[]
     var arr2=[]


    for(var i=0;i<nums.length;i++) {
        if(nums[i] & sn !==0) {
            res1= nums[i]^res1;
            arr1.push(nums[i])

        }
        else {
            res2= nums[i]^res2;
            arr2.push(nums[i])
        }
    }

    console.log(`Arr1 --> ${arr1}`);
    console.log(`Arr2 --> ${arr2}`);
    var sortedArray = []
    if(res1<res2){
        sortedArray.push(res1)
        sortedArray.push(res2)
    }
    else {
        sortedArray.push(res2)
        sortedArray.push(res1)
    }
    console.log(sortedArray);
    return sortedArray
    
  }

singleNumber([7,6, 25, 4 ,25 ,15, 15, 7 ,4 ,3 ,29, 6])
