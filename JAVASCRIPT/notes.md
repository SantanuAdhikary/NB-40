
# JAVASCRIPT 

* javascript is a programming language that is used to add functionalities to the webpages.

* we can use javascript both in `client-side` and `server-side`.

**How many ways we can write javascript code**

* we can write js code in two ways.

*1. Internal javascript*

 * writing the js code in the html file is called internal javascript.

 * for this we need <script></script> tag.

 * it should be written inside <body> tag at the end before the </body> tag.


 *2. External Javascript*

 * first we have to create one separate javascript file by using `.js` extension.

 * then we have to connect the html and js file by using <script> </script> tag.

 * in <script></script> tag we have to give the path of the js file in the src attribute.

 ### Printing Statement In Javascript 

    console.log()

 ### How to Execute Javascript Program

 * we can execute js program both in the browser and outside browser.

 *in the browser*

 * for executing js program inside the broser we need html file.

 * we have to inspect the webpage and go to console to get the output.

 *outside of the browser*

 * for this we have to install nodejs.

 * nodejs is javascript runtime environment used to execute js file outside of the browser.

 * node filename.js


 ## token 

 * token is basic building blocks or smallest unit in any programming language.

 **components of token**

 1. keyword 
 2. identifier 
 3. literals 
 4. separators 
 5. operators

### keywords

   * these are pre-defined words / reserved words having some meaning.

   * keywords should be written in *lowercase / small*

### identifier 

  * component where we can assign names.

  **rules of identifier**
   
   * we can't use keyword as identifier.
   * we can't give space in-between the identifier.
   * specical character we can't use (except $ and _ )
   * we can't start with numbers.


### variable 

  * variable is a container where we can store the data/value.

  * in javascript for creating variable we need 3 keywords.
  `var`, `let` , `const`


  **var keyword**
```js

      var sname ;   // variable declaration ✅

      sname = "naveen"; // variable Initialization ✅

      var sage = 22 ; // v.d and v.i ✅

      sage = 23 ; // re-initialization ✅

      var sname ; // re-declaration ✅

```

**let keyword**

* in let keyword re-declaration is not possible.

```js
         let phNo = 9876543210;

         let phNo ; ❌ // re-declartion 
```

**const keyword**

* to create any constant variable we need const keyword.
* here declaration and initialization we have to do in the same line. 
* we can't perform re-initialization.

```js

          const PI ; ❌
          PI = 3.14 ; ❌

          const PanNo = 12345678; ✅

          PanNo = 987654321; ❌
```



## Datatype

* it is used to know which kind of data we want to assign in the variable.

* in javascript we have 2 types of datatype.

**Primitive Datatype**

*1. number datatype*
   
   in js both decimal and non-decimal digits belongs to number datatype.

**Note**
     `typeof` operator is used to know the datatype of any variable.

eg: 
      
```js
      let age = 21;
      console.log(age)           // 21
      console.log(typeof age)   // number

      let height = 5.85
      console.log(height)
      console.log(typeof height)   // number
```
  
*2. string datatype*

 * string is collection of single or multiple characters that is enclosed with single quote('') / double quotes("") / backticks (` `)

 eg: 

```js
     
      let sname = "Bala";
      console.log(typeof sname);    // string

      let gender = 'male'
      console.log(typeof gender)   // string

      let about = `good boy`
      console.log(typeof about)  // string 
```

*3. boolean datatype*

 * it can take only two values. (true / false)

 eg:

 ```js
           let isStudent = true ; 
           console.log(isStudent);
           console.log(typeof isStudent); // boolean
 ```

 *4. undefined datatype*

 * any variable that is declared but not initialized, is called as undefined.

 * typeof undefined is `undefined`.

 eg: 

```js
           let empNo ;
           console.log(empNo)         // undefined
           console.log(typeof empNo) // undefined
```

*5. null datatype*

 * null is , the variable is assigned with null.
 * typeof null is **object**

 eg: 
 ```js
           let empSal = null;
           console.log(empSal);       // null
           console.log(typof empSal); // object
 ```

 *6. bigint datatype*

 * if we want to take large number in js , we can take thig bigint datatype.

 * for declaring bigint datatype we have to use `n` as suffix.

 eg:

 ```js
            let x = 9876543210987654321n
            console.log(x)
            console.log(typeof x) // bigint
 ```

 **NonPrimitive Datatype**

 * js having 3 non-primitive datatype.

 1. function
 2. array 
 3. object


