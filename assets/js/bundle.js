/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/menu-scroll.js */ "./src/modules/menu-scroll.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modal.js */ "./src/modules/modal.js");



var onLoad = function onLoad() {
  //SlideDown menu mobile - close on scroll
  //Flags
  var scrolled = false;
  var menuMinimized = false;

  var sizeMenu = function sizeMenu(size) {
    var menuParent = document.querySelector('header');
    var menuMob = document.querySelector('.menu-mobile');
    var menuMobHeight;
    menuParent.className = "height-".concat(size);
    size === 1 ? menuMobHeight = 100 + 'px' : menuMobHeight = 70 + 'px';
    menuMob.style.top = menuMobHeight;
    size === 2 ? menuMinimized = true : menuMinimized = false;
  };

  var checkMenuSize = function checkMenuSize() {
    if (window.pageYOffset > 100) {
      scrolled = true;
      !menuMinimized ? sizeMenu(2) : false;
    } else {
      scrolled = false;
      menuMinimized ? sizeMenu(1) : false;
    }
  };

  window.addEventListener('scroll', function () {
    return checkMenuSize();
  }); //On load functions

  Object(_modules_menu_scroll_js__WEBPACK_IMPORTED_MODULE_0__["initMenuMobile"])();
  Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__["galleryModal"])();
  checkMenuSize();
};

onLoad();

/***/ }),

/***/ "./src/modules/custom-lib.js":
/*!***********************************!*\
  !*** ./src/modules/custom-lib.js ***!
  \***********************************/
/*! exports provided: scrollTo, show, hide, toggle, sideIn, sideOut, slideUp, slideDown, slideToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideIn", function() { return sideIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideOut", function() { return sideOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUp", function() { return slideUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideDown", function() { return slideDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToggle", function() { return slideToggle; });
//Customized library - JavaScript
// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

/* (function () {
	scrollTo();
})(); */
function scrollTo() {
  var links = document.querySelectorAll('.scroll');
  links.forEach(function (each) {
    return each.onclick = scrollAnchors;
  });
}

function scrollAnchors(e) {
  var respond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var distanceToTop = function distanceToTop(el) {
    return Math.floor(el.getBoundingClientRect().top);
  };

  e.preventDefault();
  var targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');
  var targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  var originalTop = distanceToTop(targetAnchor);
  window.scrollBy({
    top: originalTop,
    left: 0,
    behavior: 'smooth'
  });
  var checkIfDone = setInterval(function () {
    var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
} //--------------------------------------------------------------------------------
// functions: show(), hide() and toggle()


var show = function show(element) {
  return element.style.display = 'block';
};
var hide = function hide(element) {
  return element.style.display = 'none';
};
var toggle = function toggle(element) {
  if (window.getComputedStyle(element).display === 'block') {
    hide(element);
    return;
  } else show(element);
}; //Slide side-to-side menu

var sideIn = function sideIn(obj, startPos, endPos, speed) {
  obj.animate([{
    width: startPos
  }, {
    width: endPos
  }], speed);
  obj.style.width = endPos;
};
var sideOut = function sideOut(obj, startPos, endPos, speed) {
  obj.animate([{
    width: startPos
  }, {
    width: endPos
  }], speed);
  obj.style.width = endPos;
}; //-----------------------------------------------------------------------------------
//Vanilla JS slideUp, slideDown and slideToggle
//https://gist.github.com/skttl/b8ea597ebf2db66a3e2a06491f7b4029

/* SLIDE UP */

var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property'); //alert("!");
  }, duration);
};
/* SLIDE DOWN */

var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};
/* TOGGLE */

var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}; // Specify Element and Duration (milliseconds)

/*
document.querySelector("#button-slide").addEventListener('click', () => {
	slideToggle(document.getElementById("slide"), 1000);
	slideDown(document.getElementById("slide"), 1000);
	slideUp(document.getElementById("slide"), 1000);
})
*/
//------------------------------------------------------------------------------

