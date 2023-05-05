
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength
var passwordText = document.querySelector("#password");
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const specialChars = ["`","~","!","@","#","$","%","^","&","*"]
const numbers = ["1","2","3","4","5","6","7","8","9" ]
// Write password to the #password input
function writePassword() {
 const generatePassword = (passwordLength, characters) => {
  let password = "";
  for (var i = 0; i < passwordLength; i++){
    password =+ characters (
      Math.floor(Math.random() * password.length)
    );
    {
      return password;
    }
  }

 }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword => {

let characters = (upperCase, lowerCase, numbers, specialChars);
specialCheck.checked ? (characters =+ specialChars) : "";
upperCheck.checked ? ( characters =+ upperCase) : "";
lowerCheck.checked ? ( characters =+ lowerCase) : "";
numberCheck.checked ? ( characters =+ numbers) : "";
passwordText.value = generatePassword = (passwordLength.value, characters );

});
