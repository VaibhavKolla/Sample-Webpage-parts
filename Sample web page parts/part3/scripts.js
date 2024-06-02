
window.addEventListener('scroll', function() {
    var slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide, index) {
        var slideTop = slide.getBoundingClientRect().top;
        if (slideTop < window.innerHeight * 0.75) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
});
