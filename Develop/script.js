
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("textarea");
var lenght;
var choices;
var confirmNumber;
var confirmLowercase;
var confirmCharacter;
var confirmUppercase; 

var together = "";

character = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
alpha = "abcdefghijklmnopqrstuvwxyz".split("");
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function writePassword() {
    var together = ""
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  //     passwordText.value = password;
      lenght = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
        if (!lenght) {
          alert("This needs a value");
      } else if (lenght < 8 || lenght > 128) {  
          lenght = parseInt(prompt("You must choose between 8 and 128"));
  
    } else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");{

//if confirms 1 variable              

            if (confirmNumber && !confirmLowercase && !confirmCharacter && !confirmUppercase){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * number.length)];
                    together += number[pickChoices];
                }generatePassword.textContent = together
            }

            if (confirmLowercase && !confirmNumber && !confirmCharacter && !confirmUppercase){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * alpha.length)];
                    together += alpha[pickChoices];
                }generatePassword.textContent = together
            }

            if (confirmCharacter && !confirmLowercase && !confirmUppercase && !confirmNumber){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * character.length)];
                    together += character[pickChoices];
                }generatePassword.textContent = together
            }

            if (confirmUppercase && !confirmLowercase && !confirmCharacter && !confirmNumber){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * upper.length)];
                    together += upper[pickChoices];
                }generatePassword.textContent = together
            }

//if confirms 2 variables        

            if (confirmLowercase && confirmNumber){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * alpha.concat(number).length)];
                    together += alpha.concat(number)[pickChoices];
                }generatePassword.textContent = together
             }

             if (confirmLowercase && confirmCharacter){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * alpha.concat(character).length)];
                    together += alpha.concat(character)[pickChoices];
                }generatePassword.textContent = together
             }

             if (confirmLowercase && confirmUppercase){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * alpha.concat(upper).length)];
                    together += alpha.concat(upper)[pickChoices];
                }generatePassword.textContent = together
             }

             if (confirmNumber && confirmCharacter){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * number.concat(character).length)];
                    together += number.concat(character)[pickChoices];
                }generatePassword.textContent = together
             }

             if (confirmNumber && confirmUppercase){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * number.concat(upper).length)];
                    together += number.concat(upper)[pickChoices];
                }generatePassword.textContent = together
             }

             if (confirmCharacter && confirmUppercase){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * character.concat(upper).length)];
                    together += character.concat(upper)[pickChoices];
                }generatePassword.textContent = together
             }

//if confirms 3 variables        

            if (confirmLowercase && confirmNumber && confirmUppercase){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * alpha.concat(number, upper).length)];
                    together += alpha.concat(number, upper)[pickChoices];
                }generatePassword.textContent = together
             }

             if (confirmLowercase && confirmCharacter && confirmUppercase){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * alpha.concat(character, upper).length)];
                    together += alpha.concat(character, upper)[pickChoices];
                }generatePassword.textContent = together
             }

             if (confirmLowercase && confirmNumber && confirmCharacter){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * alpha.concat(number, character).length)];
                    together += alpha.concat(number, character)[pickChoices];
                }generatePassword.textContent = together
             }

             if (confirmNumber && confirmCharacter && confirmUppercase){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * number.concat(character, upper).length)];
                    together += number.concat(character, upper)[pickChoices];
                }generatePassword.textContent = together
             }

//if confirms 4 variables        

            if (confirmLowercase && confirmNumber && confirmUppercase && confirmCharacter){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * alpha.concat(number, upper, character).length)];
                    together += alpha.concat(number, upper, character)[pickChoices];
                }generatePassword.textContent = together
             }
         };
    }
};

// Adding event listener to generate button
generateBtn.addEventListener("click", writePassword);