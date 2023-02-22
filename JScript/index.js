
// Varibles like x, y . These can be called as containers for storing data where x stores Integer 10 and y stores Integer 20.
// In place of var we can also use let and const.
// var - It is of functional scope and can be updated and redeclared into the scope.
// let - It is of block scope and can be updated but not redeclared into the scope.
// const - It is also of block scope and can't be updated or redeclared into the scope.
var x = 10;
var y = 20;
var z = x + y;
console.log(z);


// JavaScript has 8 Datatypes

// 1. String
var nameOfPerson = "Shubham";
console.log("1"+nameOfPerson);

// 2. Number
var roll = 20;
console.log("2"+roll);

// 3. Bigint
var bigNum = BigInt("123422222222222222222222222222222222222");
console.log("3"+bigNum);

// 4. Boolean
var value = true;
console.log("4"+value);

// 5. Undefined
var mu;
console.log(mu);

// 6. Null
var ab = null;
console.log(ab);

// 7. Symbol
// unique value is being created out of this
let abc = Symbol("a");
let bcd = Symbol("a");
console.log(abc==bcd);


// 8. Object
// These are of 3 types----- 1. Normal Object, 2. Array Object, 3. Date Object
var object1  = {car:"BMW",bike:"Ninja",watch:"Rolex"};
console.log(object1);

// Array object:
var object2 = ["BMW","Ninja","Rolex"];
console.log(object2);

// Date object:
var object3 = new Date("2023-02-22");
console.log(object3);


// Array Methods

// .splice("index of starting element","Number of elements to delete")
let arr = [1,2,3,4,5,6,7,8,9];
arr.splice(2,4);
console.log(arr);

// .push("element to be added to last")
let arr1 = [1,2,3,4,5,6,7,8,9];
arr1.push(2,4);
console.log(arr1);

// .unshift("element to be added to first of array")
let arr3 = [1,2,3,4,5,6,7,8,9];
arr3.unshift(9,4);
console.log(arr3);

// .sort()
let arr4 = ["mon","tue","wed","thur","fri","sat","sun"];
arr4.sort();
console.log(arr4);

// .pop()
let arr5 = [1,2,3,4,5,6,7,8,9];
arr5.pop();
arr5.pop();
console.log(arr5);

// .forEach()
var arr6 = ["jan","feb","mar","apr","may","jun"];
arr6.forEach(x => console.log(x));

// .filter()
var arr7 = ["jan","feb","march","april","may","june"];
var res =  arr7.filter(x => x.length>3);
console.log(res);

// .map()
var arr8 = [1,2,3,4,5,6,7,8,9];
var arr8 =  arr8.map(x => x*10);
console.log(arr8);

// .reverse()
var arr9 = [1,2,3,4,5,6,7,8,9];
arr9.reverse();
console.log(arr9);


// function is a block of code that is designed to perform a specific task
function compare(x,y){
    return x>y;
}

console.log(compare(4,5));// Will return false


// If else Conditions
function ageCheck(age){

    if(age>=18){
        console.log("Eligible to Drive");
    }else{
        console.log("Not eligible to drive");
    }

}

ageCheck(22);
ageCheck(18);
ageCheck(16);

// Operators: There are different types of operators are there
// 1. Arithmetic Operator like +,-,*,/,%,**,--,++.

var one = 1;
console.log(++one); // Increment the value first and then print
console.log(one++); // Print the value first and then increment it
console.log(one);   // Printing the value after operations

// 2. Assignment Operator like =,+=,-=,/=,*=.
var two = 2;
var one = two;  // Making the value of one equal to the value of two
console.log(one);   
two += 4;
console.log(two);

// 3. Comparison Operators like ==,===,!=,!==,>,<,>=,<=,?.
console.log(5 > 3 ? "Yes" : "No");  //Ternary operator

// 4. Logical Operators like &&,||,!.
function logicalOperator(user,password){

    if(user.length>4 && password.length>8){
        console.log("Accepeted");
    }else{
        console.log("Invalid Username and Password");
    }

}

logicalOperator("shubham","123456789");

