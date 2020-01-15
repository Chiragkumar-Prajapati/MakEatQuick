var slideIndex = 1;
displaySlide(slideIndex);

function nextSlide(){
	slideIndex++;
	displaySlide(slideIndex);
}

function prevSlide(){
	slideIndex--;
	displaySlide(slideIndex);
}

function displaySlide(n){
	var i = 0;
	var slides = document.getElementsByClassName("specialImage");
	if(n > slides.length) {
		slideIndex = 1;
	}else if(n < 1) {
		slideIndex = slides.length;
	}
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
}