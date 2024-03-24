//скролл по кнопке из heder

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

//прокрутка навыков свайпом 
const sliderStacks = document.querySelector('.sliderStacks');
let isDown = false;
let startX;
let scrollLeft;

sliderStacks.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - sliderStacks.offsetLeft;
  scrollLeft = sliderStacks.scrollLeft;
});

sliderStacks.addEventListener('mouseleave', () => {
  isDown = false;
});

sliderStacks.addEventListener('mouseup', () => {
  isDown = false;
});

sliderStacks.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderStacks.offsetLeft;
  const walk = (x - startX) * 2;
  sliderStacks.scrollLeft = scrollLeft - walk;
});

sliderStacks.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].clientX - sliderStacks.offsetLeft;
  scrollLeft = sliderStacks.scrollLeft;
});

sliderStacks.addEventListener('touchend', () => {
  isDown = false;
});

sliderStacks.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].clientX - sliderStacks.offsetLeft;
  const walk = (x - startX) * 2;
  sliderStacks.scrollLeft = scrollLeft - walk;
});


//прокрутка навыков колесиком мыши
let scrollPos = 0;

sliderStacks.addEventListener('wheel', (e) => {
  e.preventDefault();
  
  scrollPos += e.deltaY;
  
  sliderStacks.scrollLeft = scrollPos;
	
});





let currentImage = 1;

    function changeImage() {
			document.getElementById(`image${currentImage}`).style.transform = "translateX(-100%)";
        currentImage = currentImage % 7 + 1;
        document.getElementById(`image${currentImage}`).style.transform = "translateX(0)";
    }