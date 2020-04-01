// Navbar Background 

const myNav = document.querySelector('nav');
window.onscroll = function() {
    "use strict";
    (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) ? myNav.classList.add("nav-bg") : myNav.classList.remove("nav-bg");
  };

// ---------------------------------

// Guest Table Content

const table = document.querySelector('#registry tbody');
const registrationForm = document.forms.registrationForm;

registrationForm.addEventListener('submit', e => {
    e.preventDefault();

    const guestName = e.target.elements.guestName.value.trim();
    const guestSurname = e.target.elements.guestSurname.value.trim();
    const plusName = e.target.elements.plusName.value.trim();
    const plusSurname = e.target.elements.plusSurname.value.trim();

    if (!guestName) {
        alert('Please enter guest name!');
    } else {
        const tr = table.insertRow();
        const td1 = tr.insertCell();
        const td2 = tr.insertCell();
    
        td1.textContent = guestName;
        td2.textContent = guestSurname;
    
    }

    if (plusName || plusSurname) {
        const tr1 = table.insertRow();
        const td3 = tr1.insertCell();
        const td4 = tr1.insertCell();    
        
        td3.textContent = plusName;
        td4.textContent = plusSurname;    
    }
})

// ---------------------------------