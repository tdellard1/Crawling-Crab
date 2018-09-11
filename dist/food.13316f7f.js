// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"components\\Info.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Info;
function Info(state) {
    return "\n    <div id=\"info\">\n        <div class=\"vert\">\n            <h3 class=\"vert\">" + state.title + "</h3>\n            </div>\n            <div id=\"address\">\n                <p>1671 El Tigre Terrace</p>\n                <p>St.Louis, MO 63138</p>\n            </div>\n            <div class=\"vert\">\n                <h3>Connect</h3>\n            </div>\n            \n            <div id=\"hours\">\n                <p>Closed until Thursday</p>\n                <p>Thursday - Sunday</p>\n                <p>2:00PM - 8:00PM</p>\n            </div>\n            <div class=\"vert\">\n                <h3>Hours Of Operation</h3>\n            </div>        \n            <div id=\"connect\">\n                <i class=\"fas fa-phone-square fa-5x\"></i>\n                <i class=\"fab fa-facebook fa-5x\"></i>\n            </div>\n        </div>\n            ";
}
},{}],"components\\Navigation.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Navigation;

function Link(link) {
    return '\n    <li><a href="/' + link + '">' + link + '</a></li>\n    ';
}

function Navigation(state) {
    var links = '';

    for (var i = 0; i < state.links.length; i++) {
        links += Link(state.links[i]);
    }

    return '\n    <div id="navigation">\n        <ul>\n            ' + links + '\n        </ul>\n    </div>\n        ';
}
},{}],"dist\\2promo.591a007e.jpg":[function(require,module,exports) {
module.exports = "/2promo.591a007e.dbfe0ecb.jpg";
},{}],"dist\\3promo.0cbbdff5.jpg":[function(require,module,exports) {
module.exports = "/3promo.0cbbdff5.f83cd76b.jpg";
},{}],"dist\\promo.ba90b7a4.jpg":[function(require,module,exports) {
module.exports = "/promo.ba90b7a4.f084b91b.jpg";
},{}],"components\\Promo.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Promo;

var _promo591a007e = require('../dist/2promo.591a007e.jpg');

var _promo591a007e2 = _interopRequireDefault(_promo591a007e);

var _promo0cbbdff = require('../dist/3promo.0cbbdff5.jpg');

var _promo0cbbdff2 = _interopRequireDefault(_promo0cbbdff);

var _promoBa90b7a = require('../dist/promo.ba90b7a4.jpg');

var _promoBa90b7a2 = _interopRequireDefault(_promoBa90b7a);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Promo() {
    return '\n    <div id="promo">\n        <h1>PROMO</h1>\n        <div id="promopic">\n            <img src="' + _promo591a007e2.default + '" alt="promo pic 1">\n            <img src="' + _promo0cbbdff2.default + '" alt="promo pic 1">\n            <img src="' + _promoBa90b7a2.default + '" alt="promo pic 2">\n        </div>\n    </div>';
}
},{"../dist/2promo.591a007e.jpg":"dist\\2promo.591a007e.jpg","../dist/3promo.0cbbdff5.jpg":"dist\\3promo.0cbbdff5.jpg","../dist/promo.ba90b7a4.jpg":"dist\\promo.ba90b7a4.jpg"}],"dist\\seafood-mac.d8913992.jpg":[function(require,module,exports) {
module.exports = "/seafood-mac.d8913992.0d342877.jpg";
},{}],"dist\\menu.812f13a2.jpg":[function(require,module,exports) {
module.exports = "/menu.812f13a2.9fe44a7b.jpg";
},{}],"components\\Menu.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Menu;

var _seafoodMacD = require('../dist/seafood-mac.d8913992.jpg');

var _seafoodMacD2 = _interopRequireDefault(_seafoodMacD);

var _menu812f13a = require('../dist/menu.812f13a2.jpg');

