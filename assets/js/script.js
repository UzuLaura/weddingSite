// Global Variables

let indexCount = localStorage.index > 0 ? localStorage.index : 0;
const myNav = document.querySelector('nav');
const table = document.querySelector('#registry tbody');
const registrationForm = document.forms.registrationForm;
const guestAlert = document.getElementById('guestAlert');
const closeButton = document.querySelector('.closeButton');

// ---------------------------------

// Navbar Background 

window.onscroll = function() {
    "use strict";
    (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) ? myNav.classList.add("nav-bg") : myNav.classList.remove("nav-bg");
  };

// ---------------------------------