## Decision Making Statement 

1. if condition
2. if else condition 
3. else if ladder 
4. switch

### if condition 

*syntax*

if(condition)
{

}

### if else condition

*syntax*

  if(condition)
  {

  }
  else
  {

  }

### else if ladder 

* if we want to check more than one conditions then we should use this.

* any one block is executed means it will not check the remaining blocks.


*syntax*

if(condition)
{

}
else if(condition)
{

}
.
.
.
else
{
   
}

### Math Object 

* this is one built-in object in javascript used to perform mathematical operations.


*Math.max()*
  
  * used to find the maximum number.

  eg:
       console.log(Math.max(3,1,5,2))  // 5

*Math.min()*
  
  * used to find the minimum number.

  eg:
       console.log(Math.min(3,1,5,2))  // 1

*Math.abs()*
  
  * used to provide the positive value.
  eg:
       console.log(Math.abs(-3))  // 3

*Math.floor()*
  
  * it is used to provide the floor value of the number.

  eg:
       console.log(Math.floor(3.1))  // 3
       console.log(Math.floor(3.999))  // 3


*Math.ceil()*
  
  * it is used to provide the next value of the number.

  eg:
       console.log(Math.ceil(3.1))     // 4
       console.log(Math.ceil(3.999))  // 4

*Math.round()*
  
  * it is used to provide the roundof value of the number.
  * if the decimal value is .5 or more than that it will give next value.

  eg:
       console.log(Math.round(3.1))     // 3
       console.log(Math.round(3.5))     // 4
       console.log(Math.round(3.999))  // 4


*Math.pow()*
  
  * it is used to know the power of any number.
  * it takes 2 parameters (base and power).

  eg:
       console.log(Math.pow(2,3))     // 8


*Math.sqrt()*
  
  * it is used to know the square root of any number.
  
  eg:
       console.log(Math.sqrt(16))     // 4

*Math.random()*

 * it will generate one random number b/w 0.0 to 0.99999 (less than 1)


 **how to generate random number b/w some range**

 let start = 10 ; 
 let end = 50 ;

 let randomNumber = Math.floor( Math.random() * (end-start)+1 + start )
     

## Looping statement

### for loop 

*syntax*

  for(initialization ; condition ; updation )
  {

  }

*example*

**write a program to print 1 to 5**

```js

       for(let i=1 ; i<= 5 ; i++)
       {
          console.log(i);
       }
```

### while loop 

*syntax*

initialization

while(condition)
{

  updation
}

**write a js program to print 10 to 20**

```js

      let i = 10 ; 
      while(i <= 20)
      {
        console.log(i);
        i++;
      }
```


### do while loop

*syntax*

initializaion

do{

   updation

}while(condition);


* this loop checks the condition at the end, it is called as exit controlled loop.

* eventhough condition is false then also this loop will execute at least one time.


## function 

* function is one block of code performing some specific task.

* function is used for code reusability.

### Named Function 

* function having name , is called **Named Function.**

*syntax*

function functionname()
{

}

functionname()

* for executing the function we should call the function by the functionname.

**function with parameters**
```js

    function add(a, b)
    {
        console.log(a + b)
    }

    add(2,8)
    add(25,80)

```

**function with return statement**

```js
      function sub(a,b)
      {
          return a - b ;
      }

      let res = sub(40,10)
      console.log(res)
```





### Anonymous Function 

* any function that does not have name is called as *anonymous function*

*syntax*

function()
{

}

* here we can't execute the function because this function does not have any name.

### Function with Expression 

*syntax*: 

   variable = function()
              {
                  
              }

  *example*

  ```js

            let add = function()
                     {
                          console.log(10 + 5);
                     }

              add();
  ```

**write one js program to check number is prime or not by using function**


### Arrow Function 

*syntax*

variable = ()=>{

}

*example*

```js
          let add =(a,b)=>{
            console.log(a+b);
          }
          add();
```

**Note: in arrow function if there is only one statement that time no need to use return keyword and { }**


```js

     let multiply = (a,b)=> a * b ;

     console.log(multiply(2,8));
     
```


**write a js program to find the numbe is armstrong or not**


### Nested Function

* creating one function inside another function is called as nested function.

*eg*
```js
      let outer = ()=>{
          console.log("i am outer function")

          let inner= ()=>{
              console.log("i am inner function")
          }
          inner();
      }
      outer();
```

