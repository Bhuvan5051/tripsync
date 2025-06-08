function login() {
    const username = document.getElementById('username').value;
    if (username.trim() !== "") {
        localStorage.setItem('username', username);
        document.getElementById('displayName').innerText = username;
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('mainSection').style.display = 'block';
        loadTrips();
    } else {
        alert("Please enter a username.");
    }
}

function addTrip() {
    const name = document.getElementById('tripName').value;
    const date = document.getElementById('tripDate').value;
    if (name && date) {
        const trip = { name, date };
        let trips = JSON.parse(localStorage.getItem('trips')) || [];
        trips.push(trip);
        localStorage.setItem('trips', JSON.stringify(trips));
        document.getElementById('tripName').value = '';
        document.getElementById('tripDate').value = '';
        loadTrips();
    } else {
        alert("Please enter both trip name and date.");
    }
}

function loadTrips() {
    const tripList = document.getElementById('tripList');
    tripList.innerHTML = '';
    const trips = JSON.parse(localStorage.getItem('trips')) || [];
    trips.forEach((trip, index) => {
        const li = document.createElement('li');
        li.innerText = `${trip.name} - ${trip.date}`;
        tripList.appendChild(li);
    });
}

// Auto-login if user data is already in localStorage
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('displayName').innerText = username;
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('mainSection').style.display = 'block';
        loadTrips();
    }
}
