function showImage(index) {
    const cards = document.querySelectorAll('.service-card');
    const dots = document.querySelectorAll('.dot');

    cards.forEach((card, i) => {
        if (i + 1 === index || (index === 4 && i === 3)) {
            card.style.transform = 'scale(1.05)';
        } else {
            card.style.transform = 'scale(1)';
        }
    });

    dots.forEach((dot, i) => {
        if ((i === 0 && index === 1) || (i === 1 && index === 2) || (i === 2 && index === 4)) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(1);
});
