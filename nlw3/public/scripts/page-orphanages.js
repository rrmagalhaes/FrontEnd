//create map
const map = L.map('mapid').setView([-3.7508694,-38.6643717], 14);

//create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,65],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({id, name, lat, lng}) {
    //create popop overlay
    const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
    }).setContent(`${name} <a href="orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>`)

    //create and add marker
    L.marker([lat,lng], {icon})
    .addTo(map)
    .bindPopup(popup)

}

const orphanageSpan = document.querySelectorAll('.orphanages span')
orphanageSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    //console.log(orphanage)
    addMarker(orphanage)
})


    