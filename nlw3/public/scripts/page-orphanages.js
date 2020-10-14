//create map
const map = L.map('mapid').setView([-3.7508694,-38.6643717], 14);

//create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,65],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create popop overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Cotolengo <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//create and add marker
L.marker([-3.7508694,-38.6643717], {icon}).addTo(map)
    .bindPopup(popup)
    