**what is Lexical Scooping**

* in nested function inner function can access the properties of outer function but the outer function can't access the properties of inner function is called as *Lexical Scooping*


### Higher Order Function and Callback Function 

**HigherOrderFunction**

* any function that takes/accepts any other function as parameter/argument is called as *HigherOrder function*

**callback function**

* the function we are sending as a argument to the higher order function, is called as *callback function*




**Difference b/w var and let**

1. in `let` keyword re-declaration is not possible , but in `var` keyword re-declartion is possible.

*eg:*
```js 
      var a = 10 ; 
      var a ; ✅

      let b = 90 ; 
      let b ;  ❌
```

2. `let` keyword having *block scope* but `var` keyword having `functional scope` and `global scope`

eg:

```js
          {
             var x = 10 ; 
             let y = 20 ; 
             const z = 30 ; 

             console.log(x);  // 10
             console.log(y);  // 20
             console.log(z);  // 30
          }
             console.log(x);  // 10  ✅
             console.log(y);  ❌
             console.log(z);  ❌


      function scope()
      {
          for(var i=1 ; i<=5 ;i++)
          {

          }

          console.log(i); // 6 
      }

      scope()
```

3. **variable hoisting** is possible in `var` keyword but in `let` not possible.


### what is Variable Hoisting

* if we declared any variable by using `var` keyword and we access it before its declartion.
the declaration will move to top and it will give the output as `undefined`.
this process is called *variable hoisting*.

eg: 

```js

              console.log(x);   // undefined
              var x ; 


              console.log(y);   // undefined
              var y = 20 ;
```


### IIFE (Immediate Invoke Function Expression)

* this funcion executes only once.
*eg:*
```js
         (
            function()
            {
              console.log("database connected")
            }
         )();

      // iife function with parameter

      (
        function(port)
        {
            console.log("server is running on port number ",port)
        }
      )(3000);
```

## String 

* String is single or collection of characters enclosed with single quote/double quote / backticks.

eg:

```js

      let str1 = 'hi'
      let str2 = "hi"
      let str3 = `hello
      how 
      are 
      you`
```

**note:** 
         if we want to take multiline string then we can enclosed the string by using backtick.

### String Interpolation / Template Literals

* accessing the variable inside string is called template literals.
* for this string should be enclosed with backtick and the variable we want to access should be written inside ${}

eg: 

```js

        let a = 10 ; 
        let b = 20 ;
        let myName = "santanu"

        console.log(`the addition of ${a} and ${b} is : ${a+b}`)

        console.log(`my name is : ${myName}`)
```


**lenth property**

 * it is used to know the length of any string.

```js
      let msg = "how are you"
      console.log(msg.length);   // 11
```

### String Methods 

**1. toUpperCase()**
    
   * this method is used to convert the string into uppercase and it will return one new string.

   * it will not change the original string.

  ```js
          let str4 = "Hello"

          let upper = str4.toUpperCase();
          console.log(upper)                    // HELLO

          console.log(str4.toUpperCase())      // HELLO

          console.log(str4)         // Hello
  ```


**2. toLowerCase()**
    
   * this method is used to convert the string into lowercase and it will return one new string.

   * it will not change the original string.

**3. trim()**

  * this method is used to remove space from both the sides of the string. 
eg: 
  ```js
          let str6 = "  hi  "
          let str7 = str6.trim();

        console.log(str6.length)    // 6
        console.log(str7.length)   // 2
  ```

**4. indexOf()**

 * it is used to know the index of the given character.

 * it will take the first occurance of the character.

 * if the character is not present, it will return -1.

 ```js
      let str8 = "hello how are you"
      console.log(str8.indexOf('o'))   // 4
      console.log(str8.indexOf('l'))  // 2
      console.log(str8.indexOf('z')) // -1
 ```

 
