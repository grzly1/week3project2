/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

function minimum(userNumber1, userNumber2) {
    if (userNumber1 < userNumber2) {
        return userNumber1;
    } else if (userNumber2 < userNumber1) {
        return userNumber2;
    } else {
        return "Same number";
    }
}

document.getElementById("q1").innerHTML = minimum(-33, 21);

// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3(a, b, c) {
    if (a <= b && a <= c) {
        return a + " is smallest";
    } else if (b <= a && b <= c) {
        return b + " is smallest";
    } else if (c <= a && c <= b) {
        return c + " is smallest";
    }
}

document.getElementById("q2").innerHTML = minimum3(77, 17, 44);


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(numArray) {
    var total = 0;
    for (i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }
    return total + " is the sum total.";
}

console.log(sum([4, 8, 13, 1]))

// var numbers = [4, 8, 13, 1];
//
// function sum(a, b, c, d) {
//     return numbers[1] + numbers[2] + numbers[3] + numbers[4];
// }

document.getElementById("q3").innerHTML = sum([4, 8, 13, 1]);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

// var multiplies = [1, 2, 3, 4];

function mult(numArray) {
    var total = 1;
    for (i = 0; i < numArray.length; i++) {
        total *= numArray[i];
    }
    return total + " is the multiplied total.";
}
console.log(mult([1, 2, 3, 4]))

document.getElementById("q4").innerHTML = mult([1, 2, 3, 4]);


// function multiply(numbers) {
//     var total = 1;
//     for (i = 0; numbers.length; i++) {
//         total *= numbers[i];
//     }
//     return total + " is the multiplied total.";
// }
//
// console.log(multiply([2, 4, 10, 3]))
//
// document.getElementById("q4").innerHTML = sum([4, 8, 13, 1]);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];


function filterSixPlus(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].length < 6) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

// console.log(filterSixPlus(words));

document.getElementById("q5").innerHTML = filterSixPlus(words);


// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

// var userInput = prompt("Please enter a temperature in Celsius to convert to Farenheit.");
//
// function CtoF(userInput) {
//     return (userInput * 1.8 + 32);
// }
//
// console.log(CtoF(userInput).toFixed(0))
//
// document.getElementById("q6").innerHTML = "The temperature in Farenheit is: " + CtoF(userInput).toFixed(0);


// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.

// var userChoice = prompt("Please enter 'F to C' to convert Farenheit to Celsius or 'C to F' to convert Celsius to Farenheit.");
//
// function FtoCorCtoF(userChoice) {
//
//     if (userChoice === "F to C") {
//         var userInput = prompt("Please enter a temperature.");
//         return ((userInput * 1.8) + 32);
//     } else if (userChoice === "C to F") {
//         var userInput = prompt("Please enter a temperature.");
//         return ((userChoice / 1.8) - 32);
//     } else {
//         userChoice = prompt("Please enter either 'F to C' or 'C to F'");
//     }
// }
//
// document.getElementById("q7").innerHTML = "Your converted temperature is: " + CtoF(userChoice).toFixed(0);

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(string) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === "B");
        count += 1;
    }
    return count;
}

console.log(countBs("Best Buddies"))

document.getElementById("q8").innerHTML = countBs("Best Buddies");


// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.






// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.






// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.






// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.
