// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"PnCN":[function(require,module,exports) {
module.exports = [{
  "city": "Kyiv",
  "lat": "50.4500",
  "lng": "30.5236",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Kyyiv, Misto",
  "capital": "primary",
  "population": "2963199",
  "population_proper": "2963199"
}, {
  "city": "Kharkiv",
  "lat": "50.0000",
  "lng": "36.2292",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Kharkivs’ka Oblast’",
  "capital": "admin",
  "population": "1446107",
  "population_proper": "1446107"
}, {
  "city": "Odesa",
  "lat": "46.4775",
  "lng": "30.7326",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Odes’ka Oblast’",
  "capital": "admin",
  "population": "1017699",
  "population_proper": "1017699"
}, {
  "city": "Dnipro",
  "lat": "48.4500",
  "lng": "34.9833",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Dnipropetrovs’ka Oblast’",
  "capital": "admin",
  "population": "1002111",
  "population_proper": "1002111"
}, {
  "city": "Donetsk",
  "lat": "48.0089",
  "lng": "37.8042",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Donets’ka Oblast’",
  "capital": "admin",
  "population": "929063",
  "population_proper": "929063"
}, {
  "city": "Zaporizhzhia",
  "lat": "47.8378",
  "lng": "35.1383",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Zaporiz’ka Oblast’",
  "capital": "admin",
  "population": "741717",
  "population_proper": "741717"
}, {
  "city": "Lviv",
  "lat": "49.8419",
  "lng": "24.0315",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "L’vivs’ka Oblast’",
  "capital": "admin",
  "population": "724314",
  "population_proper": "724314"
}, {
  "city": "Kryvyi Rih",
  "lat": "47.9086",
  "lng": "33.3433",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Dnipropetrovs’ka Oblast’",
  "capital": "minor",
  "population": "629695",
  "population_proper": "629695"
}, {
  "city": "Mykolaiv",
  "lat": "46.9667",
  "lng": "32.0000",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Mykolayivs’ka Oblast’",
  "capital": "admin",
  "population": "498748",
  "population_proper": "498748"
}, {
  "city": "Mariupol",
  "lat": "47.1306",
  "lng": "37.5639",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Donets’ka Oblast’",
  "capital": "",
  "population": "449498",
  "population_proper": "449498"
}, {
  "city": "Sevastopol",
  "lat": "44.6000",
  "lng": "33.5333",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Sevastopol’, Misto",
  "capital": "admin",
  "population": "428753",
  "population_proper": "428753"
}, {
  "city": "Luhansk",
  "lat": "48.5833",
  "lng": "39.3333",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Luhans’ka Oblast’",
  "capital": "admin",
  "population": "417990",
  "population_proper": "417990"
}, {
  "city": "Vinnytsia",
  "lat": "49.2372",
  "lng": "28.4672",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Vinnyts’ka Oblast’",
  "capital": "admin",
  "population": "371855",
  "population_proper": "371855"
}, {
  "city": "Makiivka",
  "lat": "48.0556",
  "lng": "37.9611",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Donets’ka Oblast’",
  "capital": "",
  "population": "347376",
  "population_proper": "347376"
}, {
  "city": "Simferopol",
  "lat": "44.9484",
  "lng": "34.1000",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Krym, Avtonomna Respublika",
  "capital": "admin",
  "population": "341799",
  "population_proper": "341799"
}, {
  "city": "Poltava",
  "lat": "49.5744",
  "lng": "34.5686",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Poltavs’ka Oblast’",
  "capital": "admin",
  "population": "317847",
  "population_proper": "286588"
}, {
  "city": "Chernihiv",
  "lat": "51.4939",
  "lng": "31.2947",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Chernihivs’ka Oblast’",
  "capital": "admin",
  "population": "294522",
  "population_proper": "294522"
}, {
  "city": "Kherson",
  "lat": "46.6333",
  "lng": "32.6000",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Khersons’ka Oblast’",
  "capital": "admin",
  "population": "291428",
  "population_proper": "291428"
}, {
  "city": "Cherkasy",
  "lat": "49.4444",
  "lng": "32.0597",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Cherkas’ka Oblast’",
  "capital": "admin",
  "population": "276360",
  "population_proper": "276360"
}, {
  "city": "Khmelnytskyi",
  "lat": "49.4200",
  "lng": "27.0000",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Khmel’nyts’ka Oblast’",
  "capital": "admin",
  "population": "274176",
  "population_proper": "274176"
}, {
  "city": "Zhytomyr",
  "lat": "50.2544",
  "lng": "28.6578",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Zhytomyrs’ka Oblast’",
  "capital": "admin",
  "population": "266936",
  "population_proper": "266936"
}, {
  "city": "Chernivtsi",
  "lat": "48.2908",
  "lng": "25.9344",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Chernivets’ka Oblast’",
  "capital": "admin",
  "population": "266550",
  "population_proper": "266550"
}, {
  "city": "Sumy",
  "lat": "50.9068",
  "lng": "34.7992",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Sums’ka Oblast’",
  "capital": "admin",
  "population": "265758",
  "population_proper": "265758"
}, {
  "city": "Horlivka",
  "lat": "48.3336",
  "lng": "38.0925",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Donets’ka Oblast’",
  "capital": "minor",
  "population": "256714",
  "population_proper": "256714"
}, {
  "city": "Rivne",
  "lat": "50.6197",
  "lng": "26.2514",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Rivnens’ka Oblast’",
  "capital": "admin",
  "population": "245630",
  "population_proper": "245630"
}, {
  "city": "Ivano-Frankivsk",
  "lat": "48.9228",
  "lng": "24.7106",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Ivano-Frankivs’ka Oblast’",
  "capital": "admin",
  "population": "236602",
  "population_proper": "236602"
}, {
  "city": "Kamianske",
  "lat": "48.5076",
  "lng": "34.6132",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Dnipropetrovs’ka Oblast’",
  "capital": "minor",
  "population": "235066",
  "population_proper": "235066"
}, {
  "city": "Kremenchuk",
  "lat": "49.0775",
  "lng": "33.4239",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Poltavs’ka Oblast’",
  "capital": "minor",
  "population": "234073",
  "population_proper": "234073"
}, {
  "city": "Kropyvnytskyi",
  "lat": "48.5103",
  "lng": "32.2667",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Kirovohrads’ka Oblast’",
  "capital": "admin",
  "population": "227413",
  "population_proper": "227413"
}, {
  "city": "Ternopil",
  "lat": "49.5667",
  "lng": "25.6000",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Ternopil’s’ka Oblast’",
  "capital": "admin",
  "population": "218653",
  "population_proper": "218653"
}, {
  "city": "Lutsk",
  "lat": "50.7478",
  "lng": "25.3244",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Volyns’ka Oblast’",
  "capital": "admin",
  "population": "216505",
  "population_proper": "216505"
}, {
  "city": "Bila Tserkva",
  "lat": "49.7956",
  "lng": "30.1167",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Kyyivs’ka Oblast’",
  "capital": "minor",
  "population": "208944",
  "population_proper": "208944"
}, {
  "city": "Kramatorsk",
  "lat": "48.7208",
  "lng": "37.5556",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Donets’ka Oblast’",
  "capital": "",
  "population": "159445",
  "population_proper": "159445"
}, {
  "city": "Melitopol",
  "lat": "46.8333",
  "lng": "35.3667",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Zaporiz’ka Oblast’",
  "capital": "minor",
  "population": "154992",
  "population_proper": "154992"
}, {
  "city": "Sievierodonetsk",
  "lat": "48.9500",
  "lng": "38.4833",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Luhans’ka Oblast’",
  "capital": "minor",
  "population": "150000",
  "population_proper": "150000"
}, {
  "city": "Drohobych",
  "lat": "49.3500",
  "lng": "23.5000",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "L’vivs’ka Oblast’",
  "capital": "minor",
  "population": "124269",
  "population_proper": "79406"
}, {
  "city": "Khrustalnyi",
  "lat": "48.1214",
  "lng": "38.9453",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Luhans’ka Oblast’",
  "capital": "",
  "population": "124000",
  "population_proper": "124000"
}, {
  "city": "Uzhhorod",
  "lat": "48.6239",
  "lng": "22.2950",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Zakarpats’ka Oblast’",
  "capital": "admin",
  "population": "114897",
  "population_proper": "114897"
}, {
  "city": "Berdiansk",
  "lat": "46.7598",
  "lng": "36.7845",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Zaporiz’ka Oblast’",
  "capital": "minor",
  "population": "114205",
  "population_proper": "114205"
}, {
  "city": "Sloviansk",
  "lat": "48.8700",
  "lng": "37.6250",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Donets’ka Oblast’",
  "capital": "",
  "population": "113196",
  "population_proper": "113196"
}, {
  "city": "Nikopol",
  "lat": "47.5772",
  "lng": "34.3575",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Dnipropetrovs’ka Oblast’",
  "capital": "minor",
  "population": "112102",
  "population_proper": "112102"
}, {
  "city": "Yevpatoriia",
  "lat": "45.2000",
  "lng": "33.3583",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Krym, Avtonomna Respublika",
  "capital": "",
  "population": "106158",
  "population_proper": "106158"
}, {
  "city": "Pavlohrad",
  "lat": "48.5200",
  "lng": "35.8700",
  "country": "Ukraine",
  "iso2": "UA",
  "admin_name": "Dnipropetrovs’ka Oblast’",
  "capital": "minor",
  "population": "106082",
  "population_proper": "106082"
}];
},{}],"xoer":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var refs = {
  customSelect: document.querySelector(".custom-select"),
  radios: document.querySelector(".radios"),
  citiesList: document.querySelector(".citiesList"),
  placesList: document.querySelector(".placesList"),
  items: document.querySelector(".items"),
  input: document.querySelector("input")
};
var _default = refs;
exports.default = _default;
},{}],"dJ8O":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  result: {
    city: "Kyiv",
    lat: 50.4516590763791,
    lng: 30.52602826090653
  },
  getPlaces: function getPlaces(arr, idx) {
    var res = {};
    arr.map(function (_ref, i) {
      var city = _ref.city,
        lat = _ref.lat,
        lng = _ref.lng;
      if (idx === i) {
        res["city"] = city;
        res["lat"] = lat;
        res["lng"] = lng;
      }
    });
    this.result = res;
  }
};
exports.default = _default;
},{}],"Jud3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _placesModule = _interopRequireDefault(require("../placesModule"));
var _refs = _interopRequireDefault(require("../refs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var map;
var service;
var infowindow;
var placesArr = [];
function initMap() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _placesModule.default.result;
  var city = new google.maps.LatLng(obj.lat, obj.lng);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: city,
    zoom: 15
  });
  var request = {
    query: obj.city,
    location: city,
    radius: "2000",
    fields: ["name", "geometry"],
    type: ["subway_station", "store"]
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function (results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        // передаем данние в аргумент

        placesArr.push(results[i]);
        nearbyPlacesList(placesArr, map);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}
_refs.default.input.addEventListener("input", function (e) {
  var filteredArr = placesArr.filter(function (place) {
    return place.name.includes(e.target.value);
  });
  nearbyPlacesList(filteredArr);
});
var nearbyPlacesList = function nearbyPlacesList(places, map) {
  var li = document.createElement("li");
  var p = document.createElement("p");
  // const img = document.createElement("img");
  var _iterator = _createForOfIteratorHelper(places),
    _step;
  try {
    var _loop = function _loop() {
      var place = _step.value;
      new google.maps.Marker({
        map: map,
        title: place.name,
        position: place.geometry.location
      });
      li.textContent = place.name;
      li.classList.add("item");
      // img.src = place.icon;

      li.append(p);
      // li.append(img);

      li.addEventListener("click", function () {
        map.setCenter(place.geometry.location);
      });
      p.textContent = place.vicinity;
      _refs.default.placesList.prepend(li);
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
window.initMap = initMap;
var _default = initMap;
exports.default = _default;
},{"../placesModule":"dJ8O","../refs":"xoer"}],"jeep":[function(require,module,exports) {
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
},{}],"mG38":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNSUBSCRIBE = exports.TARGET = exports.PATH_SEPARATOR = void 0;
var PATH_SEPARATOR = '.';
exports.PATH_SEPARATOR = PATH_SEPARATOR;
var TARGET = Symbol('target');
exports.TARGET = TARGET;
var UNSUBSCRIBE = Symbol('unsubscribe');
exports.UNSUBSCRIBE = UNSUBSCRIBE;
},{}],"hPdU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBuiltinWithMutableMethods = isBuiltinWithMutableMethods;
exports.isBuiltinWithoutMutableMethods = isBuiltinWithoutMutableMethods;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function isBuiltinWithMutableMethods(value) {
  return value instanceof Date || value instanceof Set || value instanceof Map || value instanceof WeakSet || value instanceof WeakMap || ArrayBuffer.isView(value);
}
function isBuiltinWithoutMutableMethods(value) {
  return (_typeof(value) === 'object' ? value === null : typeof value !== 'function') || value instanceof RegExp;
}
},{}],"kqyw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = Array.isArray;
exports.default = _default;
},{}],"a6za":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSymbol;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function isSymbol(value) {
  return _typeof(value) === 'symbol';
}
},{}],"JMAz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _constants = require("./constants.js");
var _isArray = _interopRequireDefault(require("./is-array.js"));
var _isSymbol = _interopRequireDefault(require("./is-symbol.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var path = {
  after: function after(path, subPath) {
    if ((0, _isArray.default)(path)) {
      return path.slice(subPath.length);
    }
    if (subPath === '') {
      return path;
    }
    return path.slice(subPath.length + 1);
  },
  concat: function concat(path, key) {
    if ((0, _isArray.default)(path)) {
      path = _toConsumableArray(path);
      if (key) {
        path.push(key);
      }
      return path;
    }
    if (key && key.toString !== undefined) {
      if (path !== '') {
        path += _constants.PATH_SEPARATOR;
      }
      if ((0, _isSymbol.default)(key)) {
        return path + key.toString();
      }
      return path + key;
    }
    return path;
  },
  initial: function initial(path) {
    if ((0, _isArray.default)(path)) {
      return path.slice(0, -1);
    }
    if (path === '') {
      return path;
    }
    var index = path.lastIndexOf(_constants.PATH_SEPARATOR);
    if (index === -1) {
      return '';
    }
    return path.slice(0, index);
  },
  last: function last(path) {
    if ((0, _isArray.default)(path)) {
      return path[path.length - 1] || '';
    }
    if (path === '') {
      return path;
    }
    var index = path.lastIndexOf(_constants.PATH_SEPARATOR);
    if (index === -1) {
      return path;
    }
    return path.slice(index + 1);
  },
  walk: function walk(path, callback) {
    if ((0, _isArray.default)(path)) {
      var _iterator = _createForOfIteratorHelper(path),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          callback(key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (path !== '') {
      var position = 0;
      var index = path.indexOf(_constants.PATH_SEPARATOR);
      if (index === -1) {
        callback(path);
      } else {
        while (position < path.length) {
          if (index === -1) {
            index = path.length;
          }
          callback(path.slice(position, index));
          position = index + 1;
          index = path.indexOf(_constants.PATH_SEPARATOR, position);
        }
      }
    }
  },
  get: function get(object, path) {
    this.walk(path, function (key) {
      if (object) {
        object = object[key];
      }
    });
    return object;
  }
};
var _default = path;
exports.default = _default;
},{"./constants.js":"mG38","./is-array.js":"kqyw","./is-symbol.js":"a6za"}],"Gi15":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIterator;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function isIterator(value) {
  return _typeof(value) === 'object' && typeof value.next === 'function';
}
},{}],"WWMb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapIterator;
var _constants = require("./constants.js");
// eslint-disable-next-line max-params
function wrapIterator(iterator, target, thisArg, applyPath, prepareValue) {
  var originalNext = iterator.next;
  if (target.name === 'entries') {
    iterator.next = function () {
      var result = originalNext.call(this);
      if (result.done === false) {
        result.value[0] = prepareValue(result.value[0], target, result.value[0], applyPath);
        result.value[1] = prepareValue(result.value[1], target, result.value[0], applyPath);
      }
      return result;
    };
  } else if (target.name === 'values') {
    var keyIterator = thisArg[_constants.TARGET].keys();
    iterator.next = function () {
      var result = originalNext.call(this);
      if (result.done === false) {
        result.value = prepareValue(result.value, target, keyIterator.next().value, applyPath);
      }
      return result;
    };
  } else {
    iterator.next = function () {
      var result = originalNext.call(this);
      if (result.done === false) {
        result.value = prepareValue(result.value, target, result.value, applyPath);
      }
      return result;
    };
  }
  return iterator;
}
},{"./constants.js":"mG38"}],"vfP1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ignoreProperty;
var _isSymbol = _interopRequireDefault(require("./is-symbol.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ignoreProperty(cache, options, property) {
  return cache.isUnsubscribed || options.ignoreSymbols && (0, _isSymbol.default)(property) || options.ignoreUnderscores && property.charAt(0) === '_' || 'ignoreKeys' in options && options.ignoreKeys.includes(property);
}
},{"./is-symbol.js":"a6za"}],"N0XF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _path = _interopRequireDefault(require("./path.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
@class Cache
@private
*/
var Cache = /*#__PURE__*/function () {
  function Cache(equals) {
    _classCallCheck(this, Cache);
    this._equals = equals;
    this._proxyCache = new WeakMap();
    this._pathCache = new WeakMap();
    this.isUnsubscribed = false;
  }
  _createClass(Cache, [{
    key: "_getDescriptorCache",
    value: function _getDescriptorCache() {
      if (this._descriptorCache === undefined) {
        this._descriptorCache = new WeakMap();
      }
      return this._descriptorCache;
    }
  }, {
    key: "_getProperties",
    value: function _getProperties(target) {
      var descriptorCache = this._getDescriptorCache();
      var properties = descriptorCache.get(target);
      if (properties === undefined) {
        properties = {};
        descriptorCache.set(target, properties);
      }
      return properties;
    }
  }, {
    key: "_getOwnPropertyDescriptor",
    value: function _getOwnPropertyDescriptor(target, property) {
      if (this.isUnsubscribed) {
        return Reflect.getOwnPropertyDescriptor(target, property);
      }
      var properties = this._getProperties(target);
      var descriptor = properties[property];
      if (descriptor === undefined) {
        descriptor = Reflect.getOwnPropertyDescriptor(target, property);
        properties[property] = descriptor;
      }
      return descriptor;
    }
  }, {
    key: "getProxy",
    value: function getProxy(target, path, handler, proxyTarget) {
      if (this.isUnsubscribed) {
        return target;
      }
      var reflectTarget = target[proxyTarget];
      var source = reflectTarget || target;
      this._pathCache.set(source, path);
      var proxy = this._proxyCache.get(source);
      if (proxy === undefined) {
        proxy = reflectTarget === undefined ? new Proxy(target, handler) : target;
        this._proxyCache.set(source, proxy);
      }
      return proxy;
    }
  }, {
    key: "getPath",
    value: function getPath(target) {
      return this.isUnsubscribed ? undefined : this._pathCache.get(target);
    }
  }, {
    key: "isDetached",
    value: function isDetached(target, object) {
      return !Object.is(target, _path.default.get(object, this.getPath(target)));
    }
  }, {
    key: "defineProperty",
    value: function defineProperty(target, property, descriptor) {
      if (!Reflect.defineProperty(target, property, descriptor)) {
        return false;
      }
      if (!this.isUnsubscribed) {
        this._getProperties(target)[property] = descriptor;
      }
      return true;
    }
  }, {
    key: "setProperty",
    value: function setProperty(target, property, value, receiver, previous) {
      // eslint-disable-line max-params
      if (!this._equals(previous, value) || !(property in target)) {
        var descriptor = this._getOwnPropertyDescriptor(target, property);
        if (descriptor !== undefined && 'set' in descriptor) {
          return Reflect.set(target, property, value, receiver);
        }
        return Reflect.set(target, property, value);
      }
      return true;
    }
  }, {
    key: "deleteProperty",
    value: function deleteProperty(target, property, previous) {
      if (Reflect.deleteProperty(target, property)) {
        if (!this.isUnsubscribed) {
          var properties = this._getDescriptorCache().get(target);
          if (properties) {
            delete properties[property];
            this._pathCache.delete(previous);
          }
        }
        return true;
      }
      return false;
    }
  }, {
    key: "isSameDescriptor",
    value: function isSameDescriptor(a, target, property) {
      var b = this._getOwnPropertyDescriptor(target, property);
      return a !== undefined && b !== undefined && Object.is(a.value, b.value) && (a.writable || false) === (b.writable || false) && (a.enumerable || false) === (b.enumerable || false) && (a.configurable || false) === (b.configurable || false) && a.get === b.get && a.set === b.set;
    }
  }, {
    key: "isGetInvariant",
    value: function isGetInvariant(target, property) {
      var descriptor = this._getOwnPropertyDescriptor(target, property);
      return descriptor !== undefined && descriptor.configurable !== true && descriptor.writable !== true;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this._descriptorCache = null;
      this._pathCache = null;
      this._proxyCache = null;
      this.isUnsubscribed = true;
    }
  }]);
  return Cache;
}();
exports.default = Cache;
},{"./path.js":"JMAz"}],"pAAr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return toString.call(value) === '[object Object]';
}
},{}],"YMnS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDiffCertain;
function isDiffCertain() {
  return true;
}
},{}],"a6Xr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDiffArrays;
function isDiffArrays(clone, value) {
  return clone.length !== value.length || clone.some(function (item, index) {
    return value[index] !== item;
  });
}
},{}],"O9JC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IMMUTABLE_OBJECT_METHODS = void 0;
var IMMUTABLE_OBJECT_METHODS = new Set(['hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf']);
exports.IMMUTABLE_OBJECT_METHODS = IMMUTABLE_OBJECT_METHODS;
},{}],"uig5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MUTABLE_ARRAY_METHODS = exports.HANDLED_ARRAY_METHODS = void 0;
var _isDiffCertain = _interopRequireDefault(require("../diff/is-diff-certain.js"));
var _isDiffArrays = _interopRequireDefault(require("../diff/is-diff-arrays.js"));
var _object = require("./object.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var IMMUTABLE_ARRAY_METHODS = new Set(['concat', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf']);
var MUTABLE_ARRAY_METHODS = {
  push: _isDiffCertain.default,
  pop: _isDiffCertain.default,
  shift: _isDiffCertain.default,
  unshift: _isDiffCertain.default,
  copyWithin: _isDiffArrays.default,
  reverse: _isDiffArrays.default,
  sort: _isDiffArrays.default,
  splice: _isDiffArrays.default,
  flat: _isDiffArrays.default,
  fill: _isDiffArrays.default
};
exports.MUTABLE_ARRAY_METHODS = MUTABLE_ARRAY_METHODS;
var HANDLED_ARRAY_METHODS = new Set([].concat(_toConsumableArray(_object.IMMUTABLE_OBJECT_METHODS), _toConsumableArray(IMMUTABLE_ARRAY_METHODS), _toConsumableArray(Object.keys(MUTABLE_ARRAY_METHODS))));
exports.HANDLED_ARRAY_METHODS = HANDLED_ARRAY_METHODS;
},{"../diff/is-diff-certain.js":"YMnS","../diff/is-diff-arrays.js":"a6Xr","./object.js":"O9JC"}],"ih0F":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDiffSets;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function isDiffSets(clone, value) {
  if (clone.size !== value.size) {
    return true;
  }
  var _iterator = _createForOfIteratorHelper(clone),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      if (!value.has(element)) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
},{}],"R9PD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MUTABLE_SET_METHODS = exports.IMMUTABLE_SET_METHODS = exports.HANDLED_SET_METHODS = exports.COLLECTION_ITERATOR_METHODS = void 0;
var _isDiffSets = _interopRequireDefault(require("../diff/is-diff-sets.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var COLLECTION_ITERATOR_METHODS = ['keys', 'values', 'entries'];
exports.COLLECTION_ITERATOR_METHODS = COLLECTION_ITERATOR_METHODS;
var IMMUTABLE_SET_METHODS = new Set(['has', 'toString']);
exports.IMMUTABLE_SET_METHODS = IMMUTABLE_SET_METHODS;
var MUTABLE_SET_METHODS = {
  add: _isDiffSets.default,
  clear: _isDiffSets.default,
  delete: _isDiffSets.default,
  forEach: _isDiffSets.default
};
exports.MUTABLE_SET_METHODS = MUTABLE_SET_METHODS;
var HANDLED_SET_METHODS = new Set([].concat(_toConsumableArray(IMMUTABLE_SET_METHODS), _toConsumableArray(Object.keys(MUTABLE_SET_METHODS)), COLLECTION_ITERATOR_METHODS));
exports.HANDLED_SET_METHODS = HANDLED_SET_METHODS;
},{"../diff/is-diff-sets.js":"ih0F"}],"mnht":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDiffMaps;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function isDiffMaps(clone, value) {
  if (clone.size !== value.size) {
    return true;
  }
  var bValue;
  var _iterator = _createForOfIteratorHelper(clone),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        aValue = _step$value[1];
      bValue = value.get(key);
      if (bValue !== aValue || bValue === undefined && !value.has(key)) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
},{}],"RNlf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MUTABLE_MAP_METHODS = exports.HANDLED_MAP_METHODS = void 0;
var _isDiffMaps = _interopRequireDefault(require("../diff/is-diff-maps.js"));
var _set = require("./set.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var IMMUTABLE_MAP_METHODS = new Set([].concat(_toConsumableArray(_set.IMMUTABLE_SET_METHODS), ['get']));
var MUTABLE_MAP_METHODS = {
  set: _isDiffMaps.default,
  clear: _isDiffMaps.default,
  delete: _isDiffMaps.default,
  forEach: _isDiffMaps.default
};
exports.MUTABLE_MAP_METHODS = MUTABLE_MAP_METHODS;
var HANDLED_MAP_METHODS = new Set([].concat(_toConsumableArray(IMMUTABLE_MAP_METHODS), _toConsumableArray(Object.keys(MUTABLE_MAP_METHODS)), _toConsumableArray(_set.COLLECTION_ITERATOR_METHODS)));
exports.HANDLED_MAP_METHODS = HANDLED_MAP_METHODS;
},{"../diff/is-diff-maps.js":"mnht","./set.js":"R9PD"}],"pBVh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _path = _interopRequireDefault(require("../../path.js"));
var _isArray = _interopRequireDefault(require("../../is-array.js"));
var _isObject = _interopRequireDefault(require("../../is-object.js"));
var _array = require("../methods/array.js");
var _set = require("../methods/set.js");
var _map = require("../methods/map.js");
var _object = require("../methods/object.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CloneObject = /*#__PURE__*/function () {
  function CloneObject(value, path, argumentsList, hasOnValidate) {
    _classCallCheck(this, CloneObject);
    this._path = path;
    this._isChanged = false;
    this._clonedCache = new Set();
    this._hasOnValidate = hasOnValidate;
    this._changes = hasOnValidate ? [] : null;
    this.clone = path === undefined ? value : this._shallowClone(value);
  }
  _createClass(CloneObject, [{
    key: "_shallowClone",
    value: function _shallowClone(value) {
      var _this = this;
      var clone = value;
      if ((0, _isObject.default)(value)) {
        clone = _objectSpread({}, value);
      } else if ((0, _isArray.default)(value) || ArrayBuffer.isView(value)) {
        clone = _toConsumableArray(value);
      } else if (value instanceof Date) {
        clone = new Date(value);
      } else if (value instanceof Set) {
        clone = new Set(_toConsumableArray(value).map(function (item) {
          return _this._shallowClone(item);
        }));
      } else if (value instanceof Map) {
        clone = new Map();
        var _iterator = _createForOfIteratorHelper(value.entries()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              item = _step$value[1];
            clone.set(key, this._shallowClone(item));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      this._clonedCache.add(clone);
      return clone;
    }
  }, {
    key: "preferredThisArg",
    value: function preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget) {
      if (isHandledMethod) {
        if ((0, _isArray.default)(thisProxyTarget)) {
          this._onIsChanged = _array.MUTABLE_ARRAY_METHODS[name];
        } else if (thisProxyTarget instanceof Set) {
          this._onIsChanged = _set.MUTABLE_SET_METHODS[name];
        } else if (thisProxyTarget instanceof Map) {
          this._onIsChanged = _map.MUTABLE_MAP_METHODS[name];
        }
        return thisProxyTarget;
      }
      return thisArg;
    }
  }, {
    key: "update",
    value: function update(fullPath, property, value) {
      var _this2 = this;
      var changePath = _path.default.after(fullPath, this._path);
      if (property !== 'length') {
        var object = this.clone;
        _path.default.walk(changePath, function (key) {
          if (object && object[key]) {
            if (!_this2._clonedCache.has(object[key])) {
              object[key] = _this2._shallowClone(object[key]);
            }
            object = object[key];
          }
        });
        if (this._hasOnValidate) {
          this._changes.push({
            path: changePath,
            property: property,
            previous: value
          });
        }
        if (object && object[property]) {
          object[property] = value;
        }
      }
      this._isChanged = true;
    }
  }, {
    key: "undo",
    value: function undo(object) {
      var change;
      for (var index = this._changes.length - 1; index !== -1; index--) {
        change = this._changes[index];
        _path.default.get(object, change.path)[change.property] = change.previous;
      }
    }
  }, {
    key: "isChanged",
    value: function isChanged(value) {
      return this._onIsChanged === undefined ? this._isChanged : this._onIsChanged(this.clone, value);
    }
  }], [{
    key: "isHandledMethod",
    value: function isHandledMethod(name) {
      return _object.IMMUTABLE_OBJECT_METHODS.has(name);
    }
  }]);
  return CloneObject;
}();
exports.default = CloneObject;
},{"../../path.js":"JMAz","../../is-array.js":"kqyw","../../is-object.js":"pAAr","../methods/array.js":"uig5","../methods/set.js":"R9PD","../methods/map.js":"RNlf","../methods/object.js":"O9JC"}],"fkzx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _array = require("../methods/array.js");
var _cloneObject = _interopRequireDefault(require("./clone-object.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CloneArray = /*#__PURE__*/function (_CloneObject) {
  _inherits(CloneArray, _CloneObject);
  var _super = _createSuper(CloneArray);
  function CloneArray() {
    _classCallCheck(this, CloneArray);
    return _super.apply(this, arguments);
  }
  _createClass(CloneArray, null, [{
    key: "isHandledMethod",
    value: function isHandledMethod(name) {
      return _array.HANDLED_ARRAY_METHODS.has(name);
    }
  }]);
  return CloneArray;
}(_cloneObject.default);
exports.default = CloneArray;
},{"../methods/array.js":"uig5","./clone-object.js":"pBVh"}],"h9Gu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cloneObject = _interopRequireDefault(require("./clone-object.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CloneDate = /*#__PURE__*/function (_CloneObject) {
  _inherits(CloneDate, _CloneObject);
  var _super = _createSuper(CloneDate);
  function CloneDate() {
    _classCallCheck(this, CloneDate);
    return _super.apply(this, arguments);
  }
  _createClass(CloneDate, [{
    key: "undo",
    value: function undo(object) {
      object.setTime(this.clone.getTime());
    }
  }, {
    key: "isChanged",
    value: function isChanged(value, equals) {
      return !equals(this.clone.valueOf(), value.valueOf());
    }
  }]);
  return CloneDate;
}(_cloneObject.default);
exports.default = CloneDate;
},{"./clone-object.js":"pBVh"}],"ez2Q":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _set = require("../methods/set.js");
var _cloneObject = _interopRequireDefault(require("./clone-object.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CloneSet = /*#__PURE__*/function (_CloneObject) {
  _inherits(CloneSet, _CloneObject);
  var _super = _createSuper(CloneSet);
  function CloneSet() {
    _classCallCheck(this, CloneSet);
    return _super.apply(this, arguments);
  }
  _createClass(CloneSet, [{
    key: "undo",
    value: function undo(object) {
      var _iterator = _createForOfIteratorHelper(this.clone),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          object.add(value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(object),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _value = _step2.value;
          if (!this.clone.has(_value)) {
            object.delete(_value);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }], [{
    key: "isHandledMethod",
    value: function isHandledMethod(name) {
      return _set.HANDLED_SET_METHODS.has(name);
    }
  }]);
  return CloneSet;
}(_cloneObject.default);
exports.default = CloneSet;
},{"../methods/set.js":"R9PD","./clone-object.js":"pBVh"}],"XrhO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _map = require("../methods/map.js");
var _cloneObject = _interopRequireDefault(require("./clone-object.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CloneMap = /*#__PURE__*/function (_CloneObject) {
  _inherits(CloneMap, _CloneObject);
  var _super = _createSuper(CloneMap);
  function CloneMap() {
    _classCallCheck(this, CloneMap);
    return _super.apply(this, arguments);
  }
  _createClass(CloneMap, [{
    key: "undo",
    value: function undo(object) {
      var _iterator = _createForOfIteratorHelper(this.clone.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];
          object.set(key, value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(object.keys()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _key = _step2.value;
          if (!this.clone.has(_key)) {
            object.delete(_key);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }], [{
    key: "isHandledMethod",
    value: function isHandledMethod(name) {
      return _map.HANDLED_MAP_METHODS.has(name);
    }
  }]);
  return CloneMap;
}(_cloneObject.default);
exports.default = CloneMap;
},{"../methods/map.js":"RNlf","./clone-object.js":"pBVh"}],"dIk3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cloneObject = _interopRequireDefault(require("./clone-object.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CloneWeakSet = /*#__PURE__*/function (_CloneObject) {
  _inherits(CloneWeakSet, _CloneObject);
  var _super = _createSuper(CloneWeakSet);
  function CloneWeakSet(value, path, argumentsList, hasOnValidate) {
    var _this;
    _classCallCheck(this, CloneWeakSet);
    _this = _super.call(this, undefined, path, argumentsList, hasOnValidate);
    _this._arg1 = argumentsList[0];
    _this._weakValue = value.has(_this._arg1);
    return _this;
  }
  _createClass(CloneWeakSet, [{
    key: "isChanged",
    value: function isChanged(value) {
      return this._weakValue !== value.has(this._arg1);
    }
  }, {
    key: "undo",
    value: function undo(object) {
      if (this._weakValue && !object.has(this._arg1)) {
        object.add(this._arg1);
      } else {
        object.delete(this._arg1);
      }
    }
  }]);
  return CloneWeakSet;
}(_cloneObject.default);
exports.default = CloneWeakSet;
},{"./clone-object.js":"pBVh"}],"Ziup":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cloneObject = _interopRequireDefault(require("./clone-object.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CloneWeakMap = /*#__PURE__*/function (_CloneObject) {
  _inherits(CloneWeakMap, _CloneObject);
  var _super = _createSuper(CloneWeakMap);
  function CloneWeakMap(value, path, argumentsList, hasOnValidate) {
    var _this;
    _classCallCheck(this, CloneWeakMap);
    _this = _super.call(this, undefined, path, argumentsList, hasOnValidate);
    _this._weakKey = argumentsList[0];
    _this._weakHas = value.has(_this._weakKey);
    _this._weakValue = value.get(_this._weakKey);
    return _this;
  }
  _createClass(CloneWeakMap, [{
    key: "isChanged",
    value: function isChanged(value) {
      return this._weakValue !== value.get(this._weakKey);
    }
  }, {
    key: "undo",
    value: function undo(object) {
      var weakHas = object.has(this._weakKey);
      if (this._weakHas && !weakHas) {
        object.set(this._weakKey, this._weakValue);
      } else if (!this._weakHas && weakHas) {
        object.delete(this._weakKey);
      } else if (this._weakValue !== object.get(this._weakKey)) {
        object.set(this._weakKey, this._weakValue);
      }
    }
  }]);
  return CloneWeakMap;
}(_cloneObject.default);
exports.default = CloneWeakMap;
},{"./clone-object.js":"pBVh"}],"TWWR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isArray = _interopRequireDefault(require("../is-array.js"));
var _isBuiltin = require("../is-builtin.js");
var _isObject = _interopRequireDefault(require("../is-object.js"));
var _cloneObject = _interopRequireDefault(require("./clone/clone-object.js"));
var _cloneArray = _interopRequireDefault(require("./clone/clone-array.js"));
var _cloneDate = _interopRequireDefault(require("./clone/clone-date.js"));
var _cloneSet = _interopRequireDefault(require("./clone/clone-set.js"));
var _cloneMap = _interopRequireDefault(require("./clone/clone-map.js"));
var _cloneWeakset = _interopRequireDefault(require("./clone/clone-weakset.js"));
var _cloneWeakmap = _interopRequireDefault(require("./clone/clone-weakmap.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SmartClone = /*#__PURE__*/function () {
  function SmartClone(hasOnValidate) {
    _classCallCheck(this, SmartClone);
    this._stack = [];
    this._hasOnValidate = hasOnValidate;
  }
  _createClass(SmartClone, [{
    key: "isCloning",
    get: function get() {
      return this._stack.length > 0;
    }
  }, {
    key: "start",
    value: function start(value, path, argumentsList) {
      var CloneClass = _cloneObject.default;
      if ((0, _isArray.default)(value)) {
        CloneClass = _cloneArray.default;
      } else if (value instanceof Date) {
        CloneClass = _cloneDate.default;
      } else if (value instanceof Set) {
        CloneClass = _cloneSet.default;
      } else if (value instanceof Map) {
        CloneClass = _cloneMap.default;
      } else if (value instanceof WeakSet) {
        CloneClass = _cloneWeakset.default;
      } else if (value instanceof WeakMap) {
        CloneClass = _cloneWeakmap.default;
      }
      this._stack.push(new CloneClass(value, path, argumentsList, this._hasOnValidate));
    }
  }, {
    key: "update",
    value: function update(fullPath, property, value) {
      this._stack[this._stack.length - 1].update(fullPath, property, value);
    }
  }, {
    key: "preferredThisArg",
    value: function preferredThisArg(target, thisArg, thisProxyTarget) {
      var name = target.name;
      var isHandledMethod = SmartClone.isHandledMethod(thisProxyTarget, name);
      return this._stack[this._stack.length - 1].preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget);
    }
  }, {
    key: "isChanged",
    value: function isChanged(isMutable, value, equals) {
      return this._stack[this._stack.length - 1].isChanged(isMutable, value, equals);
    }
  }, {
    key: "undo",
    value: function undo(object) {
      if (this._previousClone !== undefined) {
        this._previousClone.undo(object);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this._previousClone = this._stack.pop();
      return this._previousClone.clone;
    }
  }], [{
    key: "isHandledType",
    value: function isHandledType(value) {
      return (0, _isObject.default)(value) || (0, _isArray.default)(value) || (0, _isBuiltin.isBuiltinWithMutableMethods)(value);
    }
  }, {
    key: "isHandledMethod",
    value: function isHandledMethod(target, name) {
      if ((0, _isObject.default)(target)) {
        return _cloneObject.default.isHandledMethod(name);
      }
      if ((0, _isArray.default)(target)) {
        return _cloneArray.default.isHandledMethod(name);
      }
      if (target instanceof Set) {
        return _cloneSet.default.isHandledMethod(name);
      }
      if (target instanceof Map) {
        return _cloneMap.default.isHandledMethod(name);
      }
      return (0, _isBuiltin.isBuiltinWithMutableMethods)(target);
    }
  }]);
  return SmartClone;
}();
exports.default = SmartClone;
},{"../is-array.js":"kqyw","../is-builtin.js":"hPdU","../is-object.js":"pAAr","./clone/clone-object.js":"pBVh","./clone/clone-array.js":"fkzx","./clone/clone-date.js":"h9Gu","./clone/clone-set.js":"ez2Q","./clone/clone-map.js":"XrhO","./clone/clone-weakset.js":"dIk3","./clone/clone-weakmap.js":"Ziup"}],"zBOH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _constants = require("./lib/constants.js");
var _isBuiltin = require("./lib/is-builtin.js");
var _path = _interopRequireDefault(require("./lib/path.js"));
var _isSymbol = _interopRequireDefault(require("./lib/is-symbol.js"));
var _isIterator = _interopRequireDefault(require("./lib/is-iterator.js"));
var _wrapIterator = _interopRequireDefault(require("./lib/wrap-iterator.js"));
var _ignoreProperty = _interopRequireDefault(require("./lib/ignore-property.js"));
var _cache = _interopRequireDefault(require("./lib/cache.js"));
var _smartClone = _interopRequireDefault(require("./lib/smart-clone/smart-clone.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultOptions = {
  equals: Object.is,
  isShallow: false,
  pathAsArray: false,
  ignoreSymbols: false,
  ignoreUnderscores: false,
  ignoreDetached: false,
  details: false
};
var onChange = function onChange(object, _onChange) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  options = _objectSpread(_objectSpread({}, defaultOptions), options);
  var proxyTarget = Symbol('ProxyTarget');
  var _options = options,
    equals = _options.equals,
    isShallow = _options.isShallow,
    ignoreDetached = _options.ignoreDetached,
    details = _options.details;
  var cache = new _cache.default(equals);
  var hasOnValidate = typeof options.onValidate === 'function';
  var smartClone = new _smartClone.default(hasOnValidate);

  // eslint-disable-next-line max-params
  var validate = function validate(target, property, value, previous, applyData) {
    return !hasOnValidate || smartClone.isCloning || options.onValidate(_path.default.concat(cache.getPath(target), property), value, previous, applyData) === true;
  };
  var handleChangeOnTarget = function handleChangeOnTarget(target, property, value, previous) {
    if (!(0, _ignoreProperty.default)(cache, options, property) && !(ignoreDetached && cache.isDetached(target, object))) {
      handleChange(cache.getPath(target), property, value, previous);
    }
  };

  // eslint-disable-next-line max-params
  var handleChange = function handleChange(changePath, property, value, previous, applyData) {
    if (smartClone.isCloning) {
      smartClone.update(changePath, property, previous);
    } else {
      _onChange(_path.default.concat(changePath, property), value, previous, applyData);
    }
  };
  var getProxyTarget = function getProxyTarget(value) {
    return value ? value[proxyTarget] || value : value;
  };
  var prepareValue = function prepareValue(value, target, property, basePath) {
    if ((0, _isBuiltin.isBuiltinWithoutMutableMethods)(value) || property === 'constructor' || isShallow && !_smartClone.default.isHandledMethod(target, property) || (0, _ignoreProperty.default)(cache, options, property) || cache.isGetInvariant(target, property) || ignoreDetached && cache.isDetached(target, object)) {
      return value;
    }
    if (basePath === undefined) {
      basePath = cache.getPath(target);
    }
    return cache.getProxy(value, _path.default.concat(basePath, property), handler, proxyTarget);
  };
  var handler = {
    get: function get(target, property, receiver) {
      if ((0, _isSymbol.default)(property)) {
        if (property === proxyTarget || property === _constants.TARGET) {
          return target;
        }
        if (property === _constants.UNSUBSCRIBE && !cache.isUnsubscribed && cache.getPath(target).length === 0) {
          cache.unsubscribe();
          return target;
        }
      }
      var value = (0, _isBuiltin.isBuiltinWithMutableMethods)(target) ? Reflect.get(target, property) : Reflect.get(target, property, receiver);
      return prepareValue(value, target, property);
    },
    set: function set(target, property, value, receiver) {
      value = getProxyTarget(value);
      var reflectTarget = target[proxyTarget] || target;
      var previous = reflectTarget[property];
      if (equals(previous, value) && property in target) {
        return true;
      }
      var isValid = validate(target, property, value, previous);
      if (isValid && cache.setProperty(reflectTarget, property, value, receiver, previous)) {
        handleChangeOnTarget(target, property, target[property], previous);
        return true;
      }
      return !isValid;
    },
    defineProperty: function defineProperty(target, property, descriptor) {
      if (!cache.isSameDescriptor(descriptor, target, property)) {
        var previous = target[property];
        if (validate(target, property, descriptor.value, previous) && cache.defineProperty(target, property, descriptor, previous)) {
          handleChangeOnTarget(target, property, descriptor.value, previous);
        }
      }
      return true;
    },
    deleteProperty: function deleteProperty(target, property) {
      if (!Reflect.has(target, property)) {
        return true;
      }
      var previous = Reflect.get(target, property);
      var isValid = validate(target, property, undefined, previous);
      if (isValid && cache.deleteProperty(target, property, previous)) {
        handleChangeOnTarget(target, property, undefined, previous);
        return true;
      }
      return !isValid;
    },
    apply: function apply(target, thisArg, argumentsList) {
      var thisProxyTarget = thisArg[proxyTarget] || thisArg;
      if (cache.isUnsubscribed) {
        return Reflect.apply(target, thisProxyTarget, argumentsList);
      }
      if ((details === false || details !== true && !details.includes(target.name)) && _smartClone.default.isHandledType(thisProxyTarget)) {
        var applyPath = _path.default.initial(cache.getPath(target));
        var isHandledMethod = _smartClone.default.isHandledMethod(thisProxyTarget, target.name);
        smartClone.start(thisProxyTarget, applyPath, argumentsList);
        var result = Reflect.apply(target, smartClone.preferredThisArg(target, thisArg, thisProxyTarget), isHandledMethod ? argumentsList.map(function (argument) {
          return getProxyTarget(argument);
        }) : argumentsList);
        var isChanged = smartClone.isChanged(thisProxyTarget, equals);
        var previous = smartClone.stop();
        if (_smartClone.default.isHandledType(result) && isHandledMethod) {
          if (thisArg instanceof Map && target.name === 'get') {
            applyPath = _path.default.concat(applyPath, argumentsList[0]);
          }
          result = cache.getProxy(result, applyPath, handler);
        }
        if (isChanged) {
          var applyData = {
            name: target.name,
            args: argumentsList,
            result: result
          };
          var changePath = smartClone.isCloning ? _path.default.initial(applyPath) : applyPath;
          var property = smartClone.isCloning ? _path.default.last(applyPath) : '';
          if (validate(_path.default.get(object, changePath), property, thisProxyTarget, previous, applyData)) {
            handleChange(changePath, property, thisProxyTarget, previous, applyData);
          } else {
            smartClone.undo(thisProxyTarget);
          }
        }
        if ((thisArg instanceof Map || thisArg instanceof Set) && (0, _isIterator.default)(result)) {
          return (0, _wrapIterator.default)(result, target, thisArg, applyPath, prepareValue);
        }
        return result;
      }
      return Reflect.apply(target, thisArg, argumentsList);
    }
  };
  var proxy = cache.getProxy(object, options.pathAsArray ? [] : '', handler);
  _onChange = _onChange.bind(proxy);
  if (hasOnValidate) {
    options.onValidate = options.onValidate.bind(proxy);
  }
  return proxy;
};
onChange.target = function (proxy) {
  return proxy && proxy[_constants.TARGET] || proxy;
};
onChange.unsubscribe = function (proxy) {
  return proxy[_constants.UNSUBSCRIBE] || proxy;
};
var _default = onChange;
exports.default = _default;
},{"./lib/constants.js":"mG38","./lib/is-builtin.js":"hPdU","./lib/path.js":"JMAz","./lib/is-symbol.js":"a6za","./lib/is-iterator.js":"Gi15","./lib/wrap-iterator.js":"WWMb","./lib/ignore-property.js":"vfP1","./lib/cache.js":"N0XF","./lib/smart-clone/smart-clone.js":"TWWR"}],"IwFA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _onChange = _interopRequireDefault(require("on-change"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);
    var state = {
      places: []
    };
    this.state = (0, _onChange.default)(state, this.update);
  }
  _createClass(State, [{
    key: "update",
    value: function update(path, current, prev) {
      console.log("".concat(path, " changed from ").concat(prev.length, " to ").concat(current.length));
    }
  }]);
  return State;
}();
exports.default = State;
},{"on-change":"zBOH"}],"hR19":[function(require,module,exports) {
"use strict";

var _ua = _interopRequireDefault(require("/src/api/ua"));
var _refs = _interopRequireDefault(require("./refs"));
var _placesModule = _interopRequireDefault(require("./placesModule"));
var _map = _interopRequireDefault(require("./api/map"));
var _nearbyPlaces = _interopRequireDefault(require("./nearbyPlaces"));
var _state = _interopRequireDefault(require("./state"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var stateManager = new _state.default();
var places = stateManager.state.places;

// [
//   ...refs.radios.children,
// ][0].title = `${countries[0].city} ${countries[0].admin_name}`;

_toConsumableArray(_refs.default.radios.children)[0].title = "".concat(_ua.default[0].city, " ").concat(_ua.default[0].admin_name);

// делаем селект из массива

_ua.default.map(function (country, i) {
  var input = document.createElement("input");
  input.type = "radio";
  input.name = "city__item";
  input.id = i;
  input.title = country.city;
  _refs.default.radios.append(input);
  _refs.default.citiesList.insertAdjacentHTML("beforeend", "<li class=\"item\">\n    <label for=\"".concat(i, "\">\n        ").concat(country.city, "\n        <p>").concat(country.admin_name, "</p>\n    </label>\n    </li>"));
});

// вешаем событие на селект

_refs.default.citiesList.addEventListener("click", handleSelect);
function handleSelect(e) {
  if (e.target.nodeName == "LI") {
    console.log(e.target.firstElementChild.htmlFor);
    _placesModule.default.getPlaces(_ua.default, Number(e.target.firstElementChild.htmlFor));
  }
  (0, _map.default)(_placesModule.default.result, function (data) {
    places.push(data);
    (0, _nearbyPlaces.default)(places);
  });
  _toConsumableArray(_refs.default.radios.children)[0].title = e.target.innerText;
  _refs.default.customSelect.removeAttribute("open");

  // // очищаем places перед обновлением города

  places.splice(0, places.length);
  _refs.default.placesList.querySelectorAll(".item").forEach(function (n) {
    return n.remove();
  });
}
},{"/src/api/ua":"PnCN","./refs":"xoer","./placesModule":"dJ8O","./api/map":"Jud3","./nearbyPlaces":"jeep","./state":"IwFA"}],"Focm":[function(require,module,exports) {
"use strict";

var _sidebar = _interopRequireDefault(require("./src/sidebar"));
var _nearbyPlaces = _interopRequireDefault(require("./src/nearbyPlaces"));
var _state = _interopRequireDefault(require("./src/state"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/sidebar":"hR19","./src/nearbyPlaces":"jeep","./src/state":"IwFA"}]},{},["Focm"], null)
//# sourceMappingURL=/map/map.cb6a4737.js.map