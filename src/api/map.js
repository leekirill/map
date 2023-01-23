import module from "../placesModule";
import refs from "../refs";
import State from "../state";

const state = new State();

let map;
let service;
let infowindow;
let places = [];

refs.search.addEventListener("input", (e) => {
  state.state.value = e.target.value;
});

// Google API

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
        places.push(results[i]);

        nearbyPlacesList(
          places.filter((e) => e.name.includes(state.state.value)),
          map
        );
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

// Поиск мест

// Добавляем масив ближайших мест

const nearbyPlacesList = (places, map) => {
  const li = document.createElement("li");
  const p = document.createElement("p");
  // const img = document.createElement("img");

  for (const place of places) {
    new google.maps.Marker({
      map,
      title: place.name,
      position: place.geometry.location,
    });

    li.textContent = place.name;
    li.classList.add("item");
    // img.src = place.icon;

    li.append(p);
    // li.append(img);

    li.addEventListener("click", () => {
      map.setCenter(place.geometry.location);
    });

    p.textContent = place.vicinity;

    refs.placesList.prepend(li);
  }
};

// refs.search.addEventListener("input", handleInput);

// function handleInput() {
//   console.log(123);
//   // let filteredArr = placesArr.filter((place) => {
//   //   return place.name.includes(e.target.value);
//   // });
// }

window.initMap = initMap;

export default initMap;
