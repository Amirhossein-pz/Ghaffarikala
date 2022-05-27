// Get the elements
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formSub = document.getElementById("form-sub");

// Load event listeners
nameInput.addEventListener("blur", validateName);
lastNameInput.addEventListener("blur", validateLastName);
phone.addEventListener("blur", validatePhone);
email.addEventListener("blur", validateEmail);
formSub.addEventListener("click", showAlert);

// Validate name
function validateName() {
  const re = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]{2,13}$/;

  if (!re.test(nameInput.value)) {
    nameInput.classList.add("is-invalid");
  } else {
    nameInput.classList.remove("is-invalid");
  }
}

// Validate lastname
function validateLastName() {
  const re = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]{2,13}$/;

  if (!re.test(lastNameInput.value)) {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.remove("is-invalid");
  }
}

// Validate Phonenumber
function validatePhone() {
  const re = /^[0-9]{11}/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}

// Validate email
function validateEmail() {
  const re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z_\-\.]+)\.([a-zA-z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function showAlert() {
  if (
    nameInput.value === "" ||
    lastNameInput.value === "" ||
    phone.value === "" ||
    email.value === "" ||
    message.value === ""
  ) {
    formSub.disabled = true;
    ui("لطفا ابتدا فیلد های موردنیاز را پر کنید ", "bg-danger");
  } else {
    ui("پیام شما با موفقیت ارسال شد ", "bg-success");
  }
}

function ui(message, className) {
  const div = document.createElement("div");

  div.className = `alert ${className} text-right text-pr`;

  div.appendChild(document.createTextNode(message));

  const card = document.querySelector("#card");

  const form = document.querySelector("#form");

  card.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector(".alert").remove();
    formSub.disabled = false;
  }, 4000);
}
