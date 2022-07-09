function Print1ToN(n) {
    if(n==0) {
        return
    }
    Print1ToN(n-1)     
    console.log(n);
}

Print1ToN(10)


/*
Print1ToN(1)      ---> 1
Print1ToN(2)      ---> 2
Print1ToN(3)      ---> 3
Print1ToN(4)
Print1ToN(5)
Print1ToN(6)
Print1ToN(7)
Print1ToN(8)
Print1ToN(9)
Print1ToN(10)     ----> 10
*/