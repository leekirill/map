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
        // передаем данние в аргумент

        placesArr.push(results[i]);
        nearbyPlacesList(placesArr, map);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

refs.input.addEventListener("input", (e) => {
  let filteredArr = placesArr.filter((place) => {
    return place.name.includes(e.target.value);
  });

  nearbyPlacesList(filteredArr);
});

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

    refs.placesList.prepend(li);
  }
};

window.initMap = initMap;

export default initMap;