**5. lastIndexOf()**

 * it will take the last occurance index of the character.

 * if the character is not present, it will return -1.

 ```js
        console.log(str8.lastIndexOf('o'))  // 15
      console.log(str8.lastIndexOf('l'))   // 3
      console.log(str8.lastIndexOf('z'))  // -1
 ```

 **6. charAt()**

  * this method is used to know which character is present at the given index.

  ```js
          console.log(str8.charAt(1))  // e
  ```

  **7. concat()**

  * this method is used to combine / merge two or more than two strings and it will return one new string.

  ```js
          console.log(str7.concat(" ",str8)) // hi hello how are you
  ```

  **8. includes()**

  * it is used to know the given string is present or not. 

  * if it is present it will return true otherwise it will return false.

  ```js
     
      console.log(str8.includes("me"))     // false
      console.log(str8.includes("you"))   // true 
  ```


  **9. replace()**

  * this method is used to replace one string with another string.
  * it will replace only the first one.

  ```js
    let sentence = `I am from bangalore, I love bangalore`

    console.log(sentence.replace("bangalore","chennai"))  

    // I am from chennai, I love bangalore.
  ```

  **10. replaceAll()**

  * this method is used to replace all the string.

  ```js
     console.log(sentence.replaceAll("bangalore","chennai"))  

    // I am from chennai, I love chennai.
  ```

  **11. split()**

  * this method is used to convert string into array.

  ```js
     let greet =  "how are you"

    console.log(greet.split(" "))  // ["how","are","you"]
    console.log(greet.split(""))  // ['h', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u']
    console.log(greet.split())   // ['how are you']
  ```


  **12. slice()**

  * this method is used to extract some part of another string.

  * it takes two parameters. (startIndex, endIndex) , it does not include endIndex value.

  * slice() can take negative indexing also.

  * endIndex value should be greater than startIndex.


  **13. substring()**

  * this method is also used to extract some part of another string.

  * it takes two parameters. (startIndex, endIndex) , it does not include endIndex value.

  * here we can't provide negative value. if we are using that will be considered as 0.

  * here if we are giving endIndex value smaller than startIndex , it will swap the values and provide the output.


## Array 

* Array is one linear data-structure where we can store multiple values in continuous manner.

* in javascript we can store both homogeneous and heterogeneous data inside array.

* array index starts from 0.

**How to declare Array**
```js
       let arr = [10,20,30]
       console.log(arr);
```

**How to access Array elements**

```js
       console.log(arr[0])
       console.log(arr[1])
```

**How to modify array element**

```js
          arr[2] = 300;
```

**How to traverse Array**

 * we can traverse array by using any looping statement like(for,while,do-while).

 * we can travers by using `for of` loop and `for in` loop.


*for loop example*

```js
          for(let i=0 ; i<arr.length;i++)
          {
            console.log(arr[i]);
          }
    
```

*for of loop example*

```js
          for(let ele of arr)
          {
            console.log(ele);
          }
    
```

### Array Methods 


**1. push()**

* this method is used to add element at the end of array.

```js
        let marks = [75,80,95,65]
        marks.push(90)
        console.log(marks)          //  [75, 80, 95, 65, 90]
```

**2. pop()**

* used to remove the last element of the array.

```js
        let food = ["biriyani","maggie","fried rice","umpa"]

        food.pop();
        console.log(food)   // ['biriyani', 'maggie', 'fried rice']
```

**3. shift()**

* used to remove the element from the start.

```js
        let movies = ["leo","master","beast","jananayagan"]

        movies.shift()

        console.log(movies)   //   ['master', 'beast', 'jananayagan']
```


**4. unshift()**

* used to add element at the start.

```js
        let series = ["dark","12 monkeys","f.r.i.e.n.d.s"]

        series.unshift("money heist")

   console.log(series) //  ['money heist','dark','12 monkeys','f.r.i.e.n.d.s']
```

**5. indexOf()**

 *  this method is used to know the first occurance index of any given element of the array.

**6. lastIndexOf()**

 *  this method is used to know the last occurance index of any given element of the array.

 ```js
        let numbers = [50,10,20,40,30,10]

        console.log(numbers.indexOf(10))        // 1
        console.log(numbers.indexOf(15))       // -1

        console.log(numbers.lastIndexOf(10))   // 5

 ```

 **7. includes()**

 * used to check element is present or not in the array. 
 * it returns boolean (true/false)

 ```js
      console.log(numbers.includes(100))   // false
      console.log(numbers.includes(30))   // true
 ```

 **8. concat()**

 * used to combine/merge two or more than two arrays and it will return one new array.

 ```js
 
        let frontend = ["html","css","react"]
        let backend = ["node","express","mongodb"]

        let fullstack =  frontend.concat(backend)

        console.log(fullstack)  // ['html', 'css', 'react', 'node', 'express', 'mongodb']
 ```

 **9. join()**

 * used to convert any array into string.

 ```js
      let charArr = ['h','e','l','l','o']

      let str = charArr.join("")

      console.log(str)    // hello
 ```

 **10. reverse()**

 * used to reverse the original array.

 ```js
        let arr3 = [1,2,3,4,5]

        arr3.reverse()

        console.log(arr3)   // [5,4,3,2,1]
 ```



