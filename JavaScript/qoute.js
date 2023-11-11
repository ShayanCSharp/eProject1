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
const words = ["Get a Quote"];

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

function age_vali() {
  let name = document.querySelector("#loca");
  let error = document.querySelector("#error3");

  if (name.value == "") {
    error.innerHTML = "Please enter your age";
    error.style.color = "red";
    name.style.outlineColor = "red";
    return false;
  } else if (name.value < 16) {
    error.innerHTML = "You must be 16+ to Get a Qoute";
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

// Add an event listener to the form element
document.querySelector('#cont-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let qoute = [
        'The mirror reflects all objects without being sullied.',
        'In the mirror, we find a reflection of our appearances, but in our heart, we find a reflection of our soul.',
        'The mirror is the worst judge of true beauty.',
        'Beauty is eternity gazing at itself in a mirror.',
        'A mirror does not show the world as it is, but as it appears to us',
        'The mirror sees the man as beautiful, the heart sees the man as good',
        'A true friend is like a mirror; it reflects you, but never judges you.',
        'The mirror is my best friend because when I cry, it never laughs.',
        'When you look in the mirror, what do you see? Do you see the real you, or what you have been conditioned to believe is you?',
        'Mirrors show us what we look like, not who we are.'
    ]

    let rndNum = [Math.floor(Math.random()) * 10]

    // Validate form fields
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    let loca = document.querySelector('#loca').value;

    if (name_vali() && number_vali() && email_vali() && age_vali()) {
        // Create an object to store the data
        let formData = {
            name: name,
            phone: phone,
            email: email,
            loca: loca
        };

        // Convert the object to a JSON string and store it in localStorage
        localStorage.setItem(name, JSON.stringify(formData));

        Swal.fire('Qoute',`"${qoute[rndNum]}" <br> You will recive 30 qoutes for 30 days`,'success')
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
    let arr = [a, b, c,d,e];  $("#auto").autocomplete({
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
  