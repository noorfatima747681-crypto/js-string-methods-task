// 1: Method Name : toUpperCase()
// Definition
// "This method converts all characters of a string into Capital Letters"
// Syntax: 
//    string.toUpperCase()
//    Why We Use This Method: 
//    It is used to standardize user input or make headings bold/capital.
// Real code Example:
let Name = "Noorfatima";
let result = Name.toUpperCase();
console.log(result);

// 2: Method Name : toLowercase()
// Definition:
//  "Converts all letters into Small Letters"
// Syntax: string.toLowerCase()
// Why We Use: Useful for checking login emails or usernames.
// real code Exp:
let Course = "JAVA SCRIPT";
let lowerResult = Course.toLowerCase();
console.log(lowerResult);

// 3: Method Name: trim()
// Definition:
// "Removes extra spaces from both start and end." 
// Syntax: string.trim()
// Why We Use: To clean user input in forms
let Email = "    noor@gmail.com    ";
let cleanEmail = Email.trim();
console.log(cleanEmail);

// 4: Method Name: slice()
// Definition: Cuts a part of string from start index to end index.
// Syntax: string.slice(start, end)
// Why We Use: To get a specific word from a long sentence.
// Code Exp:
let fruits = "Apple, Banana, Kiwi";
let fruitResult = fruits.slice(7,13);
console.log(fruitResult);

// 5. Method Name: substring()
// Definition: Extracts characters between two indices (similar to slice).
// Syntax: string.substring(start, end)
// Why We Use: To extract text without supporting negative indices.
// Code Exp:
let sub = "Hello World!";
let subResult = sub.substring(0,5);
console.log(subResult);

// 6. Method Name = replace()
// Definition: Replaces a specific word with a new one.
// Syntax: string.replace("old", "new")
// Why We Use: To update information in a paragraph.
// Code Exp:
let sentence = "I am learning Javascript";
let NewSentence = sentence.replace("learning" , "Studying");
console.log(NewSentence);

// 7.Method Name: includes()
// Definition: Checks if a string contains a word (returns true/false).
// Syntax: string.includes("word")
// Why We Use: For search bars or checking specific words.
// Code Exp:
let message = "I would like to have some tea";
let messageResult = message.includes("tea");
console.log(messageResult);

// 8. Method Name: indexOf()
// Definition: Returns the index (position) of the first match.
// Syntax: string.indexOf("word")
// Why We Use: To find where exactly a word starts.
// Code Exp:

let findMe = "Find the needle";
let findResult = findMe.indexOf("needle");
console.log(findResult);

// 9. Method Name: split()
// Definition: Splits a string into an Array (list).
// Syntax: string.split("separator")
// Why We Use: To convert a comma-separated list into items.
// Code Exp:
let list = "Taiba, Ayesha, Fatima";
let listResult = list.split(",");
console.log(listResult);

// 10. Method Name: concat()
// Definition: Joins two or more strings together.
// Syntax: string1.concat(string2)
// Why We Use: To merge first name and last name.
// Code Exp:
let firstName = "Noor";
let LastName = "Fatima";
let FinalResult = fisrtName.concat(" ",LastName)
console.log(FinalResult);









