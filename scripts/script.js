const iframe = document.getElementById('map');
const trips = document.getElementById('trips');

let onClick = () => {
    let start = document.getElementById('start').value;
    let destination = document.getElementById('dest').value;

    trips.innerHTML = '';
    trips.innerHTML += `
        <li class="trip">
            <h3>Eindhoven ➡️ Delft 🚗</h3>
            <span>Departure: 18:45 Arrival: 19:35</span>
        </li>
        <li class="trip">
            <h3>Eindhoven ➡️ Delft 🚗</h3>
            <span>Departure: 18:55 Arrival: 19:55</span>
        </li>
        <li class="trip">
            <h3>Eindhoven ➡️ Delft 🚗</h3>
            <span>Departure: 20:35 Arrival: 21:25</span>
        </li>
    `;

    map.src = `https://maps.google.com/?q=from-${start}-to-${destination}&output=embed`
    map.reload();
}
