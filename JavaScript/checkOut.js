let main = document.querySelector("header");
let crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

let a = document.querySelector('.chat-box');


document.querySelector(".chat").addEventListener("click", function () {
  a.classList.toggle('visible');
});

const dynamicText = document.querySelector(".sub-head h3");
const words = ["Miroir's"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();

function name_vali() {
  let name = document.querySelector("#name");
  let error = document.querySelector("#error");
  let name_vali = /^[a-zA-Z ]{5,25}$/;

  if (name.value == "") {
    error.innerHTML = "Please enter your name";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else if (!name_vali.test(name.value)) {
    error.innerHTML =
      "Name length should be more then 5 and less then 20 letters";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else {
    error.innerHTML = "";
    error.style.color = "";
    name.style.outlineColor = "green";
    return true;
  }
}

function last_name_vali() {
  let name1 = document.querySelector("#Last_name");
  let error = document.querySelector("#error4");
  let name_vali = /^[a-zA-Z ]{2,15}$/;

  if (name1.value == "") {
    error.innerHTML = "Please enter your Last name";
    error.style.color = "red";
    name1.style.outlineColor = "red";
    return false;
  } else if (!name_vali.test(name1.value)) {
    error.innerHTML =
      "Name length should be more then 5 and less then 20 letters";
    error.style.color = "red";
    name1.style.outlineColor = "red";
    return false;
  } else {
    error.innerHTML = "";
    error.style.color = "";
    name1.style.outlineColor = "green";
    return true;
  }
}

function number_vali() {
  let name = document.querySelector("#phone");
  let error = document.querySelector("#error1");
  let number_vali = /^[0-9]{7,15}$/;

  if (name.value == "") {
    error.innerHTML = "Please enter your number";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else if (isNaN(name.value)) {
    error.innerHTML = "Please enter your number";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else if (!number_vali.test(name.value)) {
    error.innerHTML = "Please enter valid number";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else {
    error.innerHTML = "";
    error.style.color = "";
    name.style.outlineColor = "green";
    return true;
  }
}

function email_vali() {
  let name = document.querySelector("#email");
  let error = document.querySelector("#error2");
  let email_vali_regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;

  if (name.value == "") {
    error.innerHTML = "Please enter your email";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else if (!email_vali_regex.test(name.value)) {
    error.innerHTML = "Please enter valid email";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else {
    error.innerHTML = "";
    error.style.color = "";
    name.style.outlineColor = "green";
    return true;
  }
}

function loca_vali() {
  let name = document.querySelector("#loca");
  let error = document.querySelector("#error3");
  let email_vali_regex = /^[0-9A-Za-z\s\-\.,']+$/;

  if (name.value == "") {
    error.innerHTML = "Please enter your Address";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else if (!email_vali_regex.test(name.value)) {
    error.innerHTML = "Please enter valid Address";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else {
    error.innerHTML = "";
    error.style.color = "";
    name.style.outlineColor = "green";
    return true;
  }
}

let town_vali = () => {
  let town = document.querySelector("#Town");
  let error = document.querySelector("#townError");
  let vali = /^[a-zA-Z0-9 ]{2,25}$/;

  if (town.value == "") {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter your Town/City";
    return false;
  } else if (!vali.test(town.value)) {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter your Town/City";
    return false;
  } else {
    town.style.outlineColor = "green";
    error.innerHTML = "";
    return true;
  }
};

let zip_vali = () => {
  let town = document.querySelector("#zip");
  let error = document.querySelector("#zipError");
  let vali = /^[0-9]{2,10}$/;

  if (town.value == "") {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter your Zip/Postal";
    return false;
  } else if (!vali.test(town.value)) {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter your Zip/Postal";
    return false;
  } else {
    town.style.outlineColor = "green";
    error.innerHTML = "";
    return true;
  }
};

let card_holder_vali = () => {
  let town = document.querySelector("#card-name");
  let error = document.querySelector("#cardError");
  let vali = /^[a-zA-Z ]{2,15}$/;

  if (town.value == "") {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter Card Holder Name";
    return false;
  } else if (!vali.test(town.value)) {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter Valid Card Holder Name";
    return false;
  } else {
    town.style.outlineColor = "green";
    error.innerHTML = "";
    return true;
  }
};

let card_number_vali = () => {
  let town = document.querySelector("#card-number");
  let error = document.querySelector("#NumberError");
  let vali = /^[0-9]{16}$/;

  if (town.value == "") {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter Card Number";
    return false;
  } else if (!vali.test(town.value)) {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter Valid Card Number";
    return false;
  } else {
    town.style.outlineColor = "green";
    error.innerHTML = "";
    return true;
  }
};

let card_vari_vali = () => {
  let town = document.querySelector("#card-vari");
  let error = document.querySelector("#card_variError");
  let vali = /^[0-9]{4}$/;

  if (town.value == "") {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter Card Verification Number";
    return false;
  } else if (!vali.test(town.value)) {
    town.style.outlineColor = "red";
    error.innerHTML = "Please enter Valid Card Verification Number";
    return false;
  } else {
    town.style.outlineColor = "green";
    error.innerHTML = "";
    return true;
  }
};

document.querySelector('.m-main').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    let loca = document.querySelector('#loca').value;

    if (name_vali() && number_vali() && email_vali() && loca_vali() && town_vali() && zip_vali() && card_holder_vali() && card_number_vali() && card_vari_vali()) {
        let formData = {
            name: name,
            phone: phone,
            email: email,
            loca: loca
        };

        localStorage.setItem(name, JSON.stringify(formData));

        Swal.fire('Order Placed', 'We will contat you on your email for furhter process', 'success');

        let a = document.querySelector('.feedback')
        a.classList.toggle('feed-visi')

        document.querySelector('#feed-sub').addEventListener('click',function(){
          Swal.fire('Thanks for Review','Review Sent','success')
          a.style.display = 'none'
        })
    } else {
        Swal.fire('Error', 'Please recheck the values', 'error');
    }
});

$(function () {
  let a = "livingroom.html";
  let b = "dressing.html";
  let c = "gallery.html";
  let d = "contact.html";
  let e = "garden.html";
  let arr = [a, b, c, d, e];
  $("#auto").autocomplete({
    source: arr,
    select: function (event, ui) {
      window.location.href = ui.item.value;
    },
  });
});

$(function () {
  let a = "livingroom.html";
  let b = "dressing.html";
  let c = "gallery.html";
  let d = "Contact.html";
  let e = "garden.html";
  let f = "GetAQuote.html";
  let g = "BathroomMirror.html";
  let h = "LargeMirrors.html";
  let i = "LedMirror.html";
  let j = "Reviews.html";
  let k = "home.html";
  let l = "WoodenFramed.html";
  let m = "CheckOut.html";
  let n = "BedroomMirror.html";
  let o = "MetalMirrors.html";
  let p = "Login.html";
  let q = "SignUp.html";
  let arr = [a, b, c, d, e,f,g,h,i,j,k,l,m,n,o,p,q];
  $("#auto_one").autocomplete({
    source: arr,
    select: function (event, ui) {
      window.location.href = ui.item.value;
    },
  });
});
