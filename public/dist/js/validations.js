function blurInput(input, err) {
  err.textContent = "";
  input.style.borderColor = "";
}

const validateEquipmentForm = () => {
  let input;
  let err;
  input = document.getElementById("id");
  err = document.getElementById("id_err");
  if (input.value == "") {
    err.textContent = "Id is required!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("equipment_name");
  err = document.getElementById("name_err");
  if (input.value == "") {
    err.textContent = "Equipment Name is required!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("department");
  err = document.getElementById("department_err");
  if (input.value == "") {
    err.textContent = "You must select the deaprtment";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("description");
  err = document.getElementById("description_err");
  if (input.value == "") {
    err.textContent = "You must provide description for this equipment!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("image");
  err = document.getElementById("image_err");
  let image = document.forms["equipment_form"]["image"].value;
  if (!image) {
    input.focus();
    input.style.borderColor = "red";
    err.textContent = "Please select the image of the equipemnt!";
    return false;
  }
  blurInput(input, err);
  return true;
};

// Add event listeners to all input fields
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", blurInput);
});
// const focusForm = () => {
//   document.forms["equipment_form"]["id"].;
// };
