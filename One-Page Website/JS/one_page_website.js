function openLightbox() {
    document.getElementById("catLightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("catLightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function toSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("catSlides");
    var dots = document.getElementsByClassName("thumbnail");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classname = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classname += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}