//this declares the variable myVar
var myVar;
//This sets the value of the myVar variable to the number .7
myVar = .7;

//you can also declare a varibale and assign a value in one line

var myName = 'Mo'; //if i don't put quotes around my variable name, JavaScript thinks it's looking for a variabel with that myName

//A doubel quoted string cannot contain double quotes within unless they are escaped using a \, same applies for single quoted Strings

var mySentence = 'What\'s up'; //you can escape . Single quoted and double quoted strings, can cause your code to break if you have multiple. To prevent that, you can escape the character

var thing = "and he said \"What's up\" to me";

//Strings cannot break lines by default.
var myLongString = "This actually isn't too long";

//Booleans are either true or false
var myBoolean = false;

var numA = 14;
var numB = 27;

//addition in js is done with the + symbol
var sumOfAandB = numA + numB;

//This reassigns the value of the numA varibale to 32. This does not effect the line above but will effect the line below.
numA = 32;

//subtration
var numAminusNumB = numA - numB; //now this is saying 32-27.

//multiplication is done through an *
var numC = 3*3;

//division is done with a /
var numD = 4/2;

//Exponents are done with double asterkis **
var myExponent = 2**4;

//modulus is done with a % returning the remainder after division 5 % 2 =1

var myModulus = 5 % 2; // so this gives you the remainder of a number. It helps you determine if the number is even or odd. If you divdie the numbers and the remainder is 0 than you know its even, vice versa for odd

//concatination is a fancy way of saying add two strings together
var myFullName = myName + " Barry"; //you can manually add a space prior to the start of the last name. Or you can do nyName = " " + "Barry"

//This creates the me variable and assigns to be an object
var me ={
  name: "Mo Barry",  //name is the key and the value is Mo Barry
  age: 29,
  isAwesome: true,
  head: { //you can add objects to objects. If you have an object nested within an object, you don't need to add the = sign. The me object jas the head object.
    eyes:2,
    hairColor: 'black',
    brain: true //the last key does not get a comma

  }
}; //the semicolon goes at the end of the variable declaration

//properties on the me object would genernally be accessed using dot notation

//me.name would return Mo Barry, me.head.eyes would return 2

console.log(me.age) //console.log is a method that logs the result of a script into the browser

me.age = 30; //you can reassign the value. It's setting the age property on the me object to the value of 30. This overrights the previous value completely

console.log(me.age);

//Arrays are key value pairs where the key is a number. Arrays are created using []. Each element put inito an array is seperated by a comma

//*****************************Array**********************************
var myArr = [55, "Tiger", true, me] //arrays can also store objects

//Arrays in JavaScript stat with a 0 index. To access elements within an array, use [] with the index number. myArr[0] would be 55. myArr [1] would be Tiger.

console.log(myArr[0]);

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];

//Objects can hold arrays as the value of properties
//This adds a hobbies property to the me object and sets it to be an array
me.hobbies = ['Code', 'Music', 'Food', 'Games'];

console.log(me.hobbies [0]); //me object in that array

var something; //if you set a variable and don't assign it to anything, it is considered undefined
console.log(something);

var somethingElse;
console.log(somethingElse);
//If JS encounters a variable that does not exist, it will throw an error and stop executing any further script by default

console.log("not going to happen"); //JS will completely stop working if it tries to render something that is undefined

//*****************************Null**********************************
//null is nothing
var nothing = null;


//*****************************Functions**********************************

//This is a function declaration that creates a function called sayHello
function sayHello(){
  console.log("Welcome to JavaScript City dude!");
}//Function declarations do not end in a semicolon;


//This calls or invokes the sayHello function.
sayHello();

//This works because function declarations are hoisted to the top of the document when read by the browser
sayHelloTo("meeee");

//variables created within a function are only available within the function
function sayHelloTo(name){ //this is an argument. When you're defining it it's an argument.
  var message = "Welcome to JavaScript City" + name + "!";//the scope of this variable exists only within these curly braces. This is called function scope
  console.log(message);
}


// sayHelloTo(myFullName); //We are passing a paramater here. If you are passing values, it's called a paramater.

//*****************************Functions that takes multiple arguments**********************************

//This is a function expression that creates a function called sumNums
//This will take in two arguments
var sumNums = function(firstNum, secondNum){
  var sum = firstNum + secondNum;
  //This will return the value of the sum variable to where the funciton is called
  return sum;
  console.log("This is never goign to happen");//Nothing will display in the console because once a return statement is triggered, no further code within the function is executed

};

sumNums(2,2);

//console.log(sumNums (2,2) );

var mySum = sumNums(923, 13454);

var apollo = { //a method is a function that is the property of an object
  isDog: true,
  breed: 'mutt',
  legs: 4,
  age: 2,
  toys: ['Mrs Moose', 'Bone', 'Half a Giraffe'],
  //This is the speak method on the apollo object, in JavaScript methods are functions that are the property of an object
  speak: function(){
    console.log('woof woof');

  },

  sayHiTo: function(name, age){
    console.log("Hi " + name + "woof woof! you're " + age);
  }
};

//calling the speak method on the apollo object
apollo.speak();
//with functions that use multiple paramaters, the order matters. Supply the paramaters in the same order in which the arguments are listed where the function is defined
apollo.sayHiTo("Stella", 5);

//console is an object. It's a global object created within the browser, log is a method on that object.
console.log(console);
