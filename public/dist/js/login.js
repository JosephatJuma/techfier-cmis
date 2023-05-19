const id_form = document.getElementById("id_form");
const email_form = document.getElementById("email_form");

const showIdForm = () => {
  id_form.style.display = "block";
  email_form.style.display = "none";
};

const showEmailForm = () => {
  id_form.style.display = "none";
  email_form.style.display = "block";
};