var _menu812f13a2 = _interopRequireDefault(_menu812f13a);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Menu() {
    return '\n    <div id="menu">\n        <h1>MENU</h1>\n        <div id="menuitems">\n            <div id="stepone" class="steps">\n                <h2>Step One - Select Your Side</h2>\n                <div id="steponegrid">\n                    <h4>Sides:</h4>\n                    <ul>\n                        <li>Sweet Corn</li>\n                        <li>Sausage Chunks</li>\n                        <li>Hand Cut Potatoes</li>\n                        <li>Cajin Boiled Eggs</li>\n                        <img src="' + _seafoodMacD2.default + '" alt="Mac">\n                        <img src="' + _seafoodMacD2.default + '" alt="Mac">\n                        <img src="' + _seafoodMacD2.default + '" alt="Mac">\n                        <img src="' + _seafoodMacD2.default + '" alt="Mac">\n                    </ul>\n                </div>\n            </div>\n            <div id="steptwo" class="steps">\n                <h2>Step Two - Select Your Meat</h2>\n                <ul>\n                    <li>Jumbo Shrimp</li>\n                    <li>Crab Leg Cluster</li>\n                </ul>\n                <div id="steptwogrid">\n                    <img src="' + _seafoodMacD2.default + '" alt="Mac">\n                    <img src="' + _seafoodMacD2.default + '" alt="Mac">\n                </div>        \n            </div>\n            <div id="appetizers" class="steps">\n                <h2>Add An Appetizer</h2>\n            </div>\n        </div>\n        <div id="menupic">\n            <img src="' + _menu812f13a2.default + '" alt="menu">\n        </div>\n    </div>';
}
},{"../dist/seafood-mac.d8913992.jpg":"dist\\seafood-mac.d8913992.jpg","../dist/menu.812f13a2.jpg":"dist\\menu.812f13a2.jpg"}],"components\\Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Footer;
function Footer() {
    return "\n    <div id=\"footer\">\n        <h1>FOOTER</h1>\n    </div>";
}
},{}],"components\\Landing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Landing;
function Landing() {
    return "\n    <div id=\"landing\">\n    </div>";
}
},{}],"index.js":[function(require,module,exports) {
'use strict';

var _Info = require('./components/Info');

var _Info2 = _interopRequireDefault(_Info);

var _Navigation = require('./components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Promo = require('./components/Promo');

var _Promo2 = _interopRequireDefault(_Promo);

var _Menu = require('./components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Footer = require('./components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Landing = require('./components/Landing');

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var State = {
    'active': 'Home',
    'Home': {
        'links': ['Promo', 'Menu', 'Contacts'],
        'title': 'Welcome To The Home Page'
    },
    'Promo': {
        'links': ['Home', 'Menu', 'Contacts'],
        'title': 'Welcome To The Promo Page'
    },
    'Menu': {
        'links': ['Home', 'Promo', 'Contacts'],
        'title': 'Welcome To The Menu Page'
    },
    'contact': {
        'links': ['Home', 'Promo', 'Menu', 'Contacts'],
        'title': 'Welcome To The Contact Page'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event) {
    var newState = State;

    newState.active = event.target.textContent;
    event.preventDefault();
    render(newState); // eslint-disable-line
}

function render(state) {
    var links;

    root.innerHTML = '\n    ' + (0, _Landing2.default)() + '\n    ' + (0, _Info2.default)(state[state.active]) + '\n    ' + (0, _Navigation2.default)(state[state.active]) + '\n    ' + (0, _Promo2.default)() + '\n    ' + (0, _Menu2.default)() + '\n    ' + (0, _Footer2.default)() + '\n    ';

    links = document.querySelectorAll('#navigation a');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', handleNavigation);
    }
}

render(State);
},{"./components/Info":"components\\Info.js","./components/Navigation":"components\\Navigation.js","./components/Promo":"components\\Promo.js","./components/Menu":"components\\Menu.js","./components/Footer":"components\\Footer.js","./components/Landing":"components\\Landing.js"}],"..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '53837' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/food.13316f7f.map