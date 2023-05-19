function blurInput(input, err) {
  err.textContent = "";
  input.style.borderColor = "";
}

const validatePartsForm = () => {
  let input;
  let err;
  input = document.getElementById("part_name");
  err = document.getElementById("nameErr");
  if (input.value == "") {
    err.textContent = "Part name Is required!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("stock_number");
  err = document.getElementById("stockNumberErr");
  if (input.value == "") {
    err.textContent = "Stock number is required!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("description");
  err = document.getElementById("descriptionErr");
  if (input.value == "") {
    err.textContent = "Please provide description!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("quantity");
  err = document.getElementById("quantityErr");
  if (input.value == "") {
    err.textContent = "Quantity is required!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("location");
  err = document.getElementById("locationErr");
  if (input.value == "") {
    err.textContent = "Location is needed!";
    input.style.borderColor = "red";
    return false;
  }
  blurInput(input, err);
  input = document.getElementById("drawing");
  err = document.getElementById("drawingErr");
  let image = document.forms["parts_form"]["drawing"].value;
  if (!image) {
    input.focus();
    input.style.borderColor = "red";
    err.textContent = "Please add the schematic drawing of the parts!";
    return false;
  }
  blurInput(input, err);
  return true;
};
