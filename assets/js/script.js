// Assignment code here

function generatePassword() {
  var passwordLength = getPasswordLength();
  console.log(passwordLength);
  var lowerCase = getLowerCase();
  console.log(lowerCase);
  var upperCase = getUpperCase();
  console.log(upperCase);
}

function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));
  }
  return userChoice;
}

function getLowerCase() {
  var userChoice = "a";
  while (userChoice = "a") {
    userChoice = (window.prompt("Would you like lowercase characters (y/n)?"));
    console.log(userChoice);
    if (userChoice == "y") {
      return true;
    } else if (userChoice == "n") {
      return false;
    }
  }
}

function getUpperCase() {
  var userChoice = "a";
  while (userChoice = "a") {
    userChoice = (window.prompt("Would you like lowercase characters (y/n)?"));
    console.log(userChoice);
    if (userChoice == "y") {
      return true;
    } else if (userChoice == "n") {
      return false;
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);