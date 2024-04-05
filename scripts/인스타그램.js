window.addEventListener('load', function() {
	var carousels = document.getElementsByClassName('carousel');

	for (var i = 0; i < carousels.length; i++) {
		addCarousel(carousels[i]);
	};

});

function addCarousel(carouselElem) {
	var ulElem = carouselElem.querySelector('ul');
	var liElems = ulElem.querySelectorAll('li');

	ulElem.style.width = liElems[0].clientWidth * liElems.length  + 'px';

	var slideButtons = carouselElem.querySelectorAll('.slide');

	for (i = 0; i < slideButtons.length; i++) {
		slideButtons[i].addEventListener('click', buttonClickEvent(carouselElem));
	};
};

function buttonClickEvent (carouselElem) {
	return function(event) {
		var clickedButton = event.currentTarget;

		var ulElem = carouselElem.querySelector('ul');
		var liElems = ulElem.querySelectorAll('li');
		var liCount = liElems.length;
		var currentIndex = carouselElem.attributes.data.value;

		if (clickedButton.className.includes('left')) {
			currentIndex --;
			scrollDiv(carouselElem, currentIndex);

		} else if (clickedButton.className.includes('right')) {
			currentIndex ++;
			scrollDiv(carouselElem, currentIndex);
		};

		carouselElem.attributes.data.value = currentIndex;

		updateIndicator(carouselElem, currentIndex);
		updateButtonVisible(carouselElem, currentIndex);

	};
};

function scrollDiv (carouselElem, currentIndex) {
	var ulElem = carouselElem.querySelector('ul');
	var liElems = ulElem.querySelectorAll('li');

	var scroll = carouselElem.querySelector('div');
	var scrollPosition = currentIndex * liElems[0].clientWidth;
	scroll.scrollTo({left: scrollPosition, behavior: 'smooth'});
};

function updateIndicator (carouselElem, currentIndex) {
	var indicator = carouselElem.querySelectorAll('footer > div');

	for (i = 0; i < indicator.length; i++) {
		if (i == currentIndex) {
			indicator[i].className = 'active';
		} else {
			indicator[i].className = '';
		};
	};
};

function updateButtonVisible (carouselElem, currentIndex) {
	var slideLeft = carouselElem.querySelector('.slide-left');
	var slideRight = carouselElem.querySelector('.slide-right');

	var ulElem = carouselElem.querySelector('ul');
	var liElems = ulElem.querySelectorAll('li');

	if (currentIndex == 0) {
		slideLeft.style.display = 'none';
	} else {
		slideLeft.style.display = 'block';
	};

	if (currentIndex == liElems.length - 1) {
		slideRight.style.display = 'none';
	} else {
		slideRight.style.display = 'block';
	};
};

