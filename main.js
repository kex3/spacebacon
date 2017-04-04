var starfield = document.getElementById('starfield'),
	nebulas = document.getElementsByClassName('nebula'),
	pig = document.getElementById('pig'),
	pigX = -530,
	pigY = window.innerHeight / 2,
	pigYoffset = 0,
	nebulaX = 0,
	nebulaY = 0,
	counter = 0;

render = function() {
	pigX = pigX + 0.5;
	pigYoffset = (window.innerHeight / 8) * Math.sin(counter / 100);

	counter++;
	pig.style.right = pigX + 'px';
	pig.style.top = (pigY + pigYoffset) + 'px';
	pig.style.transform = 'rotate(' + ((counter / 10) % 360) + 'deg) translateZ(0)';

	nebulas[0].style.transform = 'rotate(-' + ((counter / 30) % 360) + 'deg) scale(' + (2 + Math.sin(counter / 1000) % 360) + ') translateZ(0)';
	nebulas[1].style.transform = 'rotate(' + ((180 + counter / 45) % 360) + 'deg) scale(' + (2 + 2 * Math.sin(counter / 750) % 360) + ') translateZ(0)';

	if (counter % 60 === 0) {
		nebulas[0].style.opacity = 0.4 + (0.6 * Math.random());
		nebulas[1].style.opacity = 0.2 + (0.8 * Math.random());
	}

	if (pigX > window.innerWidth + 530) {
		pigX = -530;
	}

	window.requestAnimationFrame(render);
};

window.onresize = function() {
	pigY = window.innerHeight / 2;
};

render();
