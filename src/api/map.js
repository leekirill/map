import module from "../placesModule";
import refs from "../refs";

let map;
let service;
let infowindow;
let places = [];

refs.search.addEventListener("input", (e) => {
  e.target.value;
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
      results.forEach((res) => {
        places.push(res);

        let filteredArr;

        // Поиск мест

        refs.search.addEventListener("input", handleInput);

        function handleInput(e) {
          filteredArr = places.filter((el) =>
            el.name.toLowerCase().includes(e.target.value.toLowerCase())
          );

          nearbyPlacesList(filteredArr, map);
        }

        nearbyPlacesList(places, map);
      });

      //

      map.setCenter(results[0].geometry.location);
    }
  });
}

// Добавляем масив ближайших мест

const nearbyPlacesList = (places, map) => {
  refs.placesList.innerHTML = "";

  for (const place of places) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    // const img = document.createElement("img");

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

window.initMap = initMap;

export default initMap;
