const userid = document.getElementById("userid");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Name = document.getElementById("name");
const sex = document.getElementById("sex");
const language = document.getElementById("language");
const address = document.getElementById("address");
const zip = document.getElementById("zip-code");
const country = document.getElementById("country");
const about = document.getElementById("about");

const useridfeed = document.getElementById("useridfeed");
const emailfeed = document.getElementById("emailfeed");
const passwordfeed = document.getElementById("passwordfeed");
const namefeed = document.getElementById("namefeed");
const sexfeed = document.getElementById("sexfeed");
const languagefeed = document.getElementById("languagefeed");
const addressfeed = document.getElementById("addressfeed");
const zipfeed = document.getElementById("zipcodefeed");
const countryfeed = document.getElementById("countryfeed");

const submitbutton = document.getElementsByClassName("submit-button");

const form = document.getElementById("form");
const formData = new FormData(form);

let special = "~`!@#$%^&*()-_=+[{]}\\|;:\'\",<.>/?".split('');
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
let lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
let numbers = "0123456789".split('');

function checkId(){
    useridfeed.innerHTML = "";
    let valid = true;

    if (userid.value == ""){
        useridfeed.innerHTML += "<li>User ID is required</li>";
        valid = false;
    }

    if (userid.value.length < 5 || userid.value.length > 12){
        useridfeed.innerHTML += "<li>User ID must be of length 5 to 12</li>";
        valid = false;
    }

    if (!uppercase.includes(userid.value.charAt(0))){
        useridfeed.innerHTML += "<li>User ID must start with an uppercase letter</li>";
        valid = false;
    }

    if (!numbers.includes(userid.value.charAt(userid.value.length - 1)) &&
        !special.includes(userid.value.charAt(userid.value.length - 1))){
        useridfeed.innerHTML += "<li>User ID must end with a number or a special character</li>";
        valid = false;
    }

    if (valid){
        useridfeed.innerHTML += "Looks good!";
    }
}

function checkEmail(){
    if (email.value == ""){
        emailfeed.innerHTML = "<li>E-mail address is required</li>"; 
    }else if (email.value.indexOf("@") < 1 ||
        email.value.substring(email.value.indexOf("@")).indexOf(".") <= 1 ||
        email.value.substring(email.value.indexOf("@")).indexOf(".") == email.value.substring(email.value.indexOf("@")).length - 1){
        emailfeed.innerHTML = "<li>Please provide a valid e-mail address</li>";
    }else{
        emailfeed.innerHTML = "Looks good!";
    }
}

function checkPassword(){
    passwordfeed.innerHTML = "";
    let valid = true;

    if (password.value == ""){
        passwordfeed.innerHTML += "<li>Password is required</li>";
        valid = false;
    }

    if (password.value.length < 12){
        passwordfeed.innerHTML += "<li>Password must be at least 12 characters long</li>";
        valid = false;
    }

    if (!password.value.split('').some((char) => uppercase.includes(char))){
        passwordfeed.innerHTML += "<li>Password must contain an uppercase letter</li>";
        valid = false;
    }

    if (!password.value.split('').some((char) => lowercase.includes(char))){
        passwordfeed.innerHTML += "<li>Password must contain a lowercase letter</li>";
        valid = false;
    }

    if (!password.value.split('').some((char) => numbers.includes(char))){
        passwordfeed.innerHTML += "<li>Password must contain a number</li>";
        valid = false;
    }

    if (!password.value.split('').some((char) => special.includes(char))){
        passwordfeed.innerHTML += "<li>Password must contain a symbol</li>";
        valid = false;
    }

    if (password.value.length >= 12 && password.value.length < 14){
        passwordfeed.innerHTML += "Password is weak<br>";
    }

    if (valid){
        passwordfeed.innerHTML += "Looks good!";
    }
}

function checkName(){
    if (Name.value == ""){
        namefeed.innerHTML = "<li>Name is required</li>";
    }else if (Name.value.split('').some((char) => numbers.includes(char)) ||
                Name.value.split('').some((char) => special.includes(char))){
        namefeed.innerHTML = "<li>Name can only contain the alphabet</li>";
    }else{
        namefeed.innerHTML = "Looks good!";
    }
}

function checkCountry(){
    if (country.value == ""){
        countryfeed.innerHTML = "<li>Country is required</li>";
    }else{
        countryfeed.innerHTML = "Looks good!";
    }
}

function checkSex(){
    if (sex.value == ""){
        sexfeed.innerHTML = "<li>Sex is required</li>";
    }
}

function checkLanguage(){
    if (language.value == ""){
        languagefeed.innerHTML = "<li>Language is required</li>";
    }else{
        languagefeed.innerHTML = "Looks good!";
    }
}

function checkZip(){
    if (zip.value == ""){
        zipfeed.innerHTML = "<li>Zip code is required</li>";
    }else if (zip.value.length != 6 ||
            !(zip.value.substring(0, 4) >= 0 || zip.value.substring(0, 4) <= 9999) ||
            !(uppercase.includes(zip.value.charAt(4)) || lowercase.includes(zip.value.charAt(4))) ||
            !(uppercase.includes(zip.value.charAt(5)) || lowercase.includes(zip.value.charAt(5)))){
        zipfeed.innerHTML = "<li>Please enter a valid Zip code</li>";
    }else{
        zipfeed.innerHTML = "Looks good!";
    }
}

function checkAddress(){
    if (address.value == ""){
        addressfeed.innerHTML = "";
    }else{
        addressfeed.innerHTML = "Looks good!";
    }
}

const OnSubmit = () => {
    alert(`User ID: ${userid.value}
Email: ${email.value}
Password: ${password.value}
Name: ${Name.value}
Sex: ${sex.value}
Language: ${language.value}
Address: ${address.value}
Zip code: ${zip.value}
Country: ${country.value}
About: ${about.value}`);
}

userid.addEventListener("input", checkId);
password.addEventListener("input", checkPassword);
email.addEventListener("input", checkEmail);
Name.addEventListener("input", checkName);
country.addEventListener("input", checkCountry);
sex.addEventListener("input", checkSex);
language.addEventListener("input", checkLanguage);
zip.addEventListener("input", checkZip);
address.addEventListener("input", checkAddress);