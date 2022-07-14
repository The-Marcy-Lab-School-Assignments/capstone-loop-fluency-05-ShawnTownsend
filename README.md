# Code Challenge Fluency

## Instructions

1. Clone down this assignment to your `code-challenges' directory in AWS Cloud9.  
2. Create a new file in the repo called `index.js` and code your solutions there. 
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit regularly and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Code Problems

### **Test all your solutions for questions 1-3 with the following variable:** 
```jsx
const capstone = "capstone fellows"
```

1. Write a function named `charCount` that takes in a string and returns an object where the keys are letters in the string and the value of each key is a count of how many times the character appears in the string.
    
    ```jsx
    const capstone = "capstone fellows" 
    charCount(capstone) // returns {" ": 1, a: 1, c: 1, e: 2, f: 1, l: 2, n: 1,o: 2, p: 1, s: 2, t: 1, w: 1}
    ```
    
2. Write a function named `letterCount` that takes in a string and returns an object where the keys are letters in the string and the value of each key is a count of how many times the character appears in the string, not including empty spaces. 
    
    ```jsx
    charCount(capstone) // returns {a: 1, c: 1, e: 2, f: 1, l: 2, n: 1,o: 2, p: 1, s: 2, t: 1, w: 1}
    ```
    
3. Write a function named `letterCountRefactor` that has the same input and output as `letterCount` except you cannot use a `for` loop or `if` statements. Consider using `for in`, `for of`, and ternary operators. 

### **Test all your solutions for questions 1-3 with the following variable:** 

```jsx
 const fellows = [ "shawn", "annecie", "liam", "khalia", "andrew"]
```

4. Write a function named `letterCountArray` that takes in an array of strings and for every string, returns a new array with objects where the keys are letters in the string and the value of each key is a count of how many times the character appears in the string.
    
    ```jsx   
    letterCountArray(fellows) //returns [{s: 1, h: 1, a: 1, w: 1, n: 1}, {a: 1, n: 2, e: 2, c: 1, i: 1}, {l: 1, i: 1, a: 1, m: 1}, {k: 1, h: 1, a: 2, l: 1, i: 1}, {a: 1, n: 1, d: 1, r: 1, e: 1, w: 1}]
    ```
    
5. Write a function named `letterCountArrayRefactor` that is the same as `letterCountRefactor`, but refactor this function to use a high order array method. Consider using `for in`, `for of`, and ternary operators.
