const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log("Username:", username, "Password:", password);
  form.reset();
});
