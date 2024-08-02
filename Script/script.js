//auto scroll button

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTop");

    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to the top
        });
    });

    // Optionally show/hide the button based on scroll position


    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) { 
            scrollToTopButton.classList.remove("hidden");
        } else {
            scrollToTopButton.classList.add("hidden");
        }
    });
});


//save favrite and add to cart

document.querySelectorAll('.fa-heart, .fa-cart-plus').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
    });
});