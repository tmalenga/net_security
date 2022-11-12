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
   if (isNaN(password_length)){
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
  //Prompt to ask the user if they want to include uppercase letters and save the response to a variable, same for to ln 69
  uppercasechoice = prompt("Do you want uppercase letters?: ")
    if (uppercasechoice.toUpperCase()=="NO" || uppercasechoice.toUpperCase()=="N"){
      alert("You have chosen no upper case letters")
    }
    else if(uppercasechoice.toUpperCase()=="YES" || uppercasechoice.toUpperCase()=="Y"){
      alert("Your password will be stronger for having CAPITALS!")
      userpassword += uppercasletter
    }
  lowercasechoice = prompt("Do you want lowerrcase letters?: ")
    if (lowercasechoice.toUpperCase()=="NO" || lowercasechoice.toUpperCase()=="N" || lowercasechoice == null){
      alert("You have chosen no lower case letters")
    }
    else if(lowercasechoice.toUpperCase()=="YES" || lowercasechoice.toUpperCase()=="Y"){
      alert("Your password will be stronger for going looooooooowwwwwah!")
      userpassword += letters
    }
  numbers = prompt("Do you want to include numbers?: ")
    if (numbers.toUpperCase()=="NO" || numbers.toUpperCase()=="N"){
      alert("You have chosen no numbers")
    }
    else if(numbers.toUpperCase()=="YES" || numbers.toUpperCase()=="Y"){
      alert("A number a day keeps the hacker away :)")
      userpassword += usernumbers
    }
  specialchars = prompt("Do you want to include special characters?: ")
    if (specialchars.toUpperCase()=="NO" || specialchars.toUpperCase()=="N"){
      alert("You have chosen no special people!!")
    }
    else if(specialchars.toUpperCase()=="YES" || specialchars.toUpperCase()=="Y"){
      alert("You are special!!! :)")
      userpassword += special
    }

}//**closing function

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
