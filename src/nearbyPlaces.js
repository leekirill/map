import refs from "./refs";
import module from "./placesModule";
import State from "./state";
import initMap from "./api/map";

const state = new State();

const nearbyPlacesList = (places) => {
  const li = document.createElement("li");
  const p = document.createElement("p");

  places.forEach((place) => {
    li.textContent = place.name;
    li.classList.add("item");
    li.append(p);
    li.onclick = function (e) {
      initMap(module.result, (data) => {
        places.push(data);
        nearbyPlacesList(places);
      });
      console.log(
        `lat: ${place.geometry.location.lat()} ,lng: ${place.geometry.location.lng()}`
      );
    };

    p.textContent = place.vicinity;

    refs.ul.prepend(li);
  });
};

export default nearbyPlacesList;
