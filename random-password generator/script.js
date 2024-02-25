var upperSet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var lowerSet = `abcdefghijklmnopqrstuvwxyz`;
var numberSet = `1234567890`;
var symbolSet = `/><=+-_*&^%$#@!`;

// selectors
var passBox = document.querySelector("#pass-box");
var totalchar = document.querySelector("#total-char");
var upperInput = document.querySelector("#upper-case");
var lowerInput = document.querySelector("#lower-case");
var numberInput = document.querySelector("#numbers");
var symbolInput = document.querySelector("#symbols");

// function generateRandomData(dataSet){
// return dataSet[Math.floor(Math.random() * dataSet.length)];
// }

var generateRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

var generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += generateRandomData(upperSet);
    }
    if (lowerInput.checked) {
        password += generateRandomData(lowerSet);
    }

    if (numberInput.checked) {
        password += generateRandomData(numberSet);
    }
    if (symbolInput.checked) {
        password += generateRandomData(symbolSet);
    }

    if(password.length < totalchar.value){
        return generatePassword(password)
    }
   passBox.innerHTML =truncateString(password ,totalchar.value)
}

document.querySelector("#btn").addEventListener("click", function () {
    generatePassword()
})



function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}