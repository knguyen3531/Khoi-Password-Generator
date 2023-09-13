// Character sets
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericChars = '0123456789';
var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Function to generate password
function generatePassword() {
  // Prompt for password length
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  // Validate the password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    return '';
  }

  // Prompt for character types
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // Check if at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return '';
  }

  // Create a character set based on selected criteria
  var characterSet = '';
  if (includeLowercase) characterSet += lowercaseChars;
  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumeric) characterSet += numericChars;
  if (includeSpecialChars) characterSet += specialChars;

  // Generate the password
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
