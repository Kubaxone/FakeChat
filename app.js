// USERS STORAGE
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "{}");
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// CURRENT USER
function setUser(u) {
  localStorage.setItem("loggedUser", u);
}

function getUser() {
  return localStorage.getItem("loggedUser");
}
