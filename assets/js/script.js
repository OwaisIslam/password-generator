// Assignment code here

function generatePassword() {
  var passwordLength = getPasswordLength();
  console.log(passwordLength);
}

function getPasswordLength() {
  var userLengthChoice = 0;
  while ((userLengthChoice < 8) || (userLengthChoice > 128)) {
    userLengthChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));
    console.log(userLengthChoice);
  }
  return userLengthChoice;
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