//Navbar Background 

var myNav = document.querySelector('nav');
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      myNav.classList.add("nav-bg");
    } else {
      myNav.classList.remove("nav-bg");
    }
  };
  
// ---------------------------------