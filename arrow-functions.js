/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    //code block
    return a + b;
}
let sum = addTwoNumbers(2, 3);
console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    //code block
    return a + b;
}
let sum = addTwoNumbers(2, 3);
console.log(sum);

// Single Line Arrow Function With Parameters

// const addTwoNumbers2 = (a,b) => (a + b); also valid
const addTwoNumbers2 = (a,b) => a + b;
let sum2 = addTwoNumbers2(2, 3);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello!')

const sayHello = () => console.log('hello!');
sayHello()

// Returning Multiple Lines

const returnMutipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMutipleLines());
