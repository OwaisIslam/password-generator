// Assignment code here

function generatePassword() {
  var lowerCaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-"];

  var passwordLength = getPasswordLength();
  console.log(passwordLength);

  var selectedArray = [];
  var charTypeSelected = false;
  // this loop ensures the user selects at least one character type
  while (charTypeSelected == false) {
    var lowerCase = getChoice("lowercase");
    console.log(lowerCase);
    var upperCase = getChoice("uppercase");
    console.log(upperCase);
    var numericCharacters = getChoice("numeric");
    console.log(numericCharacters);
    var specialCharacters = getChoice("special");
    if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
      charTypeSelected = true;
    } else {
      window.alert("You must select at least one character type.")
    }
    console.log(specialCharacters);
  }

  if (lowerCase) {
    selectedArray = selectedArray.concat(lowerCaseSet);
  }
  if (upperCase) {
    selectedArray = selectedArray.concat(upperCaseSet);
  }
  if (numericCharacters) {
    selectedArray = selectedArray.concat(numSet);
  }
  if (specialCharacters) {
    selectedArray = selectedArray.concat(specialSet);
  }
  console.log(selectedArray);
  console.log(selectedArray[4]);

  var selectedLength = selectedArray.length;

  var passwordString = "";


}

function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));

    // checking here to make sure the user entered a number and not a letter
    if (isNaN(userChoice)) {
      // this will reset the choice value to 0 so it can restart the loop if the user entered anything besides a number
      userChoice = 0;
    }
  }
  return userChoice;
}

// created this function passing a 
function getChoice(currentOption) {
  var userChoice = "a",
    messagePrompt = "";
  var messagePrompt = ('Would you like '.concat(currentOption));
  messagePrompt = messagePrompt.concat(' characters (y/n)?');
  while (userChoice = "a") {
    userChoice = (window.prompt(messagePrompt));
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