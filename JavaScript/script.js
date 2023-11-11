let close = document.querySelector("#close");
let full = document.querySelector(".f-deal");

full.style.top = "0px";

close.addEventListener("click", function () {
  full.style.top = "-150vh";
});

let main = document.querySelector("header");
let crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

let a = document.querySelector(".chat-box");

document.querySelector(".chat").addEventListener("click", function () {
  a.classList.toggle("visible");
});

$(document).ready(function () {
  $("#row1").waypoint(
    function () {
      $("#row1").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "50%",
    }
  );

  $("#row2").waypoint(
    function () {
      $("#row2").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "50%",
    }
  );

  $(".ani").waypoint(
    function () {
      $(".ani").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "50%",
    }
  );

  $("#row3").waypoint(
    function () {
      $("#row3").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".rev-ani").waypoint(
    function () {
      $(".rev-ani").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "60%",
    }
  );

  $(".gal-animate").waypoint(
    function () {
      $(".gal-animate").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "60%",
    }
  );

  $("#slider2").waypoint(
    function () {
      $("#slider2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "60%",
    }
  );

  $("#sec4").waypoint(
    function () {
      $("#sec4").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "60%",
    }
  );

  $("#row4").waypoint(
    function () {
      $("#row4").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "80%",
    }
  );

  $("#row6").waypoint(
    function () {
      $("#row6").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "80%",
    }
  );

  $("#row7").waypoint(
    function () {
      $("#row7").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "80%",
    }
  );

  $("iframe").waypoint(
    function () {
      $("iframe").addClass("animate__animated animate__slideInRight");
    },
    {
      offset: "80%",
    }
  );
  $("#loca-desId").waypoint(
    function () {
      $("#loca-desId").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "80%",
    }
  );

  $("#email").focus(function () {
    $(this).css("outline", "none");
  });
});

const endDate = "1 November 2023 10:00 PM";

function clock() {
  const end = new Date(endDate);
  const now = new Date();

  const diff = (end - now) / 1000;
  const daysRemaining = Math.floor(diff / 86400);
  const hoursRemaining = Math.floor((diff % 86400) / 3600);
  const minutesRemaining = Math.floor(((diff % 86400) % 3600) / 60);
  const secemaining = Math.floor(diff) % 60;

  document.querySelector(
    "#time"
  ).innerHTML = `${daysRemaining} Days / ${hoursRemaining} hour / ${minutesRemaining} minutes / ${secemaining} seconds`;
}

setInterval(() => {
  clock();
});

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
  let k = "AboutUs.html";
  let l = "WoodenFramed.html";
  let m = "CheckOut.html";
  let n = "BedroomMirror.html";
  let o = "MetalMirrors.html";
  let p = "Login.html";
  let q = "SignUp.html";
  let arr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q];
  $("#auto_one").autocomplete({
    source: arr,
    select: function (event, ui) {
      window.location.href = ui.item.value;
    },
  });
});

const dynamicText = document.querySelector(".loca-des h1 span");
const words = ["today"];

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
