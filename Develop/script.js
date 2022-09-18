// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var userLength = window.prompt("what is the minimum amunt of charaters you would like? (8-126)")
  var userLowerCase = window.confirm("Would you like lowercase letters?");
  var userUpperCase = window.confirm("Would you like uppercase letters?");
  var userNumbers = window.confirm("Would you like numerical characters?");
  var userSpecialCharacters = window.confirm("Would you like special characters?");
if (userLowerCase & !userUpperCase & !userNumbers & !userSpecialCharacters){
  function generate(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(generate(userLength));
} else if (userLowerCase & userUpperCase & userNumbers & userSpecialCharacters)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

