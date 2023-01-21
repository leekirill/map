import module from "../placesModule";
import refs from "../refs";

let map;
let service;
let infowindow;

let placesArr = [];

function initMap(obj = module.result) {
  const city = new google.maps.LatLng(obj.lat, obj.lng);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: city,
    zoom: 15,
  });

  const request = {
    query: obj.city,
    location: city,
    radius: "2000",
    fields: ["name", "geometry"],
    type: ["subway_station", "store"],
  };

  service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, (results, status) => {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        // createMarker(results[i]);

        // передаем данние в аргумент

        placesArr.push(results[i]);
        nearbyPlacesList(placesArr, map);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

// function createMarker(place) {
//   if (!place.geometry || !place.geometry.location) return;

//   const marker = new google.maps.Marker({
//     map,
//     position: place.geometry.location,
//   });

//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.setContent(place.name || "");
//     infowindow.open(map);
//   });
// }

// console.log(initMap());
// let map = new google.maps.Map(document.getElementById("map"), {
//   center: new google.maps.LatLng(obj.lat, obj.lng),
//   zoom: 15,
// });

// let map = new google.maps.Map(document.getElementById("map"), {
//   center: { lat: -33.8666, lng: 151.1958 },
//   zoom: 15,
// });

const nearbyPlacesList = (places, map) => {
  const li = document.createElement("li");
  const p = document.createElement("p");

  for (const place of places) {
    new google.maps.Marker({
      map,
      title: place.name,
      position: place.geometry.location,
    });

    li.textContent = place.name;
    li.classList.add("item");
    li.append(p);

    li.addEventListener("click", () => {
      map.setCenter(place.geometry.location);
    });

    p.textContent = place.vicinity;

    refs.ul.prepend(li);
  }
};

window.initMap = initMap;

export default initMap;
