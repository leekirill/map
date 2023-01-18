let state = {
  result: {
    city: "Kyiv",
    lat: 50.4516590763791,
    lng: 30.52602826090653,
  },
  getPlaces: function (arr, idx) {
    let res = {};

    arr.map(({ city, lat, lng }, i) => {
      if (idx === i) {
        res["city"] = city;
        res["lat"] = lat;
        res["lng"] = lng;
      }
    });
    this.result = res;
  },
};

export default state;
