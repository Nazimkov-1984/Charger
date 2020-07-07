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

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9DaGFyZ2VyL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLHNCQUExQixDQUFkO0FBQUEsSUFDUSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLDRCQUExQixDQURmO0FBQUEsSUFFUSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLHNCQUExQixDQUZmO0FBQUEsSUFHUSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLDZCQUExQixDQUhoQjtBQUFBLElBSVEsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixDQUp0Qjs7QUFNSSxTQUFTLFdBQVQsR0FBd0I7QUFDcEIsRUFBQSxJQUFJLENBQUMsT0FBTCxDQUFjLFVBQUEsSUFBSSxFQUFJO0FBQ2xCLElBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLE1BQXJCO0FBRUgsR0FIRDtBQUlBLEVBQUEsSUFBSSxDQUFDLE9BQUwsQ0FBYyxVQUFBLElBQUksRUFBSTtBQUNsQixJQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxHQUFxQixNQUFyQjtBQUVILEdBSEQ7QUFJQSxFQUFBLEtBQUssQ0FBQyxPQUFOLENBQWUsVUFBQSxJQUFJLEVBQUk7QUFDbkIsSUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsUUFBdEI7QUFFSCxHQUhEO0FBSUEsRUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLFVBQUEsSUFBSSxFQUFJO0FBQ2xCLElBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLGNBQXRCO0FBQ0gsR0FGRDtBQUdIOztBQUNELFNBQVMsV0FBVCxDQUFzQixDQUF0QixFQUF5QjtBQUNyQixFQUFBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxLQUFSLENBQWMsT0FBZCxHQUF3QixPQUF4QjtBQUNBLEVBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0EsRUFBQSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixRQUF2QjtBQUNBLEVBQUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBdUIsY0FBdkI7QUFFSDs7QUFDRCxXQUFXO0FBQ1gsV0FBVyxDQUFFLENBQUYsQ0FBWDtBQUNBLFdBQVcsQ0FBQyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO0FBQzVDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFyQjs7QUFDQSxNQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUCxDQUFpQixRQUFqQixDQUEwQixxQkFBMUIsQ0FBZCxFQUFnRTtBQUM1RCxJQUFBLEtBQUssQ0FBQyxPQUFOLENBQWdCLFVBQUMsSUFBRCxFQUFPLENBQVAsRUFBYTtBQUN6QixVQUFJLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCLFFBQUEsV0FBVztBQUNYLFFBQUEsV0FBVyxDQUFFLENBQUYsQ0FBWDtBQUNIO0FBQ0osS0FMRDtBQU1IO0FBQ0osQ0FWRyxFLENBV0o7O0FBQ0EsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLG1DQUExQixDQUFoQjtBQUNBLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBakI7QUFFQSxTQUFTLENBQUMsVUFBRCxDQUFUOztBQUVRLFNBQVMsU0FBVCxDQUFvQixDQUFwQixFQUF1QjtBQUNuQixNQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBaEIsRUFBd0I7QUFDcEIsSUFBQSxVQUFVLEdBQUcsQ0FBYjtBQUNIOztBQUNELE1BQUksQ0FBQyxHQUFDLENBQU4sRUFBUztBQUNMLElBQUEsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFyQjtBQUNIOztBQUNELEVBQUEsT0FBTyxDQUFDLE9BQVIsQ0FBaUIsVUFBQSxJQUFJO0FBQUEsV0FBSSxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsR0FBcUIsTUFBekI7QUFBQSxHQUFyQjtBQUVBLEVBQUEsT0FBTyxDQUFDLFVBQVUsR0FBQyxDQUFaLENBQVAsQ0FBc0IsS0FBdEIsQ0FBNEIsT0FBNUIsR0FBc0MsRUFBdEM7QUFDSDs7QUFFRCxTQUFTLFVBQVQsQ0FBb0IsQ0FBcEIsRUFBdUI7QUFDbkIsRUFBQSxTQUFTLENBQUMsVUFBVSxJQUFHLENBQWQsQ0FBVDtBQUNIOztBQUNELElBQUksQ0FBQyxnQkFBTCxDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ2xDLEVBQUEsVUFBVSxDQUFDLENBQUMsQ0FBRixDQUFWO0FBQ0gsQ0FGRDtBQUdBLElBQUksQ0FBQyxnQkFBTCxDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ2xDLEVBQUEsVUFBVSxDQUFDLENBQUQsQ0FBVjtBQUNILENBRkQsRSxDQUdBO0FBRUE7O0FBRUosSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFBQSxJQUNRLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF3QiwwQkFBeEIsQ0FEbkI7QUFFSCxRQUFROztBQUNMLFNBQVMsUUFBVCxHQUFvQjtBQUNoQixFQUFBLFVBQVUsQ0FBQyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3hDLFFBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixDQUFsQjs7QUFFQSxRQUFJLFNBQVMsQ0FBQyxPQUFWLEtBQXNCLE1BQTFCLEVBQWtDO0FBQzlCLE1BQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE9BQXpCO0FBQ0gsS0FGRCxNQUVNO0FBQ0wsTUFBQSxRQUFRLENBQUMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsTUFBekI7QUFDQTtBQUNILEdBUkQ7QUFTQSxFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0FBQ3JDLElBQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE1BQXpCO0FBRUgsR0FIRDtBQUlILEMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9jYXJkcyBcclxuY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmlzZXNfX3RhYl9faXRlbScpLFxyXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmlzZXNfX3RhYl9faXRlbV9fdGV4dCcpLFxyXG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmlzZXNfX2xpbmstbW9yZScpLCBcclxuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aXNlc19fdGFiX19pdGVtX190aXRsZScpLFxyXG4gICAgICAgIGNhcmRzUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpc2VzX190YWInKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlQ29udGVudCAoKSB7XHJcbiAgICAgICAgdGV4dC5mb3JFYWNoIChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBsaW5rLmZvckVhY2ggKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNhcmRzLmZvckVhY2ggKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aXRsZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV90aXRsZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd0NvbnRlbnQgKGkpIHtcclxuICAgICAgICB0ZXh0W2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGxpbmtbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgY2FyZHNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGl0bGVbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlX3RpdGxlJyk7XHJcblxyXG4gICAgfVxyXG4gICAgaGlkZUNvbnRlbnQgKCk7XHJcbiAgICBzaG93Q29udGVudCAoMCk7XHJcbiAgICBjYXJkc1BhcmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VydmlzZXNfX3RhYl9faXRlbScpKSB7XHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaCAoIChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGhpZGVDb250ZW50ICgpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0NvbnRlbnQgKGkpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuLy9zbGlkZXJcclxuY29uc3Qgc2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXN0aW1vbmlhbHNfX3NsaWRlci1pdGVtc19faXRlbScpO1xyXG5jb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYnKTtcclxuY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0Jyk7XHJcbmxldCBzbGlkZUluZGV4ID0gMTtcclxuXHJcbnNob3dTbGlkZShzbGlkZUluZGV4KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd1NsaWRlIChuKSB7XHJcbiAgICAgICAgICAgIGlmIChuID4gc2xpZGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuPDEpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzbGlkZXJzLmZvckVhY2ggKGl0ZW0gPT4gaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnICk7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXJzW3NsaWRlSW5kZXgtMV0uc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGx1c1NsaWRlcyhuKSB7XHJcbiAgICAgICAgICAgIHNob3dTbGlkZShzbGlkZUluZGV4ICs9bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwbHVzU2xpZGVzKC0xKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcGx1c1NsaWRlcygxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBlbmQgc2xpZGVyXHJcblxyXG4gICAgICAgIC8vYnVyZ2VyIFxyXG5cclxuICAgIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51JyksXHJcbiAgICAgICAgICAgIG1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5uYXZpZ2F0aW9uX19tZW51LWJ1cmdlcicpO1xyXG4gc2hvd01lbnUgKCk7XHJcbiAgICBmdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICAgICAgICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgIGNvbnN0IHN0eWxlTWVudSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1lbnVJdGVtKTtcclxuXHJcbiAgICAgICAgICAgaWYgKHN0eWxlTWVudS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgbWVudUl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0gLy8gZW5kIGJ1cmdlciBtZW51XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k5RGFHRnlaMlZ5TDNOeVl5OXFjeTloY0hBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3p0QlEwRkJPMEZCUTBFc1NVRkJUU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRlVMRU5CUVRCQ0xITkNRVUV4UWl4RFFVRmtPMEZCUVVFc1NVRkRVU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRlVMRU5CUVRCQ0xEUkNRVUV4UWl4RFFVUm1PMEZCUVVFc1NVRkZVU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRlVMRU5CUVRCQ0xITkNRVUV4UWl4RFFVWm1PMEZCUVVFc1NVRkhVU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRlVMRU5CUVRCQ0xEWkNRVUV4UWl4RFFVaG9RanRCUVVGQkxFbEJTVkVzVjBGQlZ5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xHZENRVUYyUWl4RFFVcDBRanM3UVVGTlNTeFRRVUZUTEZkQlFWUXNSMEZCZDBJN1FVRkRjRUlzUlVGQlFTeEpRVUZKTEVOQlFVTXNUMEZCVEN4RFFVRmpMRlZCUVVFc1NVRkJTU3hGUVVGSk8wRkJRMnhDTEVsQlFVRXNTVUZCU1N4RFFVRkRMRXRCUVV3c1EwRkJWeXhQUVVGWUxFZEJRWEZDTEUxQlFYSkNPMEZCUlVnc1IwRklSRHRCUVVsQkxFVkJRVUVzU1VGQlNTeERRVUZETEU5QlFVd3NRMEZCWXl4VlFVRkJMRWxCUVVrc1JVRkJTVHRCUVVOc1FpeEpRVUZCTEVsQlFVa3NRMEZCUXl4TFFVRk1MRU5CUVZjc1QwRkJXQ3hIUVVGeFFpeE5RVUZ5UWp0QlFVVklMRWRCU0VRN1FVRkpRU3hGUVVGQkxFdEJRVXNzUTBGQlF5eFBRVUZPTEVOQlFXVXNWVUZCUVN4SlFVRkpMRVZCUVVrN1FVRkRia0lzU1VGQlFTeEpRVUZKTEVOQlFVTXNVMEZCVEN4RFFVRmxMRTFCUVdZc1EwRkJjMElzVVVGQmRFSTdRVUZGU0N4SFFVaEVPMEZCU1VFc1JVRkJRU3hMUVVGTExFTkJRVU1zVDBGQlRpeERRVUZqTEZWQlFVRXNTVUZCU1N4RlFVRkpPMEZCUTJ4Q0xFbEJRVUVzU1VGQlNTeERRVUZETEZOQlFVd3NRMEZCWlN4TlFVRm1MRU5CUVhOQ0xHTkJRWFJDTzBGQlEwZ3NSMEZHUkR0QlFVZElPenRCUVVORUxGTkJRVk1zVjBGQlZDeERRVUZ6UWl4RFFVRjBRaXhGUVVGNVFqdEJRVU55UWl4RlFVRkJMRWxCUVVrc1EwRkJReXhEUVVGRUxFTkJRVW9zUTBGQlVTeExRVUZTTEVOQlFXTXNUMEZCWkN4SFFVRjNRaXhQUVVGNFFqdEJRVU5CTEVWQlFVRXNTVUZCU1N4RFFVRkRMRU5CUVVRc1EwRkJTaXhEUVVGUkxFdEJRVklzUTBGQll5eFBRVUZrTEVkQlFYZENMRTlCUVhoQ08wRkJRMEVzUlVGQlFTeExRVUZMTEVOQlFVTXNRMEZCUkN4RFFVRk1MRU5CUVZNc1UwRkJWQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRjFRaXhSUVVGMlFqdEJRVU5CTEVWQlFVRXNTMEZCU3l4RFFVRkRMRU5CUVVRc1EwRkJUQ3hEUVVGVExGTkJRVlFzUTBGQmJVSXNSMEZCYmtJc1EwRkJkVUlzWTBGQmRrSTdRVUZGU0RzN1FVRkRSQ3hYUVVGWE8wRkJRMWdzVjBGQlZ5eERRVUZGTEVOQlFVWXNRMEZCV0R0QlFVTkJMRmRCUVZjc1EwRkJReXhuUWtGQldpeERRVUUyUWl4UFFVRTNRaXhGUVVGelF5eFpRVUZOTzBGQlF6VkRMRTFCUVUwc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZ5UWpzN1FVRkRRU3hOUVVGSkxFMUJRVTBzU1VGQlNTeE5RVUZOTEVOQlFVTXNVMEZCVUN4RFFVRnBRaXhSUVVGcVFpeERRVUV3UWl4eFFrRkJNVUlzUTBGQlpDeEZRVUZuUlR0QlFVTTFSQ3hKUVVGQkxFdEJRVXNzUTBGQlF5eFBRVUZPTEVOQlFXZENMRlZCUVVNc1NVRkJSQ3hGUVVGUExFTkJRVkFzUlVGQllUdEJRVU42UWl4VlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGbUxFVkJRWEZDTzBGQlEycENMRkZCUVVFc1YwRkJWenRCUVVOWUxGRkJRVUVzVjBGQlZ5eERRVUZGTEVOQlFVWXNRMEZCV0R0QlFVTklPMEZCUTBvc1MwRk1SRHRCUVUxSU8wRkJRMG9zUTBGV1J5eEZMRU5CVjBvN08wRkJRMEVzU1VGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR2RDUVVGVUxFTkJRVEJDTEcxRFFVRXhRaXhEUVVGb1FqdEJRVU5CTEVsQlFVMHNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEU5QlFYWkNMRU5CUVdJN1FVRkRRU3hKUVVGTkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhQUVVGMlFpeERRVUZpTzBGQlEwRXNTVUZCU1N4VlFVRlZMRWRCUVVjc1EwRkJha0k3UVVGRlFTeFRRVUZUTEVOQlFVTXNWVUZCUkN4RFFVRlVPenRCUVVWUkxGTkJRVk1zVTBGQlZDeERRVUZ2UWl4RFFVRndRaXhGUVVGMVFqdEJRVU51UWl4TlFVRkpMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQmFFSXNSVUZCZDBJN1FVRkRjRUlzU1VGQlFTeFZRVUZWTEVkQlFVY3NRMEZCWWp0QlFVTklPenRCUVVORUxFMUJRVWtzUTBGQlF5eEhRVUZETEVOQlFVNHNSVUZCVXp0QlFVTk1MRWxCUVVFc1ZVRkJWU3hIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZ5UWp0QlFVTklPenRCUVVORUxFVkJRVUVzVDBGQlR5eERRVUZETEU5QlFWSXNRMEZCYVVJc1ZVRkJRU3hKUVVGSk8wRkJRVUVzVjBGQlNTeEpRVUZKTEVOQlFVTXNTMEZCVEN4RFFVRlhMRTlCUVZnc1IwRkJjVUlzVFVGQmVrSTdRVUZCUVN4SFFVRnlRanRCUVVWQkxFVkJRVUVzVDBGQlR5eERRVUZETEZWQlFWVXNSMEZCUXl4RFFVRmFMRU5CUVZBc1EwRkJjMElzUzBGQmRFSXNRMEZCTkVJc1QwRkJOVUlzUjBGQmMwTXNSVUZCZEVNN1FVRkRTRHM3UVVGRlJDeFRRVUZUTEZWQlFWUXNRMEZCYjBJc1EwRkJjRUlzUlVGQmRVSTdRVUZEYmtJc1JVRkJRU3hUUVVGVExFTkJRVU1zVlVGQlZTeEpRVUZITEVOQlFXUXNRMEZCVkR0QlFVTklPenRCUVVORUxFbEJRVWtzUTBGQlF5eG5Ra0ZCVEN4RFFVRjFRaXhQUVVGMlFpeEZRVUZuUXl4WlFVRk5PMEZCUTJ4RExFVkJRVUVzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUml4RFFVRldPMEZCUTBnc1EwRkdSRHRCUVVkQkxFbEJRVWtzUTBGQlF5eG5Ra0ZCVEN4RFFVRjFRaXhQUVVGMlFpeEZRVUZuUXl4WlFVRk5PMEZCUTJ4RExFVkJRVUVzVlVGQlZTeERRVUZETEVOQlFVUXNRMEZCVmp0QlFVTklMRU5CUmtRc1JTeERRVWRCTzBGQlJVRTdPMEZCUlVvc1NVRkJUU3hWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc1pVRkJka0lzUTBGQmJrSTdRVUZCUVN4SlFVTlJMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQlZDeERRVUYzUWl3d1FrRkJlRUlzUTBGRWJrSTdRVUZGU0N4UlFVRlJPenRCUVVOTUxGTkJRVk1zVVVGQlZDeEhRVUZ2UWp0QlFVTm9RaXhGUVVGQkxGVkJRVlVzUTBGQlF5eG5Ra0ZCV0N4RFFVRTBRaXhQUVVFMVFpeEZRVUZ4UXl4WlFVRk5PMEZCUTNoRExGRkJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4blFrRkJVQ3hEUVVGM1FpeFJRVUY0UWl4RFFVRnNRanM3UVVGRlFTeFJRVUZKTEZOQlFWTXNRMEZCUXl4UFFVRldMRXRCUVhOQ0xFMUJRVEZDTEVWQlFXdERPMEZCUXpsQ0xFMUJRVUVzVVVGQlVTeERRVUZETEV0QlFWUXNRMEZCWlN4UFFVRm1MRWRCUVhsQ0xFOUJRWHBDTzBGQlEwZ3NTMEZHUkN4TlFVVk5PMEZCUTB3c1RVRkJRU3hSUVVGUkxFTkJRVU1zUzBGQlZDeERRVUZsTEU5QlFXWXNSMEZCZVVJc1RVRkJla0k3UVVGRFFUdEJRVU5JTEVkQlVrUTdRVUZUUVN4RlFVRkJMRkZCUVZFc1EwRkJReXhuUWtGQlZDeERRVUV3UWl4UFFVRXhRaXhGUVVGdFF5eFpRVUZOTzBGQlEzSkRMRWxCUVVFc1VVRkJVU3hEUVVGRExFdEJRVlFzUTBGQlpTeFBRVUZtTEVkQlFYbENMRTFCUVhwQ08wRkJSVWdzUjBGSVJEdEJRVWxJTEVNc1EwRkJReUlzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUtDbDdablZ1WTNScGIyNGdjaWhsTEc0c2RDbDdablZ1WTNScGIyNGdieWhwTEdZcGUybG1LQ0Z1VzJsZEtYdHBaaWdoWlZ0cFhTbDdkbUZ5SUdNOVhDSm1kVzVqZEdsdmJsd2lQVDEwZVhCbGIyWWdjbVZ4ZFdseVpTWW1jbVZ4ZFdseVpUdHBaaWdoWmlZbVl5bHlaWFIxY200Z1l5aHBMQ0V3S1R0cFppaDFLWEpsZEhWeWJpQjFLR2tzSVRBcE8zWmhjaUJoUFc1bGR5QkZjbkp2Y2loY0lrTmhibTV2ZENCbWFXNWtJRzF2WkhWc1pTQW5YQ0lyYVN0Y0lpZGNJaWs3ZEdoeWIzY2dZUzVqYjJSbFBWd2lUVTlFVlV4RlgwNVBWRjlHVDFWT1JGd2lMR0Y5ZG1GeUlIQTlibHRwWFQxN1pYaHdiM0owY3pwN2ZYMDdaVnRwWFZzd1hTNWpZV3hzS0hBdVpYaHdiM0owY3l4bWRXNWpkR2x2YmloeUtYdDJZWElnYmoxbFcybGRXekZkVzNKZE8zSmxkSFZ5YmlCdktHNThmSElwZlN4d0xIQXVaWGh3YjNKMGN5eHlMR1VzYml4MEtYMXlaWFIxY200Z2JsdHBYUzVsZUhCdmNuUnpmV1p2Y2loMllYSWdkVDFjSW1aMWJtTjBhVzl1WENJOVBYUjVjR1Z2WmlCeVpYRjFhWEpsSmlaeVpYRjFhWEpsTEdrOU1EdHBQSFF1YkdWdVozUm9PMmtyS3lsdktIUmJhVjBwTzNKbGRIVnliaUJ2ZlhKbGRIVnliaUJ5ZlNrb0tTSXNJaTh2WTJGeVpITWdYSEpjYm1OdmJuTjBJR05oY21SeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25Mbk5sY25acGMyVnpYMTkwWVdKZlgybDBaVzBuS1N4Y2NseHVJQ0FnSUNBZ0lDQjBaWGgwSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxuTmxjblpwYzJWelgxOTBZV0pmWDJsMFpXMWZYM1JsZUhRbktTeGNjbHh1SUNBZ0lDQWdJQ0JzYVc1cklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25Mbk5sY25acGMyVnpYMTlzYVc1ckxXMXZjbVVuS1N3Z1hISmNiaUFnSUNBZ0lDQWdkR2wwYkdVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VjMlZ5ZG1selpYTmZYM1JoWWw5ZmFYUmxiVjlmZEdsMGJHVW5LU3hjY2x4dUlDQWdJQ0FnSUNCallYSmtjMUJoY21WdWRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXpaWEoyYVhObGMxOWZkR0ZpSnlrN1hISmNibHh5WEc0Z0lDQWdablZ1WTNScGIyNGdhR2xrWlVOdmJuUmxiblFnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJsZUhRdVptOXlSV0ZqYUNBb2FYUmxiU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsMFpXMHVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZHViMjVsSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdiR2x1YXk1bWIzSkZZV05vSUNocGRHVnRJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJTNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyNXZibVVuTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0JqWVhKa2N5NW1iM0pGWVdOb0lDaHBkR1Z0SUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FYUmxiUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RoWTNScGRtVW5LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdkR2wwYkdVdVptOXlSV0ZqYUNocGRHVnRJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1WZmRHbDBiR1VuS1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR1oxYm1OMGFXOXVJSE5vYjNkRGIyNTBaVzUwSUNocEtTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdWNGRGdHBYUzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMkpzYjJOckp6dGNjbHh1SUNBZ0lDQWdJQ0JzYVc1clcybGRMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5ZbXh2WTJzbk8xeHlYRzRnSUNBZ0lDQWdJR05oY21SelcybGRMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWdJSFJwZEd4bFcybGRMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlY5MGFYUnNaU2NwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHaHBaR1ZEYjI1MFpXNTBJQ2dwTzF4eVhHNGdJQ0FnYzJodmQwTnZiblJsYm5RZ0tEQXBPMXh5WEc0Z0lDQWdZMkZ5WkhOUVlYSmxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvS1NBOVBpQjdYSEpjYmlBZ0lDQmpiMjV6ZENCMFlYSm5aWFFnUFNCbGRtVnVkQzUwWVhKblpYUTdYSEpjYmlBZ0lDQnBaaUFvZEdGeVoyVjBJQ1ltSUhSaGNtZGxkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjNObGNuWnBjMlZ6WDE5MFlXSmZYMmwwWlcwbktTa2dlMXh5WEc0Z0lDQWdJQ0FnSUdOaGNtUnpMbVp2Y2tWaFkyZ2dLQ0FvYVhSbGJTd2dhU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR0Z5WjJWMElEMDlQU0JwZEdWdEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvYVdSbFEyOXVkR1Z1ZENBb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5vYjNkRGIyNTBaVzUwSUNocEtUc2dYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVmU2s3WEhKY2JpOHZjMnhwWkdWeVhISmNibU52Ym5OMElITnNhV1JsY25NZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR1Z6ZEdsdGIyNXBZV3h6WDE5emJHbGtaWEl0YVhSbGJYTmZYMmwwWlcwbktUdGNjbHh1WTI5dWMzUWdjSEpsZGlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1d2NtVjJKeWs3WEhKY2JtTnZibk4wSUc1bGVIUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VibVY0ZENjcE8xeHlYRzVzWlhRZ2MyeHBaR1ZKYm1SbGVDQTlJREU3WEhKY2JseHlYRzV6YUc5M1UyeHBaR1VvYzJ4cFpHVkpibVJsZUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUhOb2IzZFRiR2xrWlNBb2Jpa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYmlBK0lITnNhV1JsY25NdWJHVnVaM1JvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpiR2xrWlVsdVpHVjRJRDBnTVR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2Jqd3hLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemJHbGtaVWx1WkdWNElEMGdjMnhwWkdWeWN5NXNaVzVuZEdnN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYzJ4cFpHVnljeTVtYjNKRllXTm9JQ2hwZEdWdElEMCtJR2wwWlcwdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkdWIyNWxKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyeHBaR1Z5YzF0emJHbGtaVWx1WkdWNExURmRMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5KenRjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUhCc2RYTlRiR2xrWlhNb2Jpa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnphRzkzVTJ4cFpHVW9jMnhwWkdWSmJtUmxlQ0FyUFc0cE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCd2NtVjJMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSWdLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NHeDFjMU5zYVdSbGN5Z3RNU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnYm1WNGRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUlDZ25ZMnhwWTJzbkxDQW9LU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhCc2RYTlRiR2xrWlhNb01TazdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdMeThnWlc1a0lITnNhV1JsY2x4eVhHNWNjbHh1SUNBZ0lDQWdJQ0F2TDJKMWNtZGxjaUJjY2x4dVhISmNiaUFnSUNCamIyNXpkQ0JpZFhKblpYSk5aVzUxSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1obFlXUmxjbDlmYldWdWRTY3BMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRaVzUxU1hSbGJTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJZ0tDY3VibUYyYVdkaGRHbHZibDlmYldWdWRTMWlkWEpuWlhJbktUdGNjbHh1SUhOb2IzZE5aVzUxSUNncE8xeHlYRzRnSUNBZ1puVnVZM1JwYjI0Z2MyaHZkMDFsYm5Vb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnWW5WeVoyVnlUV1Z1ZFM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNncElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCemRIbHNaVTFsYm5VZ1BTQjNhVzVrYjNjdVoyVjBRMjl0Y0hWMFpXUlRkSGxzWlNodFpXNTFTWFJsYlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lHbG1JQ2h6ZEhsc1pVMWxiblV1WkdsemNHeGhlU0E5UFQwZ0oyNXZibVVuS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWxiblZKZEdWdExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBbllteHZZMnNuTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJSDFsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JXVnVkVWwwWlcwdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkdWIyNWxKenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdiV1Z1ZFVsMFpXMHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9LU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUcxbGJuVkpkR1Z0TG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuYm05dVpTYzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMHBPeUFnSUNBZ0lDQWdYSEpjYmlBZ0lDQjlJQzh2SUdWdVpDQmlkWEpuWlhJZ2JXVnVkVnh5WEc0aVhYMD0ifQ==
