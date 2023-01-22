const userId = document.getElementById('userid');
const email = document.getElementById('email');
const password = document.getElementById('password');
const nameF = document.getElementById('name');
const sex =  document.getElementById('sex');
const language =  document.getElementById('language');
const zipcode =  document.getElementById('zipcode');
const country = document.getElementById('country');
const address = document.getElementById('address');
const about = document.getElementById('about');

const useridfeed =  document.getElementById('useridfeed');
const emailfeed = document.getElementById('emailfeed');
const passwordfeed = document.getElementById('passwordfeed');
const namefeed = document.getElementById('namefeed');
const sexfeed = document.getElementById('sexfeed');
const languagefeed = document.getElementById('languagefeed');
const countryfeed = document.getElementById('countryfeed');
const zipcodefeed = document.getElementById('zipcodefeed');

const clicknum = document.getElementById('clicknum');
const timeField = document.getElementById('time');
const keyspressedF = document.getElementById('keyspressed');
const charTyped = document.getElementById('char-typed');

let mouseClicksCounter = 0;
let keysPressed = 0;
let deleteKeys = 0;
const timeEntered = Date.now();

userId.addEventListener('input', () => {
    useridfeed.innerHTML = '';
    if (!(/[A-Z]/.test(userId.value[0]))) useridfeed.innerHTML += '<li>Start with capital letter!</li>';
    if (!(/^([a-zA-Z0-9_-]){5,9}$/.test(userId.value))) useridfeed.innerHTML += '<li>Length must be between 5 to 9 characters long!</li>';
    if (!(/[0-9]/.test(userId.value[userId.value.length - 1]))) useridfeed.innerHTML += '<li>Must end with a number</li>';
    
    if (useridfeed.innerHTML == '') useridfeed.innerHTML = 'looks good!';
});

email.addEventListener('input', () => {
    emailfeed.innerHTML = '';
    if (!(/@/.test(email.value))) emailfeed.innerHTML += '<li>Must be valid email</li>';
    else if (!(/\./.test(email.value))) emailfeed.innerHTML += '<li>Must be valid email</li>';
    
    if (emailfeed.innerHTML == '') emailfeed.innerHTML += 'looks good!';
});

password.addEventListener('input', () => {
    passwordfeed.innerHTML = '';
    if (!(/[0-9a-zA-Z]{12,}/.test(password.value))) passwordfeed.innerHTML += '<li>Length must be at least 12 characters long!</li>'
    if (!(/[a-z]/.test(password.value))) passwordfeed.innerHTML += '<li>Must contain lowercase characters</li>';
    if (!(/[A-Z]/.test(password.value))) passwordfeed.innerHTML += '<li>Must contain uppercase characters</li>';
    if (!(/[0-9]/.test(password.value))) passwordfeed.innerHTML += '<li>Must contain numerical characters</li>';
    if (!(/[^A-Za-z0-9]/.test(password.value))) passwordfeed.innerHTML += '<li>Must contain symbols</li>';
    

    if (passwordfeed.innerHTML == '' && /[0-9a-zA-Z]{12}$/.test(password.value)) passwordfeed.innerHTML += 'A 14 characters long password would be better';
    else if (passwordfeed.innerHTML == '' ) passwordfeed.innerHTML += 'looks good!';
});

nameF.addEventListener('input', () => {
    namefeed.innerHTML = '';
    if (!(/[a-zA-Z]{1,}/.test(nameF.value))) namefeed.innerHTML += '<li>Name is a mandatory field</li>';
    if ((/[^a-zA-Z]/.test(nameF.value))) namefeed.innerHTML += '<li>Must only contain alphabetic characters</li>';
    
    if (namefeed.innerHTML == '') namefeed.innerHTML += 'looks good!';
});

sex.addEventListener('input', () => {
    sexfeed.innerHTML = '';
    if (!(/[0-9a-zA-Z]{1,}/.test(sex.value))) sexfeed.innerHTML += '<li>Sex is a mandatory field</li>';
    
    if (sexfeed.innerHTML == '') sexfeed.innerHTML += 'looks good!';
});

language.addEventListener('input', () => {
    languagefeed.innerHTML = '';
    if (!(/[0-9a-zA-Z]{1,}/.test(language.value))) languagefeed.innerHTML += '<li>Language is a mandatory field</li>';
    
    if (languagefeed.innerHTML == '') languagefeed.innerHTML += 'looks good!';
});

country.addEventListener('input', () => {
    countryfeed.innerHTML = '';
    if (!(/[0-9a-zA-Z]{1,}/.test(country.value))) countryfeed.innerHTML += '<li>Counrty is a mandatory field</li>';
    
    if (useridfeed.innerHTML == '') countryfeed.innerHTML += 'looks good!';
});

zipcode.addEventListener('input', () => {
    zipcodefeed.innerHTML = '';
    if (!(/[0-9]{4}/.test(zipcode.value.substring(0, 4)))) zipcodefeed.innerHTML += '<li>Must be valid Zip code</li>';
    else if (!(/[a-zA-Z]{2}/.test(zipcode.value.substring(4, 6)))) zipcodefeed.innerHTML += '<li>Must be valid Zip code</li>';
    
    if (zipcodefeed.innerHTML == '') zipcodefeed.innerHTML = 'looks good!';
});

addEventListener('click', () => { mouseClicksCounter += 1; });
addEventListener('keypress', () => { keysPressed += 1; });
addEventListener('keydown', (event)  => {
    if (event.key === "Backspace" || event.key === "Delete") deleteKeys += 1;
});

const onSubmit = () => {
    if (
        userId.value == ''
        || email.value == ''
        || password.value == ''
        || nameF.value == ''
        || sex.value == ''
        || language.value == ''
        || zipcode.value == ''
        || country.value == ''
    ) alert('Please fill all mandatory fields');
    else alert (`
        UserId ${userId.value}
        Email ${email.value}
        Password ${password.value}
        Name ${nameF.value}
        Sex ${sex.value}
        Language ${language.value}
        Zipcode ${zipcode.value}
        Country ${country.value}
        Address ${address.value}
        About ${about.value}
    `)

    const timeSpent = (Date.now() - timeEntered) / 1000;
    clicknum.innerHTML = `<h5>Number of mouse clicks: ${mouseClicksCounter}</h5>`;
    timeField.innerHTML = `<h5>Total time spent: ${Math.floor(timeSpent / 60)} minutes and ${Math.round(timeSpent % 60)}</h5>`
    keyspressedF.innerHTML = `<h5>Total key presses: ${keysPressed}</h5>`
    charTyped.innerHTML = `<h5>Total number of characters typed: ${keysPressed - deleteKeys}</h5>`;
} 

