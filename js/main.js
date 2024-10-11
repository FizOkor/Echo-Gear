$(document).ready(function(){ 
    // Navbar Toggle
    $(".menu-btn").click(function(){
        $(".nav-links").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });


    new WOW({animateClass: 'animate__animated'}).init();
    // new WOW().init();


    // Sticky Nabvar
    let lastScrollTop = 0;

    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        $('nav').css('top', (scrollTop > 300 && scrollTop > lastScrollTop) ? '-100px' : '0px');
        lastScrollTop = scrollTop;
    });
    // Sticky Navbar


    window.onload = function() {
        let currentImageIndex = 1; // Start with the first image
        const totalImages = 5; // Total number of images
        const imageElement = document.getElementById('slider-image');
        const baseImagePath = './images/products/headphone-'; // Base path for images
        const imageExtension = '.png'; // Image file extension

        // Function to change the image with transition
        function changeImage() {
            // Fade out the image
            imageElement.style.opacity = 0;

            // After the fade-out effect, change the image
            setTimeout(() => {
                currentImageIndex = (currentImageIndex % totalImages) + 1; // Cycle through images
                imageElement.src = `${baseImagePath}${currentImageIndex}${imageExtension}`;
                
                // Fade in the new image
                imageElement.style.opacity = 1;
            }, 2000); // Match this duration with the CSS transition time
        }

        // Change image every 3 seconds (3000ms)
        setInterval(changeImage, 4000);
    };


    // Testimonials carousel
    $(".services-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',  // Left icon
            '<i class="fas fa-chevron-right"></i>'  // Right icon
        ],
        responsive: {
            0:{
                items:1,
                autoplay: false
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
});