//create map
const map = L.map("mapid").setView([-3.7508694, -38.6643717], 14);

//create tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 65],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
//L.marker([-3.7508694,-38.6643717], {icon}).addTo(map)
//   .bindPopup(popup)
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);
  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//photos upload
function addPhotosField() {
  //pegar container de fotos #images
  const container = document.querySelector("#images");
  //pegar container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o campo esta vazio, se sim não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar campo de adicionar fotos
  input.value = "";
  //adicionar o clone ao container de imagens #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

//select yes or no

function toggleSelect(event) {
  //pegar botão clicado
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove('active');
  });

  //verificar sim ou Não
  const button = event.currentTarget;
  console.log(event.currentTarget)
  button.classList.add('active');

  //atualizar input hidden com valor selecionado
  const input = document.querySelector('[name="open-on-weekends"]')
  input.value = button.dataset.value
  
}

function validate(event) {
  
  //validar se lat e lng estão preencidos
  const needsLatAndLng = document.querySelector('[name="lat"]').value
  console.log(needsLatAndLng)
  
  if(needsLatAndLng == "") {
    event.preventDefault()
    alert('Selecione um ponto no mapa')
  }
}
