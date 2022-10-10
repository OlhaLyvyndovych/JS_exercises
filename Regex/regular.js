const pattern_1 = /ninja/g; // to find every match
//Character sets 
const pattern_2 = /[ng]inja/g;

//Except for ..
const pattern_3 = /[^pe2]eee/;
const str = "Black belt black ninja who is ninja and not a ginja";

const result = str.match(pattern_2);
console.log(result);

//Ranges
const ranges = /[a-z]inja/g;
//Repeating characters
const repeat = /[0-9]+/ // repeat unlimited times but at least one
const long = /[a-z]{5}/ // 5 character long
const between = /[0-9]{5,8}/ // long between 5 and 8 characters
const atLeast = /[a-z]{5,}/ // should be 5 or more
// \d, \w, \s, \t 

const together = /\d{3}\s\w{5}/ // 123 fr45g

//Special characters
// '+' The one-or-more quantifier
// '\' The escape character
// '[]' The character set 
// '[^]' The negate symbol in a charater set 
// '?' The zero-or-one quantifier (makes a preceding char optional)
// '.' Any character whatsoever  // /car./ --> all these match --> carb, cars or so .. 
// '*' The 0-or-more quantifier ( a bit like '+' ( + is at least one time));

const special = /he?llo?/ // hll will match because e and o are optional

// /.+/ means anything one or more times --> skdj[]ci)ur_ghiu<DFbiubircueriu <-- this will match


const star = /a\.[a-z]*/ // a. is obligatory and the rest is optional \. = means . (with \ escape character)
// ^[a-z]{5}$ ^ means at the beginning, $ means at the end, so the expression says only 5 letters and nothing more

// /p|t/ means p or t, | = or
// /(p|t)yre/ means pyre or tyre; /(pet|toy|crazy) rabbit --> pet rabbit or toy rabbit or crazy rabbit



