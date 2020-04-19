// Assignment Code
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

var characters = [];

var generateBtn = document.querySelector("#generate");
// var pwdCriteria = prompt(
//   "Please choose criteria for password: 1 - Minimum of 8 chars; 2 - no repeating characters; 3 - No ascending/descending characters; "
// );

// function validateInput(prompt) {
//   if (prompt === "" || prompt < 8 || prompt > 128) {
//     alert("Please choose at least each prompt!");
//     return false;
//   }
// }

//function pwdPrompt("string") {

// Write password to the #password input
function writePassword() {
  var uCase = confirm("Do you want uppercase in your password?");
  if (uCase === true) {
    characters.push(upperCase);
  }

  var lCase = confirm("Do you want lowercase in your password?");
  if (lCase === true) {
    characters.push(lowerCase);
  }

  var sym = confirm("Do you want symbols in your password?");
  if (sym === true) {
    characters.push(symbols);
  }

  var num = confirm("Do you want numbers in your password?");
  if (num === true) {
    characters.push(numbers);
  }

  var pwdLength = prompt("How long is the password: (8-128 characters) ");
  if (pwdLength === "" || pwdLength < 8 || pwdLength > 128) {
    alert("length has to be between 8 to 128! Please try again.");
  }
  var password = generatePassword(pwdLength, characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  characters = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(num, arr) {
  var possibilityIndex = 0;
  var password = "";
  var targetArray = [];

  for (i = 0; i < num; i++) {
    targetArray = arr[possibilityIndex];
    possibilityIndex++;

    password += targetArray[Math.floor(Math.random() * targetArray.length)];

    if (possibilityIndex === arr.length) {
      possibilityIndex = 0;
    }
  }
  var passwordArray = password.split("");
  var arrayLength = passwordArray.length;
  var scrambledPassword = "";
  var rand = 0;

  for (i = 0; i < arrayLength; i++) {
    rand = Math.floor(Math.random() * passwordArray.length);
    scrambledPassword += passwordArray.splice(rand, 1);
  }

  return scrambledPassword;
}
