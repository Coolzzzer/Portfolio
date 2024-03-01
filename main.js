const hederItemOff = document.querySelector("#hederItemOff");
const hederItemOn = document.querySelector("#hederItemOn");
const linkX = document.querySelector("#linkX");

hederItemOff.onclick = function(){
	hederItemOff.style.display = "none";
	hederItemOn.style.display = "flex";
};
linkX.onclick = function(){
	hederItemOn.style.display = "none";
	hederItemOff.style.display = "flex";
};
document.querySelectorAll('a[href^="#"').forEach(linkk => {
	linkk.addEventListener('click', function(e) {
			e.preventDefault();
			let href = this.getAttribute('href').substring(1);
			const scrollTarget = document.getElementById(href);
			const topOffset = document.querySelector('#hederItemOn').offsetHeight;
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;
			window.scrollBy({
					top:  offsetPosition - 200,
					behavior: 'smooth'
			});
	});
});

document.querySelector('#linkName').addEventListener('click', function() {
	location.reload();
});