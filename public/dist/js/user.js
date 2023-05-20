function blurInput(input, err) {
  err.textContent = "";
  input.style.borderColor = "";
}

const validateUserForm = () => {
  let input;
  let err;
  input = document.getElementById("name");
  err = document.getElementById("nameErr");
  if (input.value == "") {
    err.textContent = "User name Is required!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("user_role");
  err = document.getElementById("roleErr");
  if (input.value == "") {
    err.textContent = "User role not selected!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("email");
  err = document.getElementById("emailErr");
  if (input.value == "") {
    err.textContent = "user email address not given!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("station");
  err = document.getElementById("stationErr");
  if (input.value == "") {
    err.textContent = "Work Station is required!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("department");
  err = document.getElementById("departmentErr");
  if (input.value == "") {
    err.textContent = "Department must be selected!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("phone");
  err = document.getElementById("phoneErr");
  if (input.value == "") {
    input.style.borderColor = "red";
    err.textContent = "Phone number is can't be empty!";
    return false;
  }
  blurInput(input, err);
  return true;
};
