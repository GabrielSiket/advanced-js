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

/* ---------------- SPREAD ------------------------- */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log('second array:', arr2);
console.log('first array:', arr1);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log('third array:', arr3);
console.log('fourth array:', arr4);

// Copying an object
let obj1 = {a:1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5};
console.log('first object:', obj1);
console.log('second object:', obj2);
console.log('third object:', obj3);

// Copying only part of an array/object

let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);

/* ------------------ REST ----------------------- */

// Regular function call 

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log('Sum:', sum);

// Extra arguments are ignored

let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log('Sum2:', sum2);

// Function using ...rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log('Sum3:', sum3)

/* ------------------ DESTRUCTURING ----------------------- */

// Destructuring arrays

let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant',
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japonese',
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);


/* ------------------ MAP METHOD ----------------------- */

// Using a for loop

let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);


// Using map()

const multByTwo = function (num) {
    return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()

const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);

// Simplfied w/ map() + arrow function

const arrow = nums.map(num => num * 2);
console.log(arrow);

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const studentsWithIds = students.map(student => [student.name, student.id]);
  console.log(studentsWithIds);
  
/* ------------------ FILTER METHOD ----------------------- */

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough);

  const paul = people.filter(p => p.name === 'Paul');
  console.log(paul);
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
console.log(candidates);

/* ------------------ REDUCE METHOD ----------------------- */

// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);