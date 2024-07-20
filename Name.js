"use strict";
let personName = '';
personName = prompt('What is your name??') || '';
// Explanation in LOC (3):
// we make a empty string.
// if I give the name in personName it will make it save and then all 3 consitions will run
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join(' ');
// Explanation of COL code of line no: (7)
// if personName is (talhaSaleem)
// whatever thing will store in personName is going to be split.
// then personName which is (talhaSaleem) index start from t.
// make t capital.
// and in slice it will start from 1 index not from 0.
// make it into lowercase. 
// join it completely.
// Here we use the if/else conditions: 
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here are your name in:
LowerCase: ${lowercase}
UpperCase: ${uppercase}
TitleCase: ${titlecase}`);
}
else {
    alert('Please fill your name correctly');
}
