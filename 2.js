"use strict";
let personName = '';
personName = prompt('What is your name?') || '';
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, would you like to learn some Python today?`);
}
else {
    alert("You have to enter your name!!");
}
