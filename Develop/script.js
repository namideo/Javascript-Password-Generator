// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = 1234567890;
var special = "!@#$%^&*()?~=+_-"

var passwordChoice = "";

function generatePassword() {
  console.log ("This button works")
  
  var passwordLength = window.prompt("Choose a password between 8 - 128 characters");

  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Select between 8 - 128 characters");
  }
  
  var lowercaseChoice = window.confirm("Would you like to add LOWERCASE letters?");

    if (lowercaseChoice) {
      passwordChoice += lowercase;
    }

  var uppercaseChoice = window.confirm("Would you like to add UPPERCASE letters?");

    if (uppercaseChoice) {
      passwordChoice += uppercase;
    }

  var numbersChoice = window.confirm("Would you like to add NUMBERS?");

    if(numbersChoice) {
      passwordChoice += numbers;
    }
  
  var specialChoice = window.confirm("Would you like to add SPECIAL CHARACTERS (!@#$%^&*()?~=+_-)?");
    if (specialChoice) {
      passwordChoice += special;
    }


for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordChoice.length);
    password += passwordChoice.substring(randomNumber, randomNumber +1);
  }
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