**11. splice() method**

* this method is used to modify/change the original array.

* by using this method we can remove , replace and add the element in array.

* it can take 3 parameters (startIndex, deleteCount , replacementValue)

*eg : 1*
```js

   let arr4 = [10,20,30,40,50,60]

   arr4.splice(1,2)

  console.log(arr4)     // [10, 40, 50, 60]
```

*eg : 2*
```js

  let arr5 = [100,200,300,400,500,600]

  arr5.splice(2,2,700) 

  console.log(arr5)    // [100, 200, 700, 500, 600]
```

*eg : 3*
```js

    let arr6 = ["java","node","express","python"]

    arr6.splice(2,0,"javascript")

    console.log(arr6)  // ['java', 'node', 'javascript', 'express', 'python']
```

**12. slice()**

* it is used to extract some part of array. 
* it will not modify the original array. 
* it takes two parameters(startIndex, endIndex) but it does not include endIndex value.


### Higher Order Array Methods 

**1. map()**

* map() is one higher order array method used to traverse the array and we can perform some operation with all the array elements.

* map() method will return one new array, it does not modify the original array. 

* this method takes 3 parameters. 
  first parameter identify as element 
  second parameter identify as index 
  third parameter identify as array


*syntax*

   arrayname.map((ele,index,array)=>{

   })


```js


      let price = [1000,750,250,500]

      let updatedPrice = price.map((ele)=>{
        return ele + 200;
      })

      console.log(updatedPrice)  // [ 1200, 950, 450, 700 ]
      console.log(price)



      let subjects = ['sql','java','node','python']


      let upperArr = subjects.map((ele)=>{
          return ele.toUpperCase(); 
      })

      console.log(upperArr)  // [ 'SQL', 'JAVA', 'NODE', 'PYTHON' ]
```

**2. filter()**

* filter() is one higherorder array method used to traverse the array and it checks the condition.

* it returns one new array , there the element will be stored which are matching with the condition.

* filter() method also can take 3 parameters, (element,index,array)

```js
      let marks = [56,75,59,80,65,90,45,88,70]

      let highest= marks.filter((ele)=>{
              return ele >= 70
      })
      console.log(highest)  // [ 75, 80, 90, 88, 70 ]
```

* this method will not change the original array, it will return one new array.


**3. forEach()**

* this is also one higher order array method and it is used to traverse the array.

* it can take 3 parameters (element,index,array)

* the main difference b/w map() and forEach(), forEach method can't return any value.


**4. reduce()**

* reduce() method is one higher order array method , it can take 4 parameters (accumulator , element , index , array)

* it is used to make the array into single value.

* by default accumulator value will be first element value.

* when we want to add , multiply all the elements we can use reduce method.

```js

    let nums = [1,2,3,4,5]

    let sum = nums.reduce((acc,ele)=>{
      return acc + ele;
    },0)

    console.log(sum)          // 15

    let multiply = nums.reduce((acc,ele)=>{
      return acc * ele;
    },1)

    console.log(multiply)     // 120
```

**5. sort()**

* sort() method is used to sort the array both in ascending and descending order.

* this method will change the original array.

* it can take 2 parameters. 
  if we are return first - second parameter it will give ascending order 
  if we are return second - first parameter it will give descending order 

```js

      let unsorted = [5,1,4,3,2]

      let asc = unsorted.sort((a,b)=>{
        return a - b;
      })

      console.log(unsorted)
      console.log(asc)

      let dsc = unsorted.sort((a,b)=>{
        return b - a; 
      })

```


## Object

* anything that have physical existence is called as Object.

* in javascript Object is key and value pairs enclosed with curly braces {}.

* these key-value pairs are called properties, all the properties will be separated by comma ( , )

* all the key-value will be separated by colon (:)

* key should be unique, value can be duplicate.

* we can give any datatype as value (primitive , non-primitive)

* we can create object in 3 ways in javascript.
  * by using object literals 
  * by using class 
  * by using functional constructor


