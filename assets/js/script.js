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
const guestAlert = document.getElementById('guestAlert');

registrationForm.addEventListener('submit', e => {
    e.preventDefault();

    const guestName = e.target.elements.guestName.value.trim();
    const guestSurname = e.target.elements.guestSurname.value.trim();
    const plusName = e.target.elements.plusName.value.trim();
    const plusSurname = e.target.elements.plusSurname.value.trim();

    if (!guestName || !guestSurname) {
        guestAlert.classList.remove('alert-remove');
    } else if (guestName && guestSurname) {
        addPerson(guestName, guestSurname);
        guestAlert.classList.add('alert-remove');
        if (plusName || plusSurname) {        
            addPerson(plusName, plusSurname);
        }    
    }

})

function addPerson (name, surname) {
    const tr = table.insertRow();
    const td1 = tr.insertCell();
    const td2 = tr.insertCell();

    td1.textContent = name;
    td2.textContent = surname;
}
// ---------------------------------

// Close Button

const closeButton = document.querySelector('.closeButton');

closeButton.addEventListener('click', () => {
    guestAlert.classList.add('alert-remove');
})

// ---------------------------------
