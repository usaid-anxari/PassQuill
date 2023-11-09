const passwordBox = document.getElementById("password");
let passowrdLenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = '0123456789'
const symbles = ':;"<>^&*()_+=%$#@!`~{[}]|?'; 
let allChars = upperCase + lowerCase + number + symbles; 


let createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbles[Math.floor(Math.random() * symbles.length)];
  while (passowrdLenght > password.length) {
       password += allChars[Math.floor(Math.random() * allChars.length)]
  }
  passwordBox.value = password;
};

let copyPassword =()=>{
    passwordBox.select()
    document.execCommand('copy')
}