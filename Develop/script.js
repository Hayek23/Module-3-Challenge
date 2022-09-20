// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generate(length, characters){
  var password = '';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() *
    charactersLength))
  }
  return password
}

function generatePassword() {
  var userLength = window.prompt("what is the minimum amunt of charaters you would like? (8-126)")
  var userLowerCase = window.confirm("Would you like lowercase letters?");
  var userUpperCase = window.confirm("Would you like uppercase letters?");
  var userNumbers = window.confirm("Would you like numerical characters?");
  var userSpecialCharacters = window.confirm("Would you like special characters?");
if (userLowerCase & !userUpperCase & !userNumbers & !userSpecialCharacters){

 var password= generate(userLength, "abcdefghijklmnopqrstuvwxyz");
  return password;

} else if (!userLowerCase & userUpperCase & !userNumbers & !userSpecialCharacters){

  var password = generate(userLength, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  return password;

} else if (!userLowerCase & !userUpperCase & userNumbers & !userSpecialCharacters){

  var password = generate(userLength, "1234567890");
  return password;

} else if (!userLowerCase & !userUpperCase & !userNumbers & userSpecialCharacters){

  var password = generate(userLength, "!@#$%^&*()_+=-.,");
  return password;

} else if (userLowerCase & userUpperCase & !userNumbers & !userSpecialCharacters){

  var password = generate(userLength, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
  return password;

} else if (!userLowerCase & userUpperCase & userNumbers & !userSpecialCharacters){

  var password = generate(userLength, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
  return password;

} else if (userLowerCase & userUpperCase & userNumbers & userSpecialCharacters){

  var password = generate(userLength, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+");
  return password;

} else if (!userLowerCase & userUpperCase & userNumbers & !userSpecialCharacters){

  var password = generate(userLength, "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
  return password;

} else if (!userLowerCase & userUpperCase & userNumbers & userSpecialCharacters){

  var password = generate(userLength, "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
  return password;

} else if (!userLowerCase & userUpperCase & !userNumbers & userSpecialCharacters){

  var password = generate(userLength, "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$^%&*()_+");
  return password;

} else if (!userLowerCase & !userUpperCase & userNumbers & userSpecialCharacters){

  var password = generate(userLength, "1234567890!@#$%^&*()_+");
  return password;

} else if (userLowerCase & !userUpperCase & !userNumbers & userSpecialCharacters){

  var password = generate(userLength, "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+");
  return password;

} else if (userLowerCase & !userUpperCase & userNumbers & !userSpecialCharacters){
  
  var password = generate(userLength, "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+");
  return password;

} else if (userLowerCase & userUpperCase & userNumbers & !userSpecialCharacters){

  var password = generate(userLength, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")

console.log(generate(userLength));

}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

