import countries from "/src/api/ua";
import refs from "./refs";
import module from "./placesModule";
import initMap from "./api/map";
import nearbyPlacesList from "./nearbyPlaces";
import State from "./state";

const stateManager = new State();
let places = stateManager.state.places;

[
  ...refs.radios.children,
][0].title = `${countries[0].city} ${countries[0].admin_name}`;

// делаем селект из массива

countries.map((country, i) => {
  const input = document.createElement("input");

  input.type = "radio";
  input.name = "city__item";
  input.id = i;
  input.title = country.city;

  refs.radios.append(input);

  refs.citiesList.insertAdjacentHTML(
    "beforeend",
    `<li class="item">
    <label for="${i}">
        ${country.city}
        <p>${country.admin_name}</p>
    </label>
    </li>`
  );
});

// вешаем событие на селект

refs.citiesList.addEventListener("click", handleSelect);

function handleSelect(e) {
  if (e.target.nodeName == "LI") {
    module.getPlaces(countries, Number(e.target.firstElementChild.htmlFor));
  }

  initMap(module.result, (data) => {
    places.push(data);
    nearbyPlacesList(places);
  });

  [...refs.radios.children][0].title = e.target.innerText;
  refs.customSelect.removeAttribute("open");

  // // очищаем places перед обновлением города

  places.splice(0, places.length);

  refs.placesList.querySelectorAll(".item").forEach((n) => n.remove());
}
