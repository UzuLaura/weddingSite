// Guest Table Content

registrationForm.addEventListener('submit', e => {
    e.preventDefault();

    const guestName = e.target.elements.guestName.value.trim();
    const guestSurname = e.target.elements.guestSurname.value.trim();
    const plusName = e.target.elements.plusName.value.trim();
    const plusSurname = e.target.elements.plusSurname.value.trim();

    if (!guestName || !guestSurname) {
        guestAlert.classList.remove('alert-remove');
    } else {
        addToLocalStorage (guestName, guestSurname)
        increaseIndex ();
        guestAlert.classList.add('alert-remove');
        if (plusName || plusSurname) {        
            addToLocalStorage (plusName, plusSurname)
            increaseIndex ();
        }    
    }

})

// ---------------------------------

// Close Button

closeButton.addEventListener('click', () => {
    guestAlert.classList.add('alert-remove');
})

// ---------------------------------

// Ad Registry Data to localStorage

function increaseIndex () {
    indexCount++;
    localStorage.setItem('index', indexCount);
}

function addToLocalStorage (name, surname) {
    const nameIndex = `name${indexCount}`;
    const surnameIndex = `surname${indexCount}`;

    localStorage.setItem(nameIndex, name);
    localStorage.setItem(surnameIndex, surname);
}

// ---------------------------------
