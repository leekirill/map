import refs from "./refs";

const nearbyPlacesList = (places) => {
  const li = document.createElement("li");

  places.forEach((e) => {
    li.textContent = e.name;
    li.classList.add("item");

    refs.ul.prepend(li);
  });

  console.log(`place: ${places.length}, nodes: ${refs.ul.childElementCount}`);
};

export default nearbyPlacesList;
