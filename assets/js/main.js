/*
	Eventually by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
(function() {

	"use strict";

	var	$body = document.querySelector('body');

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

	// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
              'images/0.jpg' : 'center',
    'images/1.jpg' : 'center',
    'images/2.jpg' : 'center',
    'images/3.jpg' : 'center',
    'images/4.jpg' : 'center',
    'images/5.jpg' : 'center',
    'images/6.jpg' : 'center',
    'images/7.jpg' : 'center',
    'images/8.jpg' : 'center',
    'images/9.jpg' : 'center',
    'images/10.jpg' : 'center',
    'images/11.jpg' : 'center',
    'images/12.jpg' : 'center',
    'images/13.jpg' : 'center',
    'images/14.jpg' : 'center',
    'images/15.jpg' : 'center',
    'images/16.jpg' : 'center',
    'images/17.jpg' : 'center',
    'images/18.jpg' : 'center',
    'images/19.jpg' : 'center',
    'images/20.jpg' : 'center',
    'images/21.jpg' : 'center',
    'images/22.jpg' : 'center',
    'images/23.jpg' : 'center',
    'images/24.jpg' : 'center',
    'images/25.jpg' : 'center',
    'images/26.jpg' : 'center',
    'images/27.jpg' : 'center',
    'images/28.jpg' : 'center',
    'images/29.jpg' : 'center',
    'images/30.jpg' : 'center',
    'images/31.jpg' : 'center',
    'images/32.jpg' : 'center',
    'images/33.jpg' : 'center',
    'images/34.jpg' : 'center',
    'images/35.jpg' : 'center',
    'images/36.jpg' : 'center',
    'images/37.jpg' : 'center',
    'images/38.jpg' : 'center',
    'images/39.jpg' : 'center',
    'images/40.jpg' : 'center',
    'images/41.jpg' : 'center',
    'images/42.jpg' : 'center',
    'images/43.jpg' : 'center',
    'images/44.jpg' : 'center',
    'images/45.jpg' : 'center',
    'images/46.jpg' : 'center',
    'images/47.jpg' : 'center',
    'images/48.jpg' : 'center',
    'images/49.jpg' : 'center',
    'images/50.jpg' : 'center',
    'images/51.jpg' : 'center',
    'images/52.jpg' : 'center',
    'images/53.jpg' : 'center',
    'images/54.jpg' : 'center',
    'images/55.jpg' : 'center',
    'images/56.jpg' : 'center',
    'images/57.jpg' : 'center',
    'images/58.jpg' : 'center',
    'images/59.jpg' : 'center',
    'images/60.jpg' : 'center',
    'images/61.jpg' : 'center',
    'images/62.jpg' : 'center',
    'images/63.jpg' : 'center',
    'images/64.jpg' : 'center',
    'images/65.jpg' : 'center',
    'images/66.jpg' : 'center',
    'images/67.jpg' : 'center',
    'images/68.jpg' : 'center',
    'images/69.jpg' : 'center',
    'images/70.jpg' : 'center',
    'images/71.jpg' : 'center',
    'images/72.jpg' : 'center',
    'images/73.jpg' : 'center',
    'images/74.jpg' : 'center',
    'images/75.jpg' : 'center',
    'images/76.jpg' : 'center',
    'images/77.jpg' : 'center',
    'images/78.jpg' : 'center',
    'images/79.jpg' : 'center',
    'images/80.jpg' : 'center',
    'images/81.jpg' : 'center',
    'images/82.jpg' : 'center',
    'images/83.jpg' : 'center',
    'images/84.jpg' : 'center',
    'images/85.jpg' : 'center',
    'images/86.jpg' : 'center',
    'images/87.jpg' : 'center',
    'images/88.jpg' : 'center',
    'images/89.jpg' : 'center',
    'images/90.jpg' : 'center',
    'images/91.jpg' : 'center',
    'images/92.jpg' : 'center',
    'images/93.jpg' : 'center',
    'images/94.jpg' : 'center',
    'images/95.jpg' : 'center',
    'images/96.jpg' : 'center',
    'images/97.jpg' : 'center',
    'images/98.jpg' : 'center',
    'images/99.jpg' : 'center',
    'images/100.jpg' : 'center',
    'images/101.jpg' : 'center'
						},

					// Delay.
						delay: 5000

				};
			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);
				for (k in settings.images) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);

				}

			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

	// Signup Form.
		(function() {

			// Vars.
				var $form = document.querySelectorAll('#signup-form')[0],
					$submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
					$message;

			// Bail if addEventListener isn't supported.
				if (!('addEventListener' in $form))
					return;

			// Message.
				$message = document.createElement('span');
					$message.classList.add('message');
					$form.appendChild($message);

				$message._show = function(type, text) {

					$message.innerHTML = text;
					$message.classList.add(type);
					$message.classList.add('visible');

					window.setTimeout(function() {
						$message._hide();
					}, 3000);

				};

				$message._hide = function() {
					$message.classList.remove('visible');
				};

			// Events.
			// Note: If you're *not* using AJAX, get rid of this event listener.
				$form.addEventListener('submit', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Hide message.
						$message._hide();

					// Disable submit.
						$submit.disabled = true;

					// Process form.
					// Note: Doesn't actually do anything yet (other than report back with a "thank you"),
					// but there's enough here to piece together a working AJAX submission call that does.
						window.setTimeout(function() {

							// Reset form.
								$form.reset();

							// Enable submit.
								$submit.disabled = false;

							// Show message.
								$message._show('success', 'Thank you!');
								//$message._show('failure', 'Something went wrong. Please try again.');

						}, 750);

				});

		})();

})();
