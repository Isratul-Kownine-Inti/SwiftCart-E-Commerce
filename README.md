#SwiftCart E-Commerce

## Question/Answers

1. What is the difference between null and undefined?

Ans: In JavaScript, when we declare a variable but don't assign any value to it then it shows undefined .It's type also undefined .on the other hand, Null is an object and it is set by developer intentionally when he/she wants to represent an empty value. It is a historical bug in JS.
A developer should never set undefined as a value of a variable instead they can use Null if needed.

2. What is the use of the map() function in JavaScript? How is it different from forEach()?

Ans:map() is a function that is applied for array ,It is basically an array method, It is basically loop through all the array elements , do some specific functionality or operations and returns a new array but the original array doesn’t change, so it is immutable. 

forEach() is  a function that is also applicable for array . It is also loop through all the array elements , do operations  but doesn’t return new array or anything. We can modify the original array through forEach().

3. What is the difference between == and ===?

Ans: (==) equal only checks value ,between to variables, doesn’t check the type, if the values are same , then it returns true , it is less efficient. But (===) checks both values and types. If both are same then returns true ,  if the values are same but types are different then returns false.  

If the values are same , (==) equal implicitly converts the datatype to make it true even if the types are different..It is called type coercion. 

4. What is the significance of async/await in fetching API data?

Ans:  API fetch basically an asynchronous task but we know Javascript works synchronously. async/await basically let the api fetch task perform synchronously. As a result , API calls become easy and maintainable, We can also do error handling using async/await easily . It also prevents us from callback hell which is caused by nested (.then) . 

5. Explain the concept of Scope in JavaScript (Global, Function, Block).

Ans: JavaScript has three types of scopes. 1.Global 2.Function and 3.Block.
Global scope lets to access the variable from everywhere in the code such as Var lets to do this. But function scope lets to access the variable only inside the function. On the other hand, variables can be accessible in block scope within the block.For example, when we use let/const , the variable we can access only within the block after initialization.


