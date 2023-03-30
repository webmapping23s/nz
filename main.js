var map = L.map('map').setView([-39.2, 175.583333], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-39.2, 175.583333]).addTo(map)
    .bindPopup('Tongariro-Nationalpark')
    .openPopup();