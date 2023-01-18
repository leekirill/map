import countries from "/src/api/ua";
import refs from "./refs";
import state from "./placesModule";
import initMap from "./api/map";
import nearbyPlacesList from "./nearbyPlaces";

let nearbyArr = [];

// делаем селект из массива

countries.map((country) => {
  const option = document.createElement("option");

  option.innerHTML = country.city;
  option.value = country.city;

  refs.select.append(option);
});

// вешаем событие на селект

refs.select.addEventListener("input", handleSelect);

function handleSelect() {
  state.getPlaces(countries, refs.select.selectedIndex);

  initMap(state.result, (data) => {
    nearbyArr.push(data);
    nearbyPlacesList(nearbyArr);
  });
  nearbyArr = [];
}
