/**
 *Write console.assert() statements to test for expected outcomes.
Fill in the function so that the console.assert() statements don't throw errors.
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(number1, number2){
    "use strict";

    if (number1 > number2) {
      return number1
    } else {
      return number2
    }

}

console.log(max(5, 10));

console.assert(max(5,10) == 10, "string here");
// console.assert(max(5,9),"input your string here");

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";

    console.log(Math.max(a, b, c));

}
maxOfThree(1, 2, 3);
console.assert(maxOfThree(1,2,3) === 3, "string here");



// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      return true
    } else {
      return false
    }

}

console.log(isVowel("e"));
console.assert(isVowel("e") == true, "string here");

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";

    // if (phrase.includes("b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z")) {
    //   phrase = "o" + phrase;
    // }
    var phrasePiece = phrase.split("");
    var totalString = "";

    for (var i = 0; i < phrase.length; i++){
      if (isVowel(phrasePiece[i])){
        totalString = totalString + phrasePiece[i];
      } else {
        totalString += phrasePiece[i] + "o" + phrasePiece[i];
      }
    }
    return totalString;
}

console.log(rovarspraket("programming"));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(a, b, c, d){
    "use strict";
    console.log(a + b + c + d);

}

sum(1, 2, 3, 4);


function multiply(a, b, c, d){
    "use strict";
    console.log(a * b * c * d);

}

multiply(1, 2, 3, 4);


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    return string.split('').reverse().join('');
}
console.log(reverse('testar'));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
function findLongestWord(words){
    "use strict";

    var piece = words.split (' ')
    var longestWord = 0;
    var part = null;
    for (var i = 0; i < piece.length; i++) {
      if (longestWord < piece[i].length) {
        longestWord = piece[i].length;
        part = piece[i];
      }
    }
    return part.length;
}
console.log(findLongestWord("hippo and codepen"));
console.assert(findLongestWord("hippo and codepen"), "string here");



// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    // var arr = words, i;
    // arr.sort(function (a, b) {return b.length - a.length}) [0];
    // // }
    // if (words.length > i.length) {
    //   // return words;
    // } else {
    //   // return i;
    // }

}


console.log(filterLongWords('hippo', 3));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
