function PrintNtoOne(n) {
    // Base condition
    if(n==0) {
        return 
    }
    console.log(n)
    PrintNtoOne(n-1)
}

PrintNtoOne(10)

/*               -----

Print1ToN(1)      
                 ----->1
Print1ToN(2)      

Print1ToN(3)      ---> 3
Print1ToN(4)
Print1ToN(5)
Print1ToN(6)
Print1ToN(7)
Print1ToN(8)
                ----->9 
Print1ToN(9)
                ----> 10
Print1ToN(10)     
                 
*/               