/***/ }),

/***/ "./src/modules/menu-scroll.js":
/*!************************************!*\
  !*** ./src/modules/menu-scroll.js ***!
  \************************************/
/*! exports provided: initMenuMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMenuMobile", function() { return initMenuMobile; });
/* harmony import */ var _custom_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-lib.js */ "./src/modules/custom-lib.js");
//--------------MENU SCROLL--------------------

var initMenuMobile = function initMenuMobile() {
  var menuMobile = document.querySelector(".menu-mobile");
  var speed = 400;
  var delay = speed * 1.1; //re-click allowed after: speed + 10%

  var menuDown = false; //down = true; up = false

  var clicked = true;
  document.querySelector('.icon-menu-mob').addEventListener('click', function () {
    while (clicked) {
      if (!menuDown) {
        Object(_custom_lib_js__WEBPACK_IMPORTED_MODULE_0__["slideDown"])(menuMobile, speed);
        menuDown = true;
      } else {
        Object(_custom_lib_js__WEBPACK_IMPORTED_MODULE_0__["slideUp"])(menuMobile, speed);
        menuDown = false;
      }

      clicked = false;
      setTimeout(function () {
        return clicked = true;
      }, delay);
    }
  });
  document.querySelector('body,html').addEventListener('click', function () {
    while (clicked) {
      if (menuDown) {
        Object(_custom_lib_js__WEBPACK_IMPORTED_MODULE_0__["slideUp"])(menuMobile, speed);
        menuDown = false;
      }

      clicked = false;
      setTimeout(function () {
        return clicked = true;
      }, delay);
    }
  });
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0 && menuDown) {
      Object(_custom_lib_js__WEBPACK_IMPORTED_MODULE_0__["slideUp"])(menuMobile, speed);
      menuDown = false;
    }
  });
}; //End initMenuMobile

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/*! exports provided: galleryModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryModal", function() { return galleryModal; });
/* harmony import */ var _custom_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-lib.js */ "./src/modules/custom-lib.js");
 //---- Gallery zoom - modal - close on touch screen----

var galleryModal = function galleryModal() {
  var html = document.querySelector('html');
  var galleryModal = document.querySelector('.galeria-modal');
  var gallerySingle = document.querySelectorAll('.galeria-single img');
  var closeModal = document.querySelector('.galeria-modal span');
  var imgZoom = document.querySelector('.img-zoom');
  var openedImg;

  var zoomClicked = function zoomClicked(clickedImg) {
    clickedImg.style.borderColor = 'rgb(22, 51, 114)';
    Object(_custom_lib_js__WEBPACK_IMPORTED_MODULE_0__["show"])(galleryModal);
    closeModal.style.visibility = 'visible';
    setTimeout(function () {
      return imgZoom.style.visibility = 'visible';
    }, 300); //setTimeout(() => html.style.overflow = 'hidden', 500);

    html.style.overflow = 'hidden';
    return clickedImg;
  };

  var closeOpenedImg = function closeOpenedImg(openedImg) {
    openedImg.style.borderColor = 'rgba(0, 0, 0, 0)';
    galleryModal.animate([{
      width: 100 + '%',
      height: 100 + '%'
    }, {
      width: 0,
      height: 0
    }], 300);
    closeModal.style.visibility = 'hidden';
    setTimeout(function () {
      return Object(_custom_lib_js__WEBPACK_IMPORTED_MODULE_0__["hide"])(galleryModal);
    }, 300);
    imgZoom.style.visibility = 'hidden';
    html.style.overflow = 'initial';
  };

  gallerySingle.forEach(function (thisImg) {
    thisImg.addEventListener('click', function (e) {
      return openedImg = zoomClicked(e.target);
    });
  });
  closeModal.addEventListener('click', function () {
    return closeOpenedImg(openedImg);
  });
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map