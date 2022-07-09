# Bit Magic

### Left Shift 

```
x<<y 
x =2 y =3 
01 --> 01000  (Trailing 0 from left side)
Mathematical : 
After left Shift = x*2^y

```  
### Right Shift 

In Right Shft Operator from right the bit will replace with 0 bit. 

```
x = 33 , y = 2
In Binarary : 0....000100001 // (32 bit)
x>>y =  00......01000 = 8

In MatheMatics: x>>y = floor(x/2^y)



```

### BitWise Not Operator ~ 

Its revert the 0 to 1 and vice versa. 
```
 x = 00....00010 (32 Bits)
 ~x = 11...11101 
 In Mathmatics : For n bit of x number its equivalent to : 2^n -1 - x 

```


### Trick Of Bit 

#### Right Most Bit
```
 x ^ ( x & (x-1)) : Returns the rightmost 1 in binary representation of x.

x = 10 =  1010
x-1 =9 = 1001  

( x & (x-1)) = 1010 & 1001  = 1000

1010 ^ 1000 = 0010    ---> Right Most Bit
```

#### x & (-x) : Returns the rightmost 1 in binary representation of x

```
Let x = 10 = 1010
-x two's complement = 1010' = 0101  
                             +   1
                              0110

x & (-x) = 1010 & 0110 = 0010

```

#### x | (1 << n) : Returns the number x with the nth bit set.
```
Let x = 1010
n =2
1<<n = 00100 
1010 | 0100 = 1110 
```

