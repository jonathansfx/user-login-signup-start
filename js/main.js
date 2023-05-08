// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  signUp();
  console.log("Sign In Btn Clicked");
}

let members = loadMembers();

function signUp() {
  addMember();
  newContact();
  loadMembers();
  saveMembers();
}

// HELPER FUNCTIONS

function addMember() {
  let username = document.getElementById("userHTML").value;
  let password = document.getElementById("passHTML").value;
  let confirmPassword = document.getElementById("passConfirmHTML").value;
  members.push(newContact(username, password, confirmPassword));
  saveContacts();
  displayAllContacts();
}

function newContact(username, password, confirmPassword) {
  return {
    username: username,
    password: password,
    confirmpass: confirmPassword,
  };
}

function loadMembers() {
  let jsonMembers = localStorage.getItem("members");
  return JSON.parse(jsonMembers) ?? [];
}

function saveMembers() {
  localStorage.setItem("members", JSON.stringify(members));
}

function checkLogin() {}
