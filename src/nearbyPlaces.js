import refs from "./refs";

const nearbyPlacesList = (places) => {
  const li = document.createElement("li");

  places.forEach((e) => {
    li.textContent = e.vicinity;
    li.classList.add("item");

    refs.ul.prepend(li);

    if (places.length > 20) {
      refs.ul.removeChild(li);
      refs.ul.prepend(li);
    }
  });
};

export default nearbyPlacesList;
