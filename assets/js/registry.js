// Prints Added Guests from Local Storage to Registry Table

for (let i = 0; i < indexCount; i++) {
    const name = `name${i}`;
    const surname = `surname${i}`;

    const tr = table.insertRow();
    const td1 = tr.insertCell();
    const td2 = tr.insertCell();

    td1.textContent = localStorage.getItem(name);
    td2.textContent = localStorage.getItem(surname);
 
}

// ---------------------------------