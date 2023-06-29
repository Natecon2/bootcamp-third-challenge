
// // Assignment Code
// Creates starting variables with their respective query selectors
var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordText = document.querySelector("#password");
// gives a list of options for each of the optional password variables
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "`~!@#$%^&*()_+-=[]{}|;:,.<>?";
var numberChars = "1234567890";
// This is the funtion to generate the password
function generatePassword() {
  // Gets inputed password length
  var passwordLength = getPasswordLength();
  // If user enters an invalid password length, return
  if (!passwordLength) {
    return;
  }
// Prompts the user to input Yes or No to questions asking if they'd like to include password variables
  var useUppercase = confirm("Include uppercase characters?");
  var useLowercase = confirm("Include lowercase characters?");
  var useSpecialChars = confirm("Include special characters?");
  var useNumbers = confirm("Include numeric characters?");
// Checks to make sure at least one character option is being used
  if (!useUppercase && !useLowercase && !useSpecialChars && !useNumbers) {
    alert("You must select at least one character type.");
    return;
  }
// generate a password using the selected characters
  var password = generateRandomPassword(passwordLength, useUppercase, useLowercase, useSpecialChars, useNumbers);
  passwordText.value = password;
}
// Fuction to get password length
function getPasswordLength() {
  var length = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));
// Checks to make sure inputed number is within the length bounderies
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return null;
  }

  return length;
}
// Function to generate random password based on user input
function generateRandomPassword(length, useUppercase, useLowercase, useSpecialChars, useNumbers) {
  var availableChars = "";
  var password = "";

  if (useUppercase) {
    availableChars += upperChars;
  }

  if (useLowercase) {
    availableChars += lowerChars;
  }

  if (useSpecialChars) {
    availableChars += specialChars;
  }

  if (useNumbers) {
    availableChars += numberChars;
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
}
// Adds event listener to the generate button
generateBtn.addEventListener("click", generatePassword);
