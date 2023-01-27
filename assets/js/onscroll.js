let lastKnownScrollPosition = 0;
let ticking = false;

if (document.getElementById("wold-header")) {
	var woldHeader = document.getElementById("wold-header");
};

function doSomething(scrollPos) {
	if (scrollPos > 72) {
		woldHeader.classList.add("bg-primary");
	} else if (scrollPos < 72) {
		woldHeader.classList.remove("bg-primary");
	}
}

document.addEventListener('scroll', function (e) {
	lastKnownScrollPosition = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(function () {
			doSomething(lastKnownScrollPosition);
			ticking = false;
		});

		ticking = true;
	}
});