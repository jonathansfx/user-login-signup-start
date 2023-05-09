// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  console.log("Sign Up Btn Clicked");
  loadUsers();
  saveUsers();
  addUser();
  newUser();
}
// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  let userSignIn = document.getElementById("usersigninHTML").value;
  let passSignIn = document.getElementById("passsigninHTML").value;
  if (userSignIn == loadUsers(users) && passSignIn == loadUsers(users)) {
    alert("LOGIN SUCESSFUL");
  } else {
    alert("UNSUCESSFUL LOGIN");
  }
  console.log("Sign In Btn Clicked");
}

// HELPER FUNCTIONS
users = loadUsers();

function loadUsers() {
  let jsonUsers = localStorage.getItem("contacts");
  return JSON.parse(jsonUsers) ?? [];
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function addUser() {
  user = document.getElementById("userHTML").value;
  pass = document.getElementById("passHTML").value;
  if (user == loadUsers(user)) {
    alert("Username already in Use.");
  } else {
    users.push(newUser(user, pass));
    saveUsers();
  }
}
function newUser(username, password) {
  return {
    user: username,
    pass: password,
  };
}
