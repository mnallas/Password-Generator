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

var characters = [lowerCase, upperCase, numbers, symbols];

var generateBtn = document.querySelector("#generate");
// var pwdCriteria = prompt(
//   "Please choose criteria for password: 1 - Minimum of 8 chars; 2 - no repeating characters; 3 - No ascending/descending characters; "
// );

function validateInput(prompt) {
  if (prompt === "" || prompt < 8 || prompt > 128) {
    alert("Please choose at least each prompt!");
    return false;
  }
}

// Write password to the #password input
function writePassword() {
  var charCriteria = prompt(
    "Please choose characters for password: 1 - Lowercase; 2 - Uppercase; 3 - Numbers; 4 - Symbols; "
  );
  if (validateInput(charCriteria) === false) {
    writePassword();
  }
  var pwdLength = prompt("How long is the password: (8-128 characters) ");
  if (pwdLength === false) {
    pwdLength;
  }
  var password = generatePassword(pwdLength, characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
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
