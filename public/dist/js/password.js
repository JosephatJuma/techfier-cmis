const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$#!%*?&])([a-zA-Z0-9@$#!%*?&]{8,16})$/;

const clearErr = (inp, err) => {
  inp.style.borderColor = "";
  err.textContent = "";
};
const validatePasswords = () => {
  let err;
  let confirm = document.getElementById("confirm");
  let password = document.getElementById("password");
  err = document.getElementById("passErr");
  if (password.value == "") {
    password.focus();
    password.style.borderColor = "red";
    err.textContent = "Password can't be empty!";
    return false;
  } else if (!passwordRegex.test(password.value)) {
    password.focus();
    password.style.borderColor = "red";
    err.textContent =
      "Password does must contain numbers, upper & lowercase leetes and special characters and must be 8 characters long!";
    return false;
  } else {
    clearErr(password, err);
  }
  err = document.getElementById("confirmErr");
  if (confirm.value == "") {
    confirm.focus();
    confirm.style.borderColor = "red";
    err.textContent = "You must confirm password";
    return false;
  } else if (confirm.value !== password.value) {
    confirm.focus();
    confirm.style.borderColor = "red";
    err.textContent = "Passwords do not match!";
    return false;
  } else {
    clearErr(confirm, err);
  }
  return true;
};
