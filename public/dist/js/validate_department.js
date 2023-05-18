const validate = () => {
  let input = document.getElementById("name");
  let err = document.getElementById("nameErr");
  if (input.value == "") {
    err.textContent = "Department name is required!";
    input.style.borderColor = "red";
    input.focus();
    return false;
  } else {
    err.textContent = "";
    input.style.borderColor = "";
  }
  return true;
};

const form = document.getElementById("department_form");
const departments = document.getElementById("departments");

const addNewDepartment = () => {
  form.style.display = "block";
  departments.style.display = "none";
};

const cancelAdd = () => {
  form.style.display = "none";
  departments.style.display = "flex";
};
