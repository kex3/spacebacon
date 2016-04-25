var starfield = document.getElementById('starfield'),
	nebula = document.getElementById('nebula'),
	pig = document.getElementById('pig'),
	pigX = -530,
	pigY = 100,
	nebulaX = 0,
	nebulaY = 0,
	counter = 0;

setInterval(function() {
	pigX = pigX + 0.5;
	pigY = 100 + (50 * Math.sin(counter / 100));


	counter++;
	pig.style.right = pigX + 'px';
	pig.style.top = pigY + 'px';
	pig.style.transform = 'rotate(' + ((counter / 10) % 360) + 'deg)';

	nebula.style.transform = 'rotate(-' + ((counter / 30) % 360) + 'deg) scale(' + (2 + Math.sin(counter / 1000) % 360) + ')';
}, 1000 / 60);
