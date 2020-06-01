// Arrays of characters to be used as a source for random
// character generation.
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", ":", ";", "'", "<", ">", "?", ",", ".", "/"];
let numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Get reference to the Copy to Clipboard button
let copyBtn = document.querySelector("#copy");

// Add event listener to Copy to Clipboard button
copyBtn.addEventListener("click", copyToClipboard);

// An array shuffler based on the Fisher-Yates shuffle algorithm
function shuffler(arr) {
  let newPosition,
      temp;

  for (let i = arr.length - 1; i > 0; i--) {
    newPosition = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPosition];
    arr[newPosition] = temp;
  }
  return arr;
};

// Pull a random character from an array.
function randomPick(arr) {
  // Pick a character from a random index.
  let pickIndex = Math.floor(Math.random() * arr.length);
  let randomEl = arr[pickIndex];
  return randomEl;
};

// Copy the password to the clipboard.
function copyToClipboard() {
  var passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  alert(
    "Your password " + passwordText.value + " was copied to your clipboard."
  );
};

function makePassword() {
  event.preventDefault();

  // A string containing the sources for the password characters
  let source = "";
  // The password
  let pw = "";
  // An array that ensures at least one of each type is used
  let requiredCharacters = [];
  // The users choice of password length
  const characterNumber = document.getElementById("characterNum").value;

  if (!characterNumber) {
    alert("You must enter a number.");
    return;
  };

  // Check for types of characters that will be used for the password.

  if (special.checked) {
    source += specialCharacters.join('');
    requiredCharacters.push(randomPick(specialCharacters));
  };

  if (numeral.checked) {
    source += numerals.join('');
    requiredCharacters.push(randomPick(numerals));
  };

  if (lowercase.checked) {
    source += lowerCaseLetters.join('');
    requiredCharacters.push(randomPick(lowerCaseLetters));
  };

  if (uppercase.checked) {
    source += upperCaseLetter.join('');
    requiredCharacters.push(randomPick(upperCaseLetter));
  };

  // Create password from source string.
  for (let i = 0; i < characterNumber; i++) {
    pw += randomPick(source);
    if (source === '') {
      // Return fail message if no character types were chosen.
      alert("You must select at least one type of character.");
      return;
    };
  };

  // Split the password for required character insertion.
  pw = pw.split('');

  // Insert the required characters into the password.
  for (let i = 0; i < requiredCharacters.length; i++) {
    // Insert the required characters into the password.
    pw[i] = requiredCharacters[i];
  };
  
  // Shuffle the required characters into the password.
  pw = shuffler(pw).join('');

  let passwordText = document.querySelector("#password");

  // Print password to web page.
  passwordText.value = pw;

  // Enable Copy to Clipboard button
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
};
