'use strict';

angular.
  module('phonecatApp').
  animation('.phone', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element.css({
		display: 'block',
		opacity: 0,
		position: 'absolute',
		width: 0,
		height: 0,
		top: 100,
		left: 0
	  }).animate({
		opacity: 1,
		width: 400,
		height: 400,
		top: 0,
		left: 0
      }, 2018, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element, className, done) {
      if (className !== 'selected') return;

      element.css({
		opacity: 1,
		position: 'absolute',
		width: 400,
		height: 400,
		top: 0,
		left: 0
	  }).animate({
        opacity: 0,
		width: 0,
		height: 0,
		top: 300,
		left: 400
      }, 2018, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });
