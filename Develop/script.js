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

 //alert to prompt user to choose the length of the password. This loop will until user has selected a valid number
 alert("Welcome to the strongest password generator out there! Please select what parameters you would like to includ in your pw and we will generate this for you. If you decide to leave please click cancel")
 while (lengthcheck == false){
   var password_length = prompt("how long do you want your password to be?")
   if (isNaN(password_length) || password_length == null){
     alert("That is not a number please try again")
     lengthcheck=false
   }
   else if(password_length < 8 || password_length > 128){
     alert("Your password does not meet the length criteria - please try again")
     lengthcheck= false
   }
   else{
     alert("Your pw meets the length criteria being " + password_length + " long")
     lengthcheck=true
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
