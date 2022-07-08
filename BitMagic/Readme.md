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