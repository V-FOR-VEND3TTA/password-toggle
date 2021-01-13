function togglePassword() {
  let password = document.getElementById("password");
  let showPassword = document.getElementById("show");
  let hidePassword = document.getElementById("hide");

  if (password.type === "password") {
    password.type = "text";
    showPassword.style.display = "block";
    hidePassword.style.display = "none";
  } else {
    password.type = "password";
    showPassword.style.display = "block";
    hidePassword.style.display = "block";
  }
}
