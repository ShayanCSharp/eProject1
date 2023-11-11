
let subs = () => {
  let email = document.querySelector("#email");
  let email_vali = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$/;

  if (email.value == "") {
    email.style.border = "1px solid red";
    return false;
  } else if (!email_vali.test(email.value)) {
    email.style.border = "1px solid red";
    return false;
  } else {
    email.style.border = "";
    return true;
  }
};

function show_hide() {
  let passwordInput = document.querySelector("#passwordInput");
  let showIcon = document.querySelector("#show");
  let hideIcon = document.querySelector("#hide");

  showIcon.addEventListener("click", function () {
    passwordInput.type = "text"; // Show the password
    showIcon.style.display = "none";
    hideIcon.style.display = "block";
  });

  hideIcon.addEventListener("click", function () {
    passwordInput.type = "password"; // Hide the password
    hideIcon.style.display = "none";
    showIcon.style.display = "block";
  });
}

show_hide();

function show_hide1() {
  let passwordInput = document.querySelector("#RepasswordInput");
  let showIcon = document.querySelector("#show1");
  let hideIcon = document.querySelector("#hide1");

  showIcon.addEventListener("click", function () {
    passwordInput.type = "text"; // Show the password
    showIcon.style.display = "none";
    hideIcon.style.display = "block";
  });

  hideIcon.addEventListener("click", function () {
    passwordInput.type = "password"; // Hide the password
    hideIcon.style.display = "none";
    showIcon.style.display = "block";
  });
}

show_hide1();

function name_vali() {
  let email = document.querySelector("#name");
  let error = document.querySelector("#nameError");
  let email_vali_regex = /^[a-zA-Z ]{2,20}$/;

  if (email.value == "") {
    error.style.borderBottom = "1px solid #ff0000";
    return false;
  } else if (!email_vali_regex.test(email.value)) {
    error.style.borderBottom = "1px solid #ff0000";
    return false;
  } else {
    error.style.borderBottom = "";
    return true;
  }
}

function email_vali() {
  let email = document.querySelector("#emailINP");
  let error = document.querySelector("#emailError");
  let email_vali_regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;

  if (email.value == "") {
    error.style.borderBottom = "1px solid #ff0000";
    return false;
  } else if (!email_vali_regex.test(email.value)) {
    error.style.borderBottom = "1px solid #ff0000";
    return false;
  } else {
    error.style.borderBottom = "";
    return true;
  }
}

function pass_vali() {
  let email = document.querySelector("#passwordInput");
  let error = document.querySelector("#pass");
  let email_vali_regex = /^[a-zA-Z0-9.-_]{8,25}$/;

  if (email.value == "") {
    error.style.borderBottom = "1px solid #ff0000";
    return false;
  } else if (!email_vali_regex.test(email.value)) {
    error.style.borderBottom = "1px solid #ff0000";
    return false;
  } else {
    error.style.borderBottom = "";
    return true;
  }
}

function Repass_vali() {
  let email = document.querySelector("#RepasswordInput");
  let email1 = document.querySelector("#passwordInput");
  let error = document.querySelector("#pass1");

  if (email.value == "") {
    error.style.borderBottom = "1px solid #ff0000";
    return false;
  } else if (email.value != email1.value) {
    error.style.borderBottom = "1px solid #ff0000";
    return false;
  } else {
    error.style.borderBottom = "";
    return true;
  }
}

document.querySelector(".wrapper form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (name_vali() && email_vali() && pass_vali() && Repass_vali()) {
      Swal.fire(
        "Account Create",
        'Now login <a href="Login.html">Login<a/>',
        "success"
      );
    } else {
      Swal.fire("Error", "Please recheck the values", "error");
    }
  });
