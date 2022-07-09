# Recursion 
The Recursion is method where function's call itself. 
 
## Concept Of Recursion Call : 

The Recurcive function must have following 
   - Base condition from where we terminate the function. 
   - Input size must be decreasing. 

## Recurcive function Example 

```
function recurcive(n) {
   if(n==0){
      return
   }
   consol.log(n)
   f(n-1)
}
recurcive(5)    
```

## Tail Recursion 

The tail Recursion is the task is called before function execution. 
Example 
```
// Tail Example. 
function rec(n) {
   // base condition 
   if(n ===something) {
      return 
   }

   //do your job here 
   someTask
   rec(n-1) 
}

function rec(n) {
   // base condition 
   if(n ===something) {
      return 
   }
   // recursive call.
   rec(n-1) 
   //do your job here 
   someTask
}



```
### Advantage of the Tail function 
 - Its take less time 