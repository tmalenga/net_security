/*
- Welcome user to program
- Create prompt for the lenghth of the pw & save this in a variable
- While loop to ensure that a user picks an appropriate lenghth of pw
- Create statement to evaluate lenght of pw i.e. to be between 8 - 128 characters and save this in a variable
- Create prompt for the char types to incl in the pw (lowercase, uppercase, numeric &/ special chars) & save in variable
- for loop to add the characters that the user selected into the password. Loop to run for the length of the pw selected by user
- ****
*/

function generatePassword(){
  var lengthcheck = false
  var userpassword = ""
  var final_password = ""
  var letters = ("abcdefghjklmnopqrstivnfdbn")
  var uppercasletter = letters.toUpperCase()
  var usernumbers = ("1234567890")
  var special = ("!@#$%^&*()?")

// Assignment code here


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
