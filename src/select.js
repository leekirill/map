import countries from "/src/api/ua";
import refs from "./refs";
import module from "./placesModule";
import initMap from "./api/map";
import nearbyPlacesList from "./nearbyPlaces";
import State from "./state";

const stateManager = new State();
let places = stateManager.state.places;

// делаем селект из массива

countries.map((country) => {
  const option = document.createElement("option");
  const p = document.createElement("p");

  option.innerHTML = country.city;
  option.value = country.city;
  p.textContent = ` ${country.admin_name}`;
  option.append(p);

  refs.select.append(option);
});

// вешаем событие на селект

refs.select.addEventListener("change", handleSelect);

function handleSelect() {
  module.getPlaces(countries, refs.select.selectedIndex);

  initMap(module.result, (data) => {
    places.push(data);
    nearbyPlacesList(places);
  });

  // очищаем places перед обновлением города

  places.splice(0, places.length);

  refs.ul.querySelectorAll(".item").forEach((n) => n.remove());
}
