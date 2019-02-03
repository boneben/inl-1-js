// INPUT ELEMENTS
var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['password_confirm'];
var country = document.forms['vform']['country'];
var tou = document.forms['vform']['tou'];
var notARobot = document.forms['vform']['notARobot'];
var about = document.forms['vform']['about'];

// ERROR ELEMENTS
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var country_error = document.getElementById('country_error');
var tou_error = document.getElementById('tou_error');
var notARobot_error = document.getElementById('notARobot_error');
var about_error = document.getElementById('about_error');

// EVENT LISTENERS
username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
country.addEventListener('blur', countryVerify, true);
tou.addEventListener('blur', touVerify, true);
notARobot.addEventListener('blur', notARobotVerify, true);
about.addEventListener('blur', aboutVerify, true);

// VALIDATION FUNCTION
function Validate() {

// variables for email input validation
var reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
var address = document.forms['vform']['email'].value;

  // validate username
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  // validate username length
  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    return false;
  }
  // validate password
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  // validate password length
  if (password.value.length < 3) {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password must be at least 3 characters";
    password.focus();
    return false;
  }
  // check if passwords match
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // validate email input
  if (reg.test(address) == false) {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Invalid Email Address. Please enter a valid Email Address";
    email.focus();
    return false;
  }

  // validate select
  if (country.selectedIndex == 0) {
    country.style.border = "1px solid red";
    document.getElementById('country_div').style.color = "red";
    country_error.textContent = "Select a country";
    country.focus();
    return false;
  }
  // validate checkbox
  if (!this.tou.checked) {
    document.getElementById('tou_div').style.color = "red";
    tou_error.textContent = "You must accept the terms of use";
    tou.focus();
    return false;
  }
  // validate radio
  if (!this.notARobot.checked) {
    document.getElementById('notARobot_div').style.color = "red";
    notARobot_error.textContent = "Confirm that you're not a robot";
    notARobot.focus();
    return false;
  }
  // validate textarea
  if (about.value == "") {
    about.style.border = "1px solid red";
    document.getElementById('about_div').style.color = "red";
    about_error.textContent = "A description is required";
    about.focus();
    return false;
  }
}
// EVENT HANDLER FUNCTIONS
function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
  if (password.value === password_confirm.value) {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
}
function emailVerify() {
  if (email.value != "") {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}
function countryVerify() {
    if (country.selectedIndex != 0) {
    country.style.border = "1px solid #5e6e66";
  	document.getElementById('country_div').style.color = "#5e6e66";
  	country_error.innerHTML = "";
  	return true;   
    }
}
function touVerify() {
    if (this.tou.checked) {
  	document.getElementById('tou_div').style.color = "#5e6e66";
  	tou_error.innerHTML = "";
  	return true;   
    }
}
function notARobotVerify() {
    if (this.notARobot.checked) {
    document.getElementById('notARobot_div').style.color = "#5e6e66";
  	notARobot_error.innerHTML = "";
  	return true;       
    }
}
function aboutVerify() {
    if (about.value != "") {
     about.style.border = "1px solid #5e6e66";
     document.getElementById('about_div').style.color = "#5e6e66";
     about_error.innerHTML = "";
     return true;
    }
  }