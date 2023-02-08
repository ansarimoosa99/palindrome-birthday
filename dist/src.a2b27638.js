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
})({"src/index.js":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function reverseString(stDate) {
  var charList = stDate.split("");
  var reversedList = charList.reverse();
  var abs = reversedList.join("");
  return abs;
}
function isPalindome(stDob) {
  var reversedDob = reverseString(stDob);
  return reversedDob === stDob;
}
function dateToString(inDate) {
  var stDob = {
    day: "",
    month: "",
    year: ""
  };
  if (inDate.day < 10) {
    stDob.day = "0" + inDate.day;
  } else {
    stDob.day = inDate.day.toString();
  }
  if (inDate.month < 10) {
    stDob.month = "0" + inDate.month;
  } else {
    stDob.month = inDate.month.toString();
  }
  stDob.year = inDate.year.toString();
  return stDob;
}
function convertDateToAllFormat(stDate) {
  // console.log(stDate.day, stDate.month, stDate.year);
  var ddmmyyyy = stDate.day + stDate.month + stDate.year;
  var mmddyyyy = stDate.month + stDate.day + stDate.year;
  var yyyymmdd = stDate.year + stDate.month + stDate.day;
  var yyyyddmm = stDate.year + stDate.day + stDate.month;
  var ddmmyy = stDate.day + stDate.month + stDate.year.slice(-2);
  var mmddyy = stDate.month + stDate.day + stDate.year.slice(-2);
  var yyddmm = stDate.year.slice(-2) + stDate.day + stDate.month;
  var yymmdd = stDate.year.slice(-2) + stDate.month + stDate.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, yyyyddmm, ddmmyy, mmddyy, yyddmm, yymmdd];
}
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
function getNextDate(inDate) {
  var day = inDate.day + 1;
  var month = inDate.month;
  var year = inDate.year;
  // console.log("year", +year);

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2) {
    // console.log(isLeapYear(year));
    if (isLeapYear(year)) {
      // console.log("day", +day);
      if (day > 29) {
        day = 1;
        month = 3;
      }
    } else {
      if (day > 28) {
        day = 1;
        month = 3;
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month = month + 1;
    }
  }
  if (month > 12) {
    month = 1;
    year = year + 1;
  }
  return {
    day: day,
    month: month,
    year: year
  };
}
function nextPalindromeDate(inDate) {
  var nextDate = getNextDate(inDate);
  var ctr = 0;
  while (1) {
    ctr++;
    var dob = dateToString(nextDate);
    //console.log(dob);
    var allDateFormats = convertDateToAllFormat(dob);
    for (var i = 0; i < allDateFormats.length; i++) {
      if (isPalindome(allDateFormats[i])) {
        return [ctr, nextDate];
        break;
      }
    }
    nextDate = getNextDate(nextDate);
  }
}
function getPrevDate(inDate) {
  var day = inDate.day - 1;
  var month = inDate.month;
  var year = inDate.year;
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 3) {
    if (isLeapYear(year)) {
      if (day === 0) {
        day = 29;
        month = 2;
      }
    } else {
      if (day === 0) {
        day = 28;
        month = 2;
      }
    } // 1 1 2000   = 0 3 2000
  } else {
    if (day === 0) {
      if (month === 1) {
        month = 12;
        year = year - 1;
        day = daysInMonth[month - 1];
      } else {
        month = month - 1;
        day = daysInMonth[month - 1];
      }
    }
  }
  return {
    day: day,
    month: month,
    year: year
  };
}
function prevPalindromeDate(inDate) {
  var prevDate = getPrevDate(inDate);
  var ctr = 0;
  while (1) {
    ctr++;
    var dob = dateToString(prevDate);
    //console.log(dob);
    var allDateFormats = convertDateToAllFormat(dob);
    for (var i = 0; i < allDateFormats.length; i++) {
      if (isPalindome(allDateFormats[i])) {
        return [ctr, prevDate];
        break;
      }
    }
    prevDate = getPrevDate(prevDate);
  }
}
function checkIfDateIsPalindrome(inDate) {
  var dob = dateToString(inDate);
  console.log(dob);
  var allDateFormats = convertDateToAllFormat(dob);
  var flag = false;
  for (var i = 0; i < allDateFormats.length; i++) {
    if (isPalindome(allDateFormats[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}

// var inDate = {
//   day: 3,  //021120
//   month: 11,
//   year: 2020
// };

// console.log(prevPalindromeDate(inDate));

// console.log(isLeapYear(2021));

var dob = document.querySelector("#date-of-birth");
var showBtnRef = document.querySelector("#show-btn");
var resultArea = document.querySelector("#result");
function clickHandler() {
  var stDob = dob.value;
  if (stDob !== "") {
    var dobList = stDob.split("-");
    var inDate = {
      day: Number(dobList[2]),
      month: Number(dobList[1]),
      year: Number(dobList[0])
    };
    if (checkIfDateIsPalindrome(inDate)) {
      resultArea.innerText = "Yay, Your bday is palindrome";
    } else {
      //alt method below
      var _nextPalindromeDate = nextPalindromeDate(inDate),
        _nextPalindromeDate2 = _slicedToArray(_nextPalindromeDate, 2),
        ctr1 = _nextPalindromeDate2[0],
        nextDate = _nextPalindromeDate2[1];
      var _prevPalindromeDate = prevPalindromeDate(inDate),
        _prevPalindromeDate2 = _slicedToArray(_prevPalindromeDate, 2),
        ctr2 = _prevPalindromeDate2[0],
        prevDate = _prevPalindromeDate2[1];
      // console.log(nextDate);
      // console.log(prevDate);

      if (ctr1 < ctr2) {
        //next palindrome near
        if (ctr1 === 1) {
          // 1  day away so print Day
          resultArea.innerText = "The nearest palindrome date is " + nextDate.day + "-" + nextDate.month + "-" + nextDate.year + ", you missed by " + ctr1 + " day";
        } else {
          //many days away. many DAYS
          resultArea.innerText = "The nearest palindrome date is " + nextDate.day + "-" + nextDate.month + "-" + nextDate.year + ", you missed by " + ctr1 + " days";
        }
      } else {
        //prevpalindrome near
        if (ctr2 === 1) {
          resultArea.innerText = "The nearest palindrome date is " + prevDate.day + "-" + prevDate.month + "-" + prevDate.year + ", you missed by " + ctr2 + " day";
        } else {
          resultArea.innerText = "The nearest palindrome date is " + prevDate.day + "-" + prevDate.month + "-" + prevDate.year + ", you missed by " + ctr2 + " days";
        }

        // console.log("Not palindrome");
      }

      console.log(inDate);
    }
  }
}
showBtnRef.addEventListener("click", clickHandler);

// if (!isPalindrome) {
//   const [ctr1, nextDate] = getNextPalindromeDate(date);
//   const [ctr2, prevDate] = getPreviousPalindromeDate(date);

//   if (ctr1 > ctr2) {
//     resultDiv.innerText = `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed by ${ctr2} days.`;
//   } else {
//     resultDiv.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days.`;
//   }
// } else {
//   resultDiv.innerText = 'Yay! Your birthday is palindrome!';
//
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42479" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map