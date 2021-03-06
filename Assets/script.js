// Arrays of characters to be used as a source for random
// character generation.
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", ":", ";", "'", "<", ">", "?", ",", ".", "/"];
let numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Characters from the arrays will be joined into a string called "source."
let source = '';

function setUpPW () {

  // The length of the desired password
  let inputLength = prompt("How many characters would you like your password to contain?");

  if (inputLength < 8) {
    alert("Password length must be at least 8 characters.");
    return;
  } else if (inputLength > 128) {
    alert("Password length must less than 129 characters.");
    return;
  } else if (isNaN(inputLength)) {
    alert("Password length must be provided as a number.");
    return;
  }

  // Get special characters for source.
  let special = confirm("Click OK to confirm including special characters.")

  if (special) {
    source = source + specialCharacters.join('');
  }

  // Get numeric characters for source.
  let numeric = confirm("Click OK to confirm including numeric characters.")

  if (numeric) {
    source = source + numerals.join('');
  }

  // Get lowercase characters for source.
  let lower = confirm("Click OK to confirm including lowercase characters.")

  if (lower) {
    source = source + lowerCase.join('');
  }

  // Get uppercase characters for source.
  let upper = confirm("Click OK to confirm including uppercase characters.")

  if (upper) {
    source = source + upperCase.join('');
  }

  // Show password.
  if (source === '') {
    alert("You must select at least one character type.");
    return;
  }
  return makePassword(inputLength);
}

// Make password from source string.
function makePassword(pwLength) {
  let pw = '';
  for (let i = 0; i < pwLength; i++) {
    pw += source[Math.floor(Math.random() * source.length)];
  }
  return pw;
}

// Get references to the #copy and #generate elements
let copyBtn = document.querySelector("#copy");
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = setUpPW();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  // reset source string
  source = '';
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  var passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  alert(
    "Your password " + passwordText.value + " was copied to your clipboard."
  );
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy button
copyBtn.addEventListener("click", copyToClipboard);