// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-container'), // Apply to main container
    smooth: true
});

// Get cursor elements
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

// Function to update the cursor position
window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Move cursor dot instantly to mouse position
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Animate the cursor outline to follow the mouse with a delay
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`,
    }, { 
        duration: 700, // Smooth movement duration
        fill: "forwards"
    });
});

// GSAP Animations (on page load)
function loadingAnimation() {
    gsap.from(".text h1", {
        y: 100,
        opacity: 0,
        delay: 1,
        duration: 0.7,
    });

    gsap.from(".image-container #hero-img", {
        scale: 0.9,
        opacity: 0,
        delay: 0.5,
        duration: 0.7,
    });

    gsap.from(".text h4", {
        y: 100,
        opacity: 0,
        delay: 1,
        duration: 0.7,
    });
}
// Anchor link smooth scrolling with Locomotive Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            scroll.scrollTo(target);
        }
    });
});


// Call the loading animation function
loadingAnimation();
