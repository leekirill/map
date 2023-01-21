// import refs from "./refs";
// import initMap from "./api/map";

// // console.log(initMap());
// // let map = new google.maps.Map(document.getElementById("map"), {
// //   center: new google.maps.LatLng(obj.lat, obj.lng),
// //   zoom: 15,
// // });

// // let map = new google.maps.Map(document.getElementById("map"), {
// //   center: { lat: -33.8666, lng: 151.1958 },
// //   zoom: 15,
// // });

// const nearbyPlacesList = (places) => {
//   const li = document.createElement("li");
//   const p = document.createElement("p");

//   places.forEach((place) => {
//     li.textContent = place.name;
//     li.classList.add("item");
//     li.append(p);

//     li.onclick = function () {
//       console.log(123);

//       map.setCenter(place.geometry.location);
//     };

//     p.textContent = place.vicinity;

//     refs.ul.prepend(li);
//   });
// };

// export default nearbyPlacesList;
