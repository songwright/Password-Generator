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

// Pull a random character from an array.
function randomPick(arr) {
  // Pick a charcter from a random index.
  let pickIndex = Math.floor(Math.random() * arr.length);
  let randomEl = arr[pickIndex];
  return randomEl;
}

// Copy the password to the clipboard.
function copyToClipboard() {
  var passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  alert(
    "Your password " + passwordText.value + " was copied to your clipboard."
  );
}

function makePassword() {
  event.preventDefault();
  
  let source = "";
  let pw = "";
  const characterNumber = document.getElementById("characterNum").value;

  if (!characterNumber) {
    alert("You must enter a number.");
    return;
  }

  // Check for types of characters that will be used for the password.

  if (special.checked) {
    source += specialCharacters.join('');
  }
  
  if (numeral.checked) {
    source += numerals.join('');
  }

  if (lowercase.checked) {
    source += lowerCaseLetters.join('');
  }
  
  if (uppercase.checked) {
    source += upperCaseLetter.join('');
  }

  for (let i = 0; i < characterNumber; i++) {
    pw += source[Math.floor(Math.random() * source.length)];
    if (source === '') {
      alert("You must select at least one type of character.");
      return;
    }
  }

  let passwordText = document.querySelector("#password");

  passwordText.value = pw;

  // Enable Copy to Clipboard button
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}
