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
})({"dJ8O":[function(require,module,exports) {
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
  search: document.querySelector(".search")
};
var _default = refs;
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
var places = [];
_refs.default.search.addEventListener("input", function (e) {
  e.target.value;
});

// Google API

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
      results.forEach(function (res) {
        places.push(res);
        var filteredArr;

        // Поиск мест

        _refs.default.search.addEventListener("input", handleInput);
        function handleInput(e) {
          filteredArr = places.filter(function (el) {
            return el.name.toLowerCase().includes(e.target.value.toLowerCase());
          });
          nearbyPlacesList(filteredArr, map);
        }
        nearbyPlacesList(places, map);
      });

      //

      map.setCenter(results[0].geometry.location);
    }
  });
}

// Добавляем масив ближайших мест

var nearbyPlacesList = function nearbyPlacesList(places, map) {
  _refs.default.placesList.innerHTML = "";
  var _iterator = _createForOfIteratorHelper(places),
    _step;
  try {
    var _loop = function _loop() {
      var place = _step.value;
      var li = document.createElement("li");
      var p = document.createElement("p");
      // const img = document.createElement("img");

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
},{"../placesModule":"dJ8O","../refs":"xoer"}]},{},["Jud3"], null)
//# sourceMappingURL=/map/map.063f9157.js.map