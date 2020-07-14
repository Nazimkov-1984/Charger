(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//cards 
var cards = document.querySelectorAll('.servises__tab__item'),
    text = document.querySelectorAll('.servises__tab__item__text'),
    link = document.querySelectorAll('.servises__link-more'),
    title = document.querySelectorAll('.servises__tab__item__title'),
    cardsParent = document.querySelector('.servises__tab');

function hideContent() {
  text.forEach(function (item) {
    item.style.display = 'none';
  });
  link.forEach(function (item) {
    item.style.display = 'none';
  });
  cards.forEach(function (item) {
    item.classList.remove('active');
  });
  title.forEach(function (item) {
    item.classList.remove('active_title');
  });
}

function showContent(i) {
  text[i].style.display = 'block';
  link[i].style.display = 'block';
  cards[i].classList.add('active');
  title[i].classList.add('active_title');
}

hideContent();
showContent(0);
cardsParent.addEventListener('click', function () {
  var target = event.target;

  if (target && target.classList.contains('servises__tab__item')) {
    cards.forEach(function (item, i) {
      if (target === item) {
        hideContent();
        showContent(i);
      }
    });
  }
}); //slider

var sliders = document.querySelectorAll('.testimonials__slider-items__item');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var slideIndex = 1;
showSlide(slideIndex);

function showSlide(n) {
  if (n > sliders.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = sliders.length;
  }

  sliders.forEach(function (item) {
    return item.style.display = 'none';
  });
  sliders[slideIndex - 1].style.display = '';
}

function plusSlides(n) {
  showSlide(slideIndex += n);
}

prev.addEventListener('click', function () {
  plusSlides(-1);
});
next.addEventListener('click', function () {
  plusSlides(1);
}); // end slider
//burger 

var burgerMenu = document.querySelector('.header__menu'),
    menuItem = document.querySelector('.navigation__menu-burger');
showMenu();

function showMenu() {
  burgerMenu.addEventListener('click', function () {
    var styleMenu = window.getComputedStyle(menuItem);

    if (styleMenu.display === 'none') {
      menuItem.style.display = 'block';
    } else {
      menuItem.style.display = 'none';
    }
  });
  menuItem.addEventListener('click', function () {
    menuItem.style.display = 'none';
  });
} // end burger menu


var offset = 100;
var scrollUp = document.querySelector('.main-screen__scroll-up');
var scrollUpSvgPath = document.querySelector('.main-screen__scroll-up__svg-path');
var pathLength = scrollUpSvgPath.getTotalLength();

var getTop = function getTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
};

scrollUpSvgPath.style.strokeDasharray = "".concat(pathLength, " ").concat(pathLength);
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms'; // update dash offset

var updateDashOffset = function updateDashOffset() {
  var height = document.documentElement.scrollHeight - window.innerHeight;
  var dashoffset = pathLength - getTop() * pathLength / height;
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
}; //onscroll


window.addEventListener('scroll', function () {
  updateDashOffset();

  if (getTop() > offset) {
    scrollUp.classList.add('main-screen__scroll-up--active');
  } else {
    scrollUp.classList.remove('main-screen__scroll-up--active');
  }
}); //clik

scrollUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
updateDashOffset();

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9DaGFyZ2VyL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLHNCQUExQixDQUFkO0FBQUEsSUFDUSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLDRCQUExQixDQURmO0FBQUEsSUFFUSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLHNCQUExQixDQUZmO0FBQUEsSUFHUSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLDZCQUExQixDQUhoQjtBQUFBLElBSVEsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixDQUp0Qjs7QUFNSSxTQUFTLFdBQVQsR0FBd0I7QUFDcEIsRUFBQSxJQUFJLENBQUMsT0FBTCxDQUFjLFVBQUEsSUFBSSxFQUFJO0FBQ2xCLElBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE1BQXJCO0FBRUgsR0FIRDtBQUlBLEVBQUEsSUFBSSxDQUFDLE9BQUwsQ0FBYyxVQUFBLElBQUksRUFBSTtBQUNsQixJQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxHQUFxQixNQUFyQjtBQUVILEdBSEQ7QUFJQSxFQUFBLEtBQUssQ0FBQyxPQUFOLENBQWUsVUFBQSxJQUFJLEVBQUk7QUFDbkIsSUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsUUFBdEI7QUFFSCxHQUhEO0FBSUEsRUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLFVBQUEsSUFBSSxFQUFJO0FBQ2xCLElBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLGNBQXRCO0FBQ0gsR0FGRDtBQUdIOztBQUNELFNBQVMsV0FBVCxDQUFzQixDQUF0QixFQUF5QjtBQUNyQixFQUFBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxLQUFSLENBQWMsT0FBZCxHQUF3QixPQUF4QjtBQUNBLEVBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0EsRUFBQSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixRQUF2QjtBQUNBLEVBQUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBdUIsY0FBdkI7QUFFSDs7QUFDRCxXQUFXO0FBQ1gsV0FBVyxDQUFFLENBQUYsQ0FBWDtBQUNBLFdBQVcsQ0FBQyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO0FBQzVDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFyQjs7QUFDQSxNQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUCxDQUFpQixRQUFqQixDQUEwQixxQkFBMUIsQ0FBZCxFQUFnRTtBQUM1RCxJQUFBLEtBQUssQ0FBQyxPQUFOLENBQWdCLFVBQUMsSUFBRCxFQUFPLENBQVAsRUFBYTtBQUN6QixVQUFJLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCLFFBQUEsV0FBVztBQUNYLFFBQUEsV0FBVyxDQUFFLENBQUYsQ0FBWDtBQUNIO0FBQ0osS0FMRDtBQU1IO0FBQ0osQ0FWRyxFLENBV0o7O0FBQ0EsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLG1DQUExQixDQUFoQjtBQUNBLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBakI7QUFHQSxTQUFTLENBQUMsVUFBRCxDQUFUOztBQUVRLFNBQVMsU0FBVCxDQUFvQixDQUFwQixFQUF1QjtBQUNuQixNQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBaEIsRUFBd0I7QUFDcEIsSUFBQSxVQUFVLEdBQUcsQ0FBYjtBQUNIOztBQUNELE1BQUksQ0FBQyxHQUFDLENBQU4sRUFBUztBQUNMLElBQUEsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFyQjtBQUNIOztBQUNELEVBQUEsT0FBTyxDQUFDLE9BQVIsQ0FBaUIsVUFBQSxJQUFJO0FBQUEsV0FBSSxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsR0FBcUIsTUFBekI7QUFBQSxHQUFyQjtBQUVBLEVBQUEsT0FBTyxDQUFDLFVBQVUsR0FBQyxDQUFaLENBQVAsQ0FBc0IsS0FBdEIsQ0FBNEIsT0FBNUIsR0FBc0MsRUFBdEM7QUFDSDs7QUFDRCxTQUFTLFVBQVQsQ0FBb0IsQ0FBcEIsRUFBdUI7QUFDdEIsRUFBQSxTQUFTLENBQUMsVUFBVSxJQUFHLENBQWQsQ0FBVDtBQUNBOztBQUNELElBQUksQ0FBQyxnQkFBTCxDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ25DLEVBQUEsVUFBVSxDQUFDLENBQUMsQ0FBRixDQUFWO0FBQ0YsQ0FGRDtBQUdBLElBQUksQ0FBQyxnQkFBTCxDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ3BDLEVBQUEsVUFBVSxDQUFDLENBQUQsQ0FBVjtBQUNELENBRkQsRSxDQUdBO0FBRUE7O0FBRUosSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFBQSxJQUNRLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF3QiwwQkFBeEIsQ0FEbkI7QUFFSCxRQUFROztBQUNMLFNBQVMsUUFBVCxHQUFvQjtBQUNoQixFQUFBLFVBQVUsQ0FBQyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3hDLFFBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixDQUFsQjs7QUFFQSxRQUFJLFNBQVMsQ0FBQyxPQUFWLEtBQXNCLE1BQTFCLEVBQWtDO0FBQzlCLE1BQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE9BQXpCO0FBQ0gsS0FGRCxNQUVNO0FBQ0wsTUFBQSxRQUFRLENBQUMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsTUFBekI7QUFDQTtBQUNILEdBUkQ7QUFTQSxFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0FBQ3JDLElBQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE1BQXpCO0FBRUgsR0FIRDtBQUlILEMsQ0FBQzs7O0FBRUYsSUFBTSxNQUFNLEdBQUcsR0FBZjtBQUNBLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLHlCQUF2QixDQUFqQjtBQUNBLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1DQUF2QixDQUF4QjtBQUNBLElBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxjQUFoQixFQUFuQjs7QUFDQSxJQUFNLE1BQU0sR0FBRyxTQUFULE1BQVM7QUFBQSxTQUFNLE1BQU0sQ0FBQyxXQUFQLElBQXNCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBQXJEO0FBQUEsQ0FBZjs7QUFFQSxlQUFlLENBQUMsS0FBaEIsQ0FBc0IsZUFBdEIsYUFBMkMsVUFBM0MsY0FBeUQsVUFBekQ7QUFDQSxlQUFlLENBQUMsS0FBaEIsQ0FBc0IsVUFBdEIsR0FBbUMsd0JBQW5DLEMsQ0FFQTs7QUFDQSxJQUFNLGdCQUFnQixHQUFHLFNBQW5CLGdCQUFtQixHQUFNO0FBQzNCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxlQUFULENBQXlCLFlBQXpCLEdBQXdDLE1BQU0sQ0FBQyxXQUE5RDtBQUNBLE1BQU0sVUFBVSxHQUFHLFVBQVUsR0FBSSxNQUFNLEtBQUcsVUFBVCxHQUFvQixNQUFyRDtBQUNBLEVBQUEsZUFBZSxDQUFDLEtBQWhCLENBQXNCLGdCQUF0QixHQUF5QyxVQUF6QztBQUNILENBSkQsQyxDQUtBOzs7QUFDQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUNwQyxFQUFBLGdCQUFnQjs7QUFDaEIsTUFBSyxNQUFNLEtBQUssTUFBaEIsRUFBd0I7QUFDcEIsSUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixnQ0FBdkI7QUFDSCxHQUZELE1BRU87QUFDSCxJQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE1BQW5CLENBQTBCLGdDQUExQjtBQUNIO0FBQ0ksQ0FQVCxFLENBUUE7O0FBQ0EsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07QUFDekMsRUFBQSxNQUFNLENBQUMsUUFBUCxDQUFpQjtBQUNqQixJQUFBLEdBQUcsRUFBQyxDQURhO0FBRWpCLElBQUEsUUFBUSxFQUFFO0FBRk8sR0FBakI7QUFJQyxDQUxEO0FBTUEsZ0JBQWdCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2NhcmRzIFxyXG5jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aXNlc19fdGFiX19pdGVtJyksXHJcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aXNlc19fdGFiX19pdGVtX190ZXh0JyksXHJcbiAgICAgICAgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aXNlc19fbGluay1tb3JlJyksIFxyXG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpc2VzX190YWJfX2l0ZW1fX3RpdGxlJyksXHJcbiAgICAgICAgY2FyZHNQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmlzZXNfX3RhYicpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVDb250ZW50ICgpIHtcclxuICAgICAgICB0ZXh0LmZvckVhY2ggKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpbmsuZm9yRWFjaCAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaCAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRpdGxlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX3RpdGxlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93Q29udGVudCAoaSkge1xyXG4gICAgICAgIHRleHRbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgbGlua1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBjYXJkc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aXRsZVtpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfdGl0bGUnKTtcclxuXHJcbiAgICB9XHJcbiAgICBoaWRlQ29udGVudCAoKTtcclxuICAgIHNob3dDb250ZW50ICgwKTtcclxuICAgIGNhcmRzUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJ2aXNlc19fdGFiX19pdGVtJykpIHtcclxuICAgICAgICBjYXJkcy5mb3JFYWNoICggKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaGlkZUNvbnRlbnQgKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93Q29udGVudCAoaSk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4vL3NsaWRlclxyXG5jb25zdCBzbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlc3RpbW9uaWFsc19fc2xpZGVyLWl0ZW1zX19pdGVtJyk7XHJcbmNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldicpO1xyXG5jb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQnKTtcclxubGV0IHNsaWRlSW5kZXggPSAxO1xyXG5cclxuXHJcbnNob3dTbGlkZShzbGlkZUluZGV4KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd1NsaWRlIChuKSB7XHJcbiAgICAgICAgICAgIGlmIChuID4gc2xpZGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuPDEpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzbGlkZXJzLmZvckVhY2ggKGl0ZW0gPT4gaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlcnNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xyXG4gICAgICAgICBzaG93U2xpZGUoc2xpZGVJbmRleCArPW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICBwbHVzU2xpZGVzKC0xKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHBsdXNTbGlkZXMoMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZW5kIHNsaWRlclxyXG5cclxuICAgICAgICAvL2J1cmdlciBcclxuXHJcbiAgICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpLFxyXG4gICAgICAgICAgICBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubmF2aWdhdGlvbl9fbWVudS1idXJnZXInKTtcclxuIHNob3dNZW51ICgpO1xyXG4gICAgZnVuY3Rpb24gc2hvd01lbnUoKSB7XHJcbiAgICAgICAgYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICBjb25zdCBzdHlsZU1lbnUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51SXRlbSk7XHJcblxyXG4gICAgICAgICAgIGlmIChzdHlsZU1lbnUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgIG1lbnVJdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9IC8vIGVuZCBidXJnZXIgbWVudVxyXG5cclxuICAgIGNvbnN0IG9mZnNldCA9IDEwMDtcclxuICAgIGNvbnN0IHNjcm9sbFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuX19zY3JvbGwtdXAnKTtcclxuICAgIGNvbnN0IHNjcm9sbFVwU3ZnUGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbl9fc2Nyb2xsLXVwX19zdmctcGF0aCcpO1xyXG4gICAgY29uc3QgcGF0aExlbmd0aCA9IHNjcm9sbFVwU3ZnUGF0aC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgY29uc3QgZ2V0VG9wID0gKCkgPT4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgc2Nyb2xsVXBTdmdQYXRoLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGAke3BhdGhMZW5ndGh9ICR7cGF0aExlbmd0aH1gO1xyXG4gICAgc2Nyb2xsVXBTdmdQYXRoLnN0eWxlLnRyYW5zaXRpb24gPSAnc3Ryb2tlLWRhc2hvZmZzZXQgMjBtcyc7XHJcblxyXG4gICAgLy8gdXBkYXRlIGRhc2ggb2Zmc2V0XHJcbiAgICBjb25zdCB1cGRhdGVEYXNoT2Zmc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZGFzaG9mZnNldCA9IHBhdGhMZW5ndGggLSAoZ2V0VG9wKCkqcGF0aExlbmd0aC9oZWlnaHQpO1xyXG4gICAgICAgIHNjcm9sbFVwU3ZnUGF0aC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gZGFzaG9mZnNldDtcclxuICAgIH07XHJcbiAgICAvL29uc2Nyb2xsXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZURhc2hPZmZzZXQoKTtcclxuICAgICAgICBpZiAoIGdldFRvcCgpID4gb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFVwLmNsYXNzTGlzdC5hZGQoJ21haW4tc2NyZWVuX19zY3JvbGwtdXAtLWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFVwLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tc2NyZWVuX19zY3JvbGwtdXAtLWFjdGl2ZScpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIC8vY2xpa1xyXG4gICAgc2Nyb2xsVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8gKHtcclxuICAgIHRvcDowLFxyXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHVwZGF0ZURhc2hPZmZzZXQoKTsiXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OURhR0Z5WjJWeUwzTnlZeTlxY3k5aGNIQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096dEJRMEZCTzBGQlEwRXNTVUZCVFN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHZENRVUZVTEVOQlFUQkNMSE5DUVVFeFFpeERRVUZrTzBGQlFVRXNTVUZEVVN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExHZENRVUZVTEVOQlFUQkNMRFJDUVVFeFFpeERRVVJtTzBGQlFVRXNTVUZGVVN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExHZENRVUZVTEVOQlFUQkNMSE5DUVVFeFFpeERRVVptTzBGQlFVRXNTVUZIVVN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHZENRVUZVTEVOQlFUQkNMRFpDUVVFeFFpeERRVWhvUWp0QlFVRkJMRWxCU1ZFc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMR2RDUVVGMlFpeERRVXAwUWpzN1FVRk5TU3hUUVVGVExGZEJRVlFzUjBGQmQwSTdRVUZEY0VJc1JVRkJRU3hKUVVGSkxFTkJRVU1zVDBGQlRDeERRVUZqTEZWQlFVRXNTVUZCU1N4RlFVRkpPMEZCUTJ4Q0xFbEJRVUVzU1VGQlNTeERRVUZETEV0QlFVd3NRMEZCVnl4UFFVRllMRWRCUVhGQ0xFMUJRWEpDTzBGQlJVZ3NSMEZJUkR0QlFVbEJMRVZCUVVFc1NVRkJTU3hEUVVGRExFOUJRVXdzUTBGQll5eFZRVUZCTEVsQlFVa3NSVUZCU1R0QlFVTnNRaXhKUVVGQkxFbEJRVWtzUTBGQlF5eExRVUZNTEVOQlFWY3NUMEZCV0N4SFFVRnhRaXhOUVVGeVFqdEJRVVZJTEVkQlNFUTdRVUZKUVN4RlFVRkJMRXRCUVVzc1EwRkJReXhQUVVGT0xFTkJRV1VzVlVGQlFTeEpRVUZKTEVWQlFVazdRVUZEYmtJc1NVRkJRU3hKUVVGSkxFTkJRVU1zVTBGQlRDeERRVUZsTEUxQlFXWXNRMEZCYzBJc1VVRkJkRUk3UVVGRlNDeEhRVWhFTzBGQlNVRXNSVUZCUVN4TFFVRkxMRU5CUVVNc1QwRkJUaXhEUVVGakxGVkJRVUVzU1VGQlNTeEZRVUZKTzBGQlEyeENMRWxCUVVFc1NVRkJTU3hEUVVGRExGTkJRVXdzUTBGQlpTeE5RVUZtTEVOQlFYTkNMR05CUVhSQ08wRkJRMGdzUjBGR1JEdEJRVWRJT3p0QlFVTkVMRk5CUVZNc1YwRkJWQ3hEUVVGelFpeERRVUYwUWl4RlFVRjVRanRCUVVOeVFpeEZRVUZCTEVsQlFVa3NRMEZCUXl4RFFVRkVMRU5CUVVvc1EwRkJVU3hMUVVGU0xFTkJRV01zVDBGQlpDeEhRVUYzUWl4UFFVRjRRanRCUVVOQkxFVkJRVUVzU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCU2l4RFFVRlJMRXRCUVZJc1EwRkJZeXhQUVVGa0xFZEJRWGRDTEU5QlFYaENPMEZCUTBFc1JVRkJRU3hMUVVGTExFTkJRVU1zUTBGQlJDeERRVUZNTEVOQlFWTXNVMEZCVkN4RFFVRnRRaXhIUVVGdVFpeERRVUYxUWl4UlFVRjJRanRCUVVOQkxFVkJRVUVzUzBGQlN5eERRVUZETEVOQlFVUXNRMEZCVEN4RFFVRlRMRk5CUVZRc1EwRkJiVUlzUjBGQmJrSXNRMEZCZFVJc1kwRkJka0k3UVVGRlNEczdRVUZEUkN4WFFVRlhPMEZCUTFnc1YwRkJWeXhEUVVGRkxFTkJRVVlzUTBGQldEdEJRVU5CTEZkQlFWY3NRMEZCUXl4blFrRkJXaXhEUVVFMlFpeFBRVUUzUWl4RlFVRnpReXhaUVVGTk8wRkJRelZETEUxQlFVMHNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGeVFqczdRVUZEUVN4TlFVRkpMRTFCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlVDeERRVUZwUWl4UlFVRnFRaXhEUVVFd1FpeHhRa0ZCTVVJc1EwRkJaQ3hGUVVGblJUdEJRVU0xUkN4SlFVRkJMRXRCUVVzc1EwRkJReXhQUVVGT0xFTkJRV2RDTEZWQlFVTXNTVUZCUkN4RlFVRlBMRU5CUVZBc1JVRkJZVHRCUVVONlFpeFZRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRm1MRVZCUVhGQ08wRkJRMnBDTEZGQlFVRXNWMEZCVnp0QlFVTllMRkZCUVVFc1YwRkJWeXhEUVVGRkxFTkJRVVlzUTBGQldEdEJRVU5JTzBGQlEwb3NTMEZNUkR0QlFVMUlPMEZCUTBvc1EwRldSeXhGTEVOQlYwbzdPMEZCUTBFc1NVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRlVMRU5CUVRCQ0xHMURRVUV4UWl4RFFVRm9RanRCUVVOQkxFbEJRVTBzU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xFOUJRWFpDTEVOQlFXSTdRVUZEUVN4SlFVRk5MRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQlZDeERRVUYxUWl4UFFVRjJRaXhEUVVGaU8wRkJRMEVzU1VGQlNTeFZRVUZWTEVkQlFVY3NRMEZCYWtJN1FVRkhRU3hUUVVGVExFTkJRVU1zVlVGQlJDeERRVUZVT3p0QlFVVlJMRk5CUVZNc1UwRkJWQ3hEUVVGdlFpeERRVUZ3UWl4RlFVRjFRanRCUVVOdVFpeE5RVUZKTEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJhRUlzUlVGQmQwSTdRVUZEY0VJc1NVRkJRU3hWUVVGVkxFZEJRVWNzUTBGQllqdEJRVU5JT3p0QlFVTkVMRTFCUVVrc1EwRkJReXhIUVVGRExFTkJRVTRzUlVGQlV6dEJRVU5NTEVsQlFVRXNWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGeVFqdEJRVU5JT3p0QlFVTkVMRVZCUVVFc1QwRkJUeXhEUVVGRExFOUJRVklzUTBGQmFVSXNWVUZCUVN4SlFVRkpPMEZCUVVFc1YwRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlRDeERRVUZYTEU5QlFWZ3NSMEZCY1VJc1RVRkJla0k3UVVGQlFTeEhRVUZ5UWp0QlFVVkJMRVZCUVVFc1QwRkJUeXhEUVVGRExGVkJRVlVzUjBGQlF5eERRVUZhTEVOQlFWQXNRMEZCYzBJc1MwRkJkRUlzUTBGQk5FSXNUMEZCTlVJc1IwRkJjME1zUlVGQmRFTTdRVUZEU0RzN1FVRkRSQ3hUUVVGVExGVkJRVlFzUTBGQmIwSXNRMEZCY0VJc1JVRkJkVUk3UVVGRGRFSXNSVUZCUVN4VFFVRlRMRU5CUVVNc1ZVRkJWU3hKUVVGSExFTkJRV1FzUTBGQlZEdEJRVU5CT3p0QlFVTkVMRWxCUVVrc1EwRkJReXhuUWtGQlRDeERRVUYxUWl4UFFVRjJRaXhGUVVGblF5eFpRVUZOTzBGQlEyNURMRVZCUVVFc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlJpeERRVUZXTzBGQlEwWXNRMEZHUkR0QlFVZEJMRWxCUVVrc1EwRkJReXhuUWtGQlRDeERRVUYxUWl4UFFVRjJRaXhGUVVGblF5eFpRVUZOTzBGQlEzQkRMRVZCUVVFc1ZVRkJWU3hEUVVGRExFTkJRVVFzUTBGQlZqdEJRVU5FTEVOQlJrUXNSU3hEUVVkQk8wRkJSVUU3TzBGQlJVb3NTVUZCVFN4VlFVRlZMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRVlFzUTBGQmRVSXNaVUZCZGtJc1EwRkJia0k3UVVGQlFTeEpRVU5STEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGM1Fpd3dRa0ZCZUVJc1EwRkVia0k3UVVGRlNDeFJRVUZST3p0QlFVTk1MRk5CUVZNc1VVRkJWQ3hIUVVGdlFqdEJRVU5vUWl4RlFVRkJMRlZCUVZVc1EwRkJReXhuUWtGQldDeERRVUUwUWl4UFFVRTFRaXhGUVVGeFF5eFpRVUZOTzBGQlEzaERMRkZCUVUwc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eG5Ra0ZCVUN4RFFVRjNRaXhSUVVGNFFpeERRVUZzUWpzN1FVRkZRU3hSUVVGSkxGTkJRVk1zUTBGQlF5eFBRVUZXTEV0QlFYTkNMRTFCUVRGQ0xFVkJRV3RETzBGQlF6bENMRTFCUVVFc1VVRkJVU3hEUVVGRExFdEJRVlFzUTBGQlpTeFBRVUZtTEVkQlFYbENMRTlCUVhwQ08wRkJRMGdzUzBGR1JDeE5RVVZOTzBGQlEwd3NUVUZCUVN4UlFVRlJMRU5CUVVNc1MwRkJWQ3hEUVVGbExFOUJRV1lzUjBGQmVVSXNUVUZCZWtJN1FVRkRRVHRCUVVOSUxFZEJVa1E3UVVGVFFTeEZRVUZCTEZGQlFWRXNRMEZCUXl4blFrRkJWQ3hEUVVFd1FpeFBRVUV4UWl4RlFVRnRReXhaUVVGTk8wRkJRM0pETEVsQlFVRXNVVUZCVVN4RFFVRkRMRXRCUVZRc1EwRkJaU3hQUVVGbUxFZEJRWGxDTEUxQlFYcENPMEZCUlVnc1IwRklSRHRCUVVsSUxFTXNRMEZCUXpzN08wRkJSVVlzU1VGQlRTeE5RVUZOTEVkQlFVY3NSMEZCWmp0QlFVTkJMRWxCUVUwc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMSGxDUVVGMlFpeERRVUZxUWp0QlFVTkJMRWxCUVUwc1pVRkJaU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMRzFEUVVGMlFpeERRVUY0UWp0QlFVTkJMRWxCUVUwc1ZVRkJWU3hIUVVGSExHVkJRV1VzUTBGQlF5eGpRVUZvUWl4RlFVRnVRanM3UVVGRFFTeEpRVUZOTEUxQlFVMHNSMEZCUnl4VFFVRlVMRTFCUVZNN1FVRkJRU3hUUVVGTkxFMUJRVTBzUTBGQlF5eFhRVUZRTEVsQlFYTkNMRkZCUVZFc1EwRkJReXhsUVVGVUxFTkJRWGxDTEZOQlFYSkVPMEZCUVVFc1EwRkJaanM3UVVGRlFTeGxRVUZsTEVOQlFVTXNTMEZCYUVJc1EwRkJjMElzWlVGQmRFSXNZVUZCTWtNc1ZVRkJNME1zWTBGQmVVUXNWVUZCZWtRN1FVRkRRU3hsUVVGbExFTkJRVU1zUzBGQmFFSXNRMEZCYzBJc1ZVRkJkRUlzUjBGQmJVTXNkMEpCUVc1RExFTXNRMEZGUVRzN1FVRkRRU3hKUVVGTkxHZENRVUZuUWl4SFFVRkhMRk5CUVc1Q0xHZENRVUZ0UWl4SFFVRk5PMEZCUXpOQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4bFFVRlVMRU5CUVhsQ0xGbEJRWHBDTEVkQlFYZERMRTFCUVUwc1EwRkJReXhYUVVFNVJEdEJRVU5CTEUxQlFVMHNWVUZCVlN4SFFVRkhMRlZCUVZVc1IwRkJTU3hOUVVGTkxFdEJRVWNzVlVGQlZDeEhRVUZ2UWl4TlFVRnlSRHRCUVVOQkxFVkJRVUVzWlVGQlpTeERRVUZETEV0QlFXaENMRU5CUVhOQ0xHZENRVUYwUWl4SFFVRjVReXhWUVVGNlF6dEJRVU5JTEVOQlNrUXNReXhEUVV0Qk96czdRVUZEUVN4TlFVRk5MRU5CUVVNc1owSkJRVkFzUTBGQmQwSXNVVUZCZUVJc1JVRkJhME1zV1VGQlRUdEJRVU53UXl4RlFVRkJMR2RDUVVGblFqczdRVUZEYUVJc1RVRkJTeXhOUVVGTkxFdEJRVXNzVFVGQmFFSXNSVUZCZDBJN1FVRkRjRUlzU1VGQlFTeFJRVUZSTEVOQlFVTXNVMEZCVkN4RFFVRnRRaXhIUVVGdVFpeERRVUYxUWl4blEwRkJka0k3UVVGRFNDeEhRVVpFTEUxQlJVODdRVUZEU0N4SlFVRkJMRkZCUVZFc1EwRkJReXhUUVVGVUxFTkJRVzFDTEUxQlFXNUNMRU5CUVRCQ0xHZERRVUV4UWp0QlFVTklPMEZCUTBrc1EwRlFWQ3hGTEVOQlVVRTdPMEZCUTBFc1VVRkJVU3hEUVVGRExHZENRVUZVTEVOQlFUQkNMRTlCUVRGQ0xFVkJRVzFETEZsQlFVMDdRVUZEZWtNc1JVRkJRU3hOUVVGTkxFTkJRVU1zVVVGQlVDeERRVUZwUWp0QlFVTnFRaXhKUVVGQkxFZEJRVWNzUlVGQlF5eERRVVJoTzBGQlJXcENMRWxCUVVFc1VVRkJVU3hGUVVGRk8wRkJSazhzUjBGQmFrSTdRVUZKUXl4RFFVeEVPMEZCVFVFc1owSkJRV2RDSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNG9LWHRtZFc1amRHbHZiaUJ5S0dVc2JpeDBLWHRtZFc1amRHbHZiaUJ2S0drc1ppbDdhV1lvSVc1YmFWMHBlMmxtS0NGbFcybGRLWHQyWVhJZ1l6MWNJbVoxYm1OMGFXOXVYQ0k5UFhSNWNHVnZaaUJ5WlhGMWFYSmxKaVp5WlhGMWFYSmxPMmxtS0NGbUppWmpLWEpsZEhWeWJpQmpLR2tzSVRBcE8ybG1LSFVwY21WMGRYSnVJSFVvYVN3aE1DazdkbUZ5SUdFOWJtVjNJRVZ5Y205eUtGd2lRMkZ1Ym05MElHWnBibVFnYlc5a2RXeGxJQ2RjSWl0cEsxd2lKMXdpS1R0MGFISnZkeUJoTG1OdlpHVTlYQ0pOVDBSVlRFVmZUazlVWDBaUFZVNUVYQ0lzWVgxMllYSWdjRDF1VzJsZFBYdGxlSEJ2Y25Sek9udDlmVHRsVzJsZFd6QmRMbU5oYkd3b2NDNWxlSEJ2Y25SekxHWjFibU4wYVc5dUtISXBlM1poY2lCdVBXVmJhVjFiTVYxYmNsMDdjbVYwZFhKdUlHOG9ibng4Y2lsOUxIQXNjQzVsZUhCdmNuUnpMSElzWlN4dUxIUXBmWEpsZEhWeWJpQnVXMmxkTG1WNGNHOXlkSE45Wm05eUtIWmhjaUIxUFZ3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlISmxjWFZwY21VbUpuSmxjWFZwY21Vc2FUMHdPMms4ZEM1c1pXNW5kR2c3YVNzcktXOG9kRnRwWFNrN2NtVjBkWEp1SUc5OWNtVjBkWEp1SUhKOUtTZ3BJaXdpTHk5allYSmtjeUJjY2x4dVkyOXVjM1FnWTJGeVpITWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1YzJWeWRtbHpaWE5mWDNSaFlsOWZhWFJsYlNjcExGeHlYRzRnSUNBZ0lDQWdJSFJsZUhRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VjMlZ5ZG1selpYTmZYM1JoWWw5ZmFYUmxiVjlmZEdWNGRDY3BMRnh5WEc0Z0lDQWdJQ0FnSUd4cGJtc2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1YzJWeWRtbHpaWE5mWDJ4cGJtc3RiVzl5WlNjcExDQmNjbHh1SUNBZ0lDQWdJQ0IwYVhSc1pTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTV6WlhKMmFYTmxjMTlmZEdGaVgxOXBkR1Z0WDE5MGFYUnNaU2NwTEZ4eVhHNGdJQ0FnSUNBZ0lHTmhjbVJ6VUdGeVpXNTBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25Mbk5sY25acGMyVnpYMTkwWVdJbktUdGNjbHh1WEhKY2JpQWdJQ0JtZFc1amRHbHZiaUJvYVdSbFEyOXVkR1Z1ZENBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdWNGRDNW1iM0pGWVdOb0lDaHBkR1Z0SUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FYUmxiUzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMjV2Ym1Vbk8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0JzYVc1ckxtWnZja1ZoWTJnZ0tHbDBaVzBnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5ibTl1WlNjN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUdOaGNtUnpMbVp2Y2tWaFkyZ2dLR2wwWlcwZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBkR1Z0TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0IwYVhSc1pTNW1iM0pGWVdOb0tHbDBaVzBnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMkZqZEdsMlpWOTBhWFJzWlNjcE8xeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWm5WdVkzUnBiMjRnYzJodmQwTnZiblJsYm5RZ0tHa3BJSHRjY2x4dUlDQWdJQ0FnSUNCMFpYaDBXMmxkTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuWW14dlkyc25PMXh5WEc0Z0lDQWdJQ0FnSUd4cGJtdGJhVjB1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2RpYkc5amF5YzdYSEpjYmlBZ0lDQWdJQ0FnWTJGeVpITmJhVjB1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmlBZ0lDQWdJQ0FnZEdsMGJHVmJhVjB1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabFgzUnBkR3hsSnlrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdhR2xrWlVOdmJuUmxiblFnS0NrN1hISmNiaUFnSUNCemFHOTNRMjl1ZEdWdWRDQW9NQ2s3WEhKY2JpQWdJQ0JqWVhKa2MxQmhjbVZ1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNncElEMCtJSHRjY2x4dUlDQWdJR052Ym5OMElIUmhjbWRsZENBOUlHVjJaVzUwTG5SaGNtZGxkRHRjY2x4dUlDQWdJR2xtSUNoMFlYSm5aWFFnSmlZZ2RHRnlaMlYwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbmMyVnlkbWx6WlhOZlgzUmhZbDlmYVhSbGJTY3BLU0I3WEhKY2JpQWdJQ0FnSUNBZ1kyRnlaSE11Wm05eVJXRmphQ0FvSUNocGRHVnRMQ0JwS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWVhKblpYUWdQVDA5SUdsMFpXMHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdocFpHVkRiMjUwWlc1MElDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJodmQwTnZiblJsYm5RZ0tHa3BPeUJjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ2ZWeHlYRzU5S1R0Y2NseHVMeTl6Ykdsa1pYSmNjbHh1WTI5dWMzUWdjMnhwWkdWeWN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWlhOMGFXMXZibWxoYkhOZlgzTnNhV1JsY2kxcGRHVnRjMTlmYVhSbGJTY3BPMXh5WEc1amIyNXpkQ0J3Y21WMklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQnlaWFluS1R0Y2NseHVZMjl1YzNRZ2JtVjRkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV1WlhoMEp5azdYSEpjYm14bGRDQnpiR2xrWlVsdVpHVjRJRDBnTVR0Y2NseHVYSEpjYmx4eVhHNXphRzkzVTJ4cFpHVW9jMnhwWkdWSmJtUmxlQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJSE5vYjNkVGJHbGtaU0FvYmlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iaUErSUhOc2FXUmxjbk11YkdWdVozUm9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemJHbGtaVWx1WkdWNElEMGdNVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYmp3eEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Ykdsa1pVbHVaR1Y0SUQwZ2MyeHBaR1Z5Y3k1c1pXNW5kR2c3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMnhwWkdWeWN5NW1iM0pGWVdOb0lDaHBkR1Z0SUQwK0lHbDBaVzB1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2R1YjI1bEp5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Ykdsa1pYSnpXM05zYVdSbFNXNWtaWGd0TVYwdWMzUjViR1V1WkdsemNHeGhlU0E5SUNjbk8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCd2JIVnpVMnhwWkdWektHNHBJSHRjY2x4dUlDQWdJQ0FnSUNBZ2MyaHZkMU5zYVdSbEtITnNhV1JsU1c1a1pYZ2dLejF1S1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnY0hKbGRpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUlDZ25ZMnhwWTJzbkxDQW9LU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnY0d4MWMxTnNhV1JsY3lndE1TazdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdibVY0ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SUNnblkyeHBZMnNuTENBb0tTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQndiSFZ6VTJ4cFpHVnpLREVwTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUM4dklHVnVaQ0J6Ykdsa1pYSmNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5OWlkWEpuWlhJZ1hISmNibHh5WEc0Z0lDQWdZMjl1YzNRZ1luVnlaMlZ5VFdWdWRTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NW9aV0ZrWlhKZlgyMWxiblVuS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYldWdWRVbDBaVzBnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlJQ2duTG01aGRtbG5ZWFJwYjI1ZlgyMWxiblV0WW5WeVoyVnlKeWs3WEhKY2JpQnphRzkzVFdWdWRTQW9LVHRjY2x4dUlDQWdJR1oxYm1OMGFXOXVJSE5vYjNkTlpXNTFLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHSjFjbWRsY2sxbGJuVXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9LU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjM1I1YkdWTlpXNTFJRDBnZDJsdVpHOTNMbWRsZEVOdmJYQjFkR1ZrVTNSNWJHVW9iV1Z1ZFVsMFpXMHBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MzUjViR1ZOWlc1MUxtUnBjM0JzWVhrZ1BUMDlJQ2R1YjI1bEp5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0Wlc1MVNYUmxiUzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMkpzYjJOckp6dGNjbHh1SUNBZ0lDQWdJQ0FnSUNCOVpXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzFsYm5WSmRHVnRMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5ibTl1WlNjN1hISmNiaUFnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUcxbGJuVkpkR1Z0TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0NrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRaVzUxU1hSbGJTNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyNXZibVVuTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5S1RzZ0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnZlNBdkx5QmxibVFnWW5WeVoyVnlJRzFsYm5WY2NseHVYSEpjYmlBZ0lDQmpiMjV6ZENCdlptWnpaWFFnUFNBeE1EQTdYSEpjYmlBZ0lDQmpiMjV6ZENCelkzSnZiR3hWY0NBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1dFlXbHVMWE5qY21WbGJsOWZjMk55YjJ4c0xYVndKeWs3WEhKY2JpQWdJQ0JqYjI1emRDQnpZM0p2Ykd4VmNGTjJaMUJoZEdnZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWJXRnBiaTF6WTNKbFpXNWZYM05qY205c2JDMTFjRjlmYzNabkxYQmhkR2duS1R0Y2NseHVJQ0FnSUdOdmJuTjBJSEJoZEdoTVpXNW5kR2dnUFNCelkzSnZiR3hWY0ZOMloxQmhkR2d1WjJWMFZHOTBZV3hNWlc1bmRHZ29LVHRjY2x4dUlDQWdJR052Ym5OMElHZGxkRlJ2Y0NBOUlDZ3BJRDArSUhkcGJtUnZkeTV3WVdkbFdVOW1abk5sZENCOGZDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWMyTnliMnhzVkc5d08xeHlYRzVjY2x4dUlDQWdJSE5qY205c2JGVndVM1puVUdGMGFDNXpkSGxzWlM1emRISnZhMlZFWVhOb1lYSnlZWGtnUFNCZ0pIdHdZWFJvVEdWdVozUm9mU0FrZTNCaGRHaE1aVzVuZEdoOVlEdGNjbHh1SUNBZ0lITmpjbTlzYkZWd1UzWm5VR0YwYUM1emRIbHNaUzUwY21GdWMybDBhVzl1SUQwZ0ozTjBjbTlyWlMxa1lYTm9iMlptYzJWMElESXdiWE1uTzF4eVhHNWNjbHh1SUNBZ0lDOHZJSFZ3WkdGMFpTQmtZWE5vSUc5bVpuTmxkRnh5WEc0Z0lDQWdZMjl1YzNRZ2RYQmtZWFJsUkdGemFFOW1abk5sZENBOUlDZ3BJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCb1pXbG5hSFFnUFNCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzJOeWIyeHNTR1ZwWjJoMElDMGdkMmx1Wkc5M0xtbHVibVZ5U0dWcFoyaDBPMXh5WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JoYzJodlptWnpaWFFnUFNCd1lYUm9UR1Z1WjNSb0lDMGdLR2RsZEZSdmNDZ3BLbkJoZEdoTVpXNW5kR2d2YUdWcFoyaDBLVHRjY2x4dUlDQWdJQ0FnSUNCelkzSnZiR3hWY0ZOMloxQmhkR2d1YzNSNWJHVXVjM1J5YjJ0bFJHRnphRzltWm5ObGRDQTlJR1JoYzJodlptWnpaWFE3WEhKY2JpQWdJQ0I5TzF4eVhHNGdJQ0FnTHk5dmJuTmpjbTlzYkZ4eVhHNGdJQ0FnZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KM05qY205c2JDY3NJQ2dwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0IxY0dSaGRHVkVZWE5vVDJabWMyVjBLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0JuWlhSVWIzQW9LU0ErSUc5bVpuTmxkQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6WTNKdmJHeFZjQzVqYkdGemMweHBjM1F1WVdSa0tDZHRZV2x1TFhOamNtVmxibDlmYzJOeWIyeHNMWFZ3TFMxaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCelkzSnZiR3hWY0M1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkdFlXbHVMWE5qY21WbGJsOWZjMk55YjJ4c0xYVndMUzFoWTNScGRtVW5LVHNnSUZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQXZMMk5zYVd0Y2NseHVJQ0FnSUhOamNtOXNiRlZ3TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0NrZ1BUNGdlMXh5WEc0Z0lDQWdkMmx1Wkc5M0xuTmpjbTlzYkZSdklDaDdYSEpjYmlBZ0lDQjBiM0E2TUN4Y2NseHVJQ0FnSUdKbGFHRjJhVzl5T2lBbmMyMXZiM1JvSjF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdJQ0IxY0dSaGRHVkVZWE5vVDJabWMyVjBLQ2s3SWwxOSJ9
