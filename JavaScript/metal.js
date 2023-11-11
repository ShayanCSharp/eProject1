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
      offset: "40%",
    }
  );

  $("#row2").waypoint(
    function () {
      $("#row2").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "40%",
    }
  );

  $("#row3").waypoint(
    function () {
      $("#row3").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "40%",
    }
  );

  $("#row4").waypoint(
    function () {
      $("#row4").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "40%",
    }
  );

  $("#email").focus(function () {
    $(this).css("outline", "none");
  });
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
