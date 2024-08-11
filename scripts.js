document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const buttons = document.querySelectorAll('.pagination button');
    let currentIndex = 0;

    function goToSlide(index) {
        slides.style.transform = `translateX(-${index * 100}vw)`;
        buttons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    buttons.forEach((button, i) => {
        button.addEventListener('click', () => goToSlide(i));
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % buttons.length;
        goToSlide(nextIndex);
    }, 5000);
});
