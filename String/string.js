//Quotes --> 'single', "double", `backticks` allows to embed any expression ${} -------
function sum(a, b) {
    return a + b;
}

//console.log(`1 + 2 = ${sum(1, 2)}`);

let guestList = `
    Guests: 
    * John
    * Pete
    * Mary
`;
//console.log(guestList);

//Special characters \n new line ------------------
let guests = "Guests:\n * John\n * etc\n"
//console.log(guests);

let str1 = "Hello\nWorld!";
let str2 = `Hello
World!`;
//console.log(str1 == str2); // true

//Special characters: \', \", \\, \t, \u00A9 and others ---------

//console.log(`My\n`.length); // 3 because \n is special character which is counted

/*
//Accessing characters --------------------
let str = `Hello`;
//For inexistant character [] returns undefined, charAt - empty string
console.log(str[0]); //H - modern way 
console.log(str.charAt(0)); //H 
*/

// To iterate over strings for .. of --------------
for (let char of "Buongiorno") {
    //console.log(char);
}

// Strings are IMMUTABLE --------------
let str = 'Hi';
str[0] = 'h'; // still will be H
//console.log(str[0]); // H
// But can be replaced
str = 'h' + str[1];
//console.log(str);

// Changing the case -----------
/*
console.log('Interface'.toUpperCase());
console.log('Interface'.toLocaleLowerCase());
console.log('interface'[3].toLowerCase()); // e
*/

//Searching for substring
// 1. str.indexOf(substr, pos)
/*
let text = 'Widget with id';
console.log(text.indexOf('Widget'));
//console.log(text.indexOf('widget')); // -1// means not found
console.log(text.indexOf(' with')); // The first space is at the position 6
console.log(text.indexOf(' id')); //The space of the substring ' id' is at the position 11

console.log(text.lastIndexOf('h '));// h at the pos 10
console.log(text.lastIndexOf('t')); // 9
console.log(text.indexOf('t', 6)); // 9
*/
let phrase = "As sly as a fox, as strong as a ox";
/*
let pos = 0;
while(true) {
    let foundAt = phrase.toLowerCase().indexOf('as', pos);
    if (foundAt == -1) break;

    console.log(`Found at ${foundAt}`);
    pos = foundAt + 1;
}
*/
// Same algorithm as above 
/*
let pos = -1;
while ((pos = phrase.toLowerCase().indexOf('as', pos + 1)) !== -1) {
    console.log(pos);
}
*/

// ~n = -(n + 1); // If n == -1 then ~n is 0, means truthy
let word = "Widget";
if (~word.indexOf("Widget")) { // if found
    //console.log("Found");
}
/*
// includes, startsWith, endsWith
console.log("Widget with id".includes("id")); //true
console.log("Widget".startsWith("W")); //true
console.log("Widget".startsWith("w")); //false
console.log("Widget".endsWith("et")); // true
*/

//Getting a substring: substring, substr, slice ---------------
/*
//Slice -> returns the part of the string from start to (but without) end
let st = "stringify";
console.log(st.slice(0, 5)); //strin, not including 5
console.log(st.slice(0, 1)); //s 
console.log(st.slice(2)); // ringify - if without second param - it will go till the end of the string
console.log(st.slice(-4, -1)); //gif - counts from the end
*/
/*
//Substring -> returns the part between start(including) and end(without), start can be grater than end
//Negative arguments are not supported
let st = "stringify";
console.log(st.substring(1, 5)); // trin
console.log(st.substring(5, 1)); // trin - same as above
*/

//substr - returns the part of the string from the start with the given length
/*
let st = "stringify";
console.log(st.substr(2, 4)); // ring but this method is deprecated
*/

// Comparing strings: character-by-character in alphabetical order
console.log('a' > 'Z'); // true // lowercase letters are always grater than uppercase
// to get the UTF-16 code "a".codePointAt(0)
console.log("z".codePointAt(0)); // 122
// to get a letter from the code
console.log(String.fromCodePoint(90)); // Z corresponds to 90
// From hexadecimal system
console.log('\u005a'); // Z because = 90
// str1.localeCompare(str2) --> -1 if str1 < str2, 1 if str1 > str2, 0 if equivalent
console.log('Österreich'.localeCompare('Zealand'));  // -1 

//TASKS:

function firstUpper(str) {
    let name = str[0].toUpperCase() + str.slice(1);
 
    return name;
}
//console.log(firstUpper('olha'));

function checkSpam(str) {
    let lower = str.toLowerCase();
    return lower.includes('x');
};

//console.log(checkSpam("nothing special"));

function truncate(str, max) {
    return (str.length > max ? str.substr(0, max) + '...' : str);
};

//console.log(truncate("All these words are important!", 17));

function extractMoney(str) {
    return +str.slice(1);
};

//console.log(extractMoney('$1239'));