### Object by using literals


```js
let student = {
    sname : "miller",
    sid : 101,
    isStudying : false,
    skills : ["sql","java","python","webtech"],
    address : {
                city:"chennai",
                pin:543216
             },
    work : function()
            {
                console.log("love to sleep")
            }
}

console.log(student)

```


**How to Access Property**

*syntax*
        objectname.key

```js
        console.log(student.sname); //  miller
```

**How to modify**

*syntax*
          objectname.key = value ;

 ```js
          student.sid = 210;
 ``` 

 **How to add new property**

 * adding new property and modifying the old property syntax is same.
 * if the key is present then it will modify, if the key is not present then it will add the property.

 ```js
           student.phNo = 9876543210;
 ```

 **How to delete any Object property**

 *syntax*
          delete objectname.key

  ```js
           delete student.isStudying;
  ```


  **Accessing Object by using [] square bracket**

  *syntax*
                objectname["key"]
        
  ```js
           console.log(student["sname"]); // miller 
           console.log(student[sname]);  // error 
  ```


### Object Methods 

**1. Object.keys()**

 * this method is used to get all the keys in the form of array.

 ```js
        let marker = {
            brand : "camlin",
            price : 50,
            color : "blue",
            canWrite : true
        }

        let keys = Object.keys(marker)
        console.log(keys)        // [ 'brand', 'price', 'color', 'canWrite' ]
 ```

 **2. Object.values()**

 * it is used to return all the values of object in the form of array.

 ```js
      let values = Object.values(marker)
      console.log(values)    // [ 'camlin', 50, 'blue', true ]
 ```

 **3. Object.entries()**

 * it will return one nested array where all the key-value pairs will be stored each one arrays.

 ```js
      let keyvalue = Object.entries(marker)
      console.log(keyvalue)
      /*
           [
              [ 'brand', 'camlin' ],
              [ 'price', 50 ],
              [ 'color', 'blue' ],
              [ 'canWrite', true ]
           ]
     */
 ```

 **4. Object.freeze()**

 * this method is used to make the object frozen.
 * we can't perform any CRUD operation (add,modify,delete) with the object.

 **5. Object.isFrozen()**

 * it is used to check object is frozen or not. 
 * it will return boolean value.

 ```js
        
        let ob1 = {
            obName : "laptop",
            price : 65000,
            color:"black"
        }

        console.log("before freeze")
        console.log(ob1)

        Object.freeze(ob1);

        console.log("after freeze")

        ob1.color = "blue"     // we can't modify
        ob1.brand = "hp"      // we can't add 
        delete ob1.price;    // we can't delete 

        console.log(ob1)


        // ! Object.isFrozen()

        console.log(Object.isFrozen(ob1))        // true
        console.log(Object.isFrozen(marker))    // false 
 ```
 

 **6. Object.seal()**

 * this method is similar to `Object.freeze()` here also we can't add or delte any property but here we can modify the property.

 **7. Object.isSealed()**

 * this method is used to check object is sealed or not.
 * it will return boolean value.


 ```js
        
        let ob2 ={
            obName : "projector",
            brand : "epson",
            price : 75000
        }


        console.log("before seal")
        console.log(ob2)

        Object.seal(ob2)

        console.log("after seal")
        ob2.roomNO = 401                // we can't add
        delete ob2.price               // we can't delete
        ob2.price = 65000             // modification is possible

        console.log(ob2)


        // ! 7. Object.isSealed()

        console.log(Object.isSealed(ob2))  // true
        console.log(Object.isSealed(marker))  // false
        console.log(Object.isSealed(ob1))   // true
 ```

 **8. Object.assign()**

 * this method is used to combine two or more than two objects and it returns one new object.

 *syntax*
           Object.assign(target,source1,source2,...... source3)

```js          
      let ob3 = {
          name : "raja"
      }
      let ob4 = {
          gf : "rani"
      }
      let mergedOb = Object.assign({},ob3,ob4)
      console.log(mergedOb)  // { name: 'raja', gf: 'rani' }
      
```


**9. hasOwnProperty()**

* this method is used to know any property (key) is present or not inside the object.

* it will return boolean.

```js
      let stu ={
          sname : "rahul",
          age : 10 
      }

      console.log(stu.hasOwnProperty("sname"))  // true
      console.log(stu.hasOwnProperty("height")) // false
```


### class and Object in js

