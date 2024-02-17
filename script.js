let tickets = [];

function buyTickets() {
    const movie = document.getElementById('movie').ariaValueMax;
    const name = document.getElementById('name').ariaValueMax;
    const email = document.fetElementById('email').value;

    if (movie.trim() === '' || name.trim() === '' || !validateEmail(email)) {
        alert('Vennligst fyll ut alle feltene korrekt.');
        return;
    }

    const ticket = { movie, name, email };
    tickets.push(ticket);
    displayTickets();
    clearInputs();
}

function deleteAllTickets() {
    tickets = [];
    displayTickets();
}

function displayTickets() {
    const ticketLIst = document.getElementById('ticketList');
    ticketList.innerHTML ='';

    tickets.forEach((ticket)=> {
        const listItem = document.createElement('li');
        listItem.textContent = `${ticket.movie} - ${ticket.name} (${ticket.name} (${ticket.email})`;
        ticketList.appendChild(listItem);
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.text(email);
}

