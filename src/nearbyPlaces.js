import refs from "./refs";

const nearbyPlacesList = (places) => {
  const li = document.createElement("li");
  const p = document.createElement("p");

  for (let i = 0; i < places.length; i += 1) {
    li.textContent = places[i].name;
    li.classList.add("item");
    li.append(p);
    p.textContent = places[i].vicinity;

    refs.ul.prepend(li);
  }
};

export default nearbyPlacesList;