```js
      class student{

          sname ; 
          sid ; 
          sage ; 

          constructor(sname , sid , sage)
          {
                this.sname = sname ; 
                this.sid = sid ; 
                this.sage = sage;
          }
      }

      let stu1 = new student("dhoni",7,10);
      let stu2 = new student("rohit",45,8);
      let stu3 = new student("virat",18,6);

      console.log(stu1)
      console.log(stu2)
      console.log(stu3)

```

## Object Destructure 

* Object destructuring is a feature used to extract multiple properties from an object and assign them to distinct variables using a single statement.

* for performing this we need { } , inside that all the keyname we have to provide, so that we can use them as separate variables.

```js

    let student = {
        sname : "dhoni",
        age : 7 , 
        isPlayer : true,
        skills : ["math","rhymes","gk","drawing"]
    }
   
    let {sname ,skills,isPlayer,age} = student

    console.log(sname)
    console.log(age)
    console.log(skills)
```


## Rest Parameter

* rest parameter allows a function to accept an indefinite number of arguments as an array.

* it is denoted by three dots (...)

* we can use this only for the last parameter.

## Spread Operator 

* it is used for an iterable (like an array or string) or an object to be expanded or "unpacked" into individual elements or properties.

* it is also denoted by three dots (...)

```js
   let frontend = ["html","css","js","react"]
  let backend = ["node","express","mongodb"]

  console.log(frontend)      // [ 'html', 'css', 'js', 'react' ]
  console.log(...frontend)  // html css js react
```


**use of spread operator**

 *merge arrays and object*

 ```js
   
//  merge two arrays by using spread

  let fullstack = [...frontend,...backend]
  console.log(fullstack) 

// ['html','css','js','react','node','express','mongodb']


//  merge two objects by using spread

    let ob1 ={
        obname : "pen"
    }

    let ob2 ={
        price : 30
    }

    let ob3 = {...ob1,...ob2}
    console.log(ob3)             // {obname : "pen", price : 30}
 ```


 ## shallow copy

 * when we are assigning any object or array inside any variable if we make any change in any one of them it will modify both of them.

 ```js
   let subjects = ["java","python","sql"]
   let copy = subjects ; 

   copy.push("webtech");

   console.log(copy)     // ["java","python","sql",webtech]
   console.log(subjects) // ["java","python","sql",webtech]
 ```

 ## Deep Copy

 ```js

   let subjects = ["java","python","sql"]

   let copy = [...subjects];

   copy.push("webtech")

  console.log(copy)      // ["java","python","sql",webtech]
  console.log(subjects) // ["java","python","sql"]
 ```


 ## JSON 

* JSON (JavaScript Object Notation) is a lightweight data-interchange format 

* that is easy for humans to read and write, and easy for machines to parse and generate.  
 
### Advantages of JSON:  

 **Human-Readable:**

*  JSON's structure is easy for developers to understand and  write. 

**Lightweight:** 

* JSON is a minimal format that reduces the size of the data being transmitted. 

**Language-Independent:**

* JSON can be used with many programming languages, 
* including JavaScript, Python, Ruby, Java, etc. 


### JSON methods 

**1.JSON.stringify()**

 * this method is used to convert any javascript object into json.

**2. JSON.parse()**

 * this method is used to again convert that json data into javascript object.


```js

        let emp = {
            ename : "miller",
            age : 10 , 
            isEmp : true
        }

        console.log(emp)
        console.log(typeof emp)


        // ! JSON.stringify()

        let jsondata = JSON.stringify(emp);
        console.log(jsondata)
        console.log(typeof jsondata)



        // ! JSON.parse()

        let emp2 = JSON.parse(jsondata)
        console.log(emp2)
        console.log(typeof emp2)

        // ! JSON methods apply on array 

        let arr = [10,20,30,40]
        console.log(arr)
        console.log(typeof arr)   // object

        let arr2 = JSON.stringify(arr)
        console.log(arr2)
        console.log(typeof arr2)   // string

        let arr3 = JSON.parse(arr2)
        console.log(arr3)         // object 
```



### deep copy by using JSON methods

```js
      let arr10 = [10,20,30]

      let copy = JSON.parse(  JSON.stringify(arr10) );

      copy.push("html")
      arr10.shift()

      console.log(copy)    // [10, 20, 30, 'html']
      console.log(arr10)  // [20, 30]
```
