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

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
  
        // Add active class to the clicked link
        this.classList.add('active');
  
        // Scroll to the section
        const scrollTarget = document.getElementById(this.dataset.scroll);
        scrollTarget.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  
