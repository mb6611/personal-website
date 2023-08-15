// Animate loading  for initial page
document.addEventListener("DOMContentLoaded", function() {
    addSlideIn("image-container");
    addSlideIn("main-text-container");
    addSlideIn("navbar");
});

// Implements .slide-in CSS class
function addSlideIn(HTMLId) {
    const element = document.querySelector("." + HTMLId);
    element.style.opacity = "1";
    element.classList.add("slide-in");
}

// Animate navbar interactions
const hamburgerMenu = document.getElementById("home-hamburger-menu");
const sidebarMenu = document.getElementById("sidebar-menu")
hamburgerMenu.addEventListener('click', () => {
    sidebarMenu.style.transform = "translateX(-100%)";
});

const sidebarExitContainer = document.getElementById("exit-container");
sidebarExitContainer.addEventListener('click', () => {
    sidebarMenu.style.transform = "translateX(0%)";
})


// Animate sidebar selections

const homeButton = document.getElementById("home-button");
homeButton.addEventListener('click', () => {
    sidebarMenu.style.transform = "translateX(0%)";
    aboutMePage.style.transform = "translateX(100%)";
});

const aboutMeButton = document.getElementById("about-me-button");
const aboutMePage = document.getElementById("about-me");
aboutMeButton.addEventListener('click', () => {
    aboutMePage.style.transform = "translateX(0%)";
    sidebarMenu.style.transform = "translateX(0%)";
});

const aboutMeHamburgerMenu = document.getElementById("about-me-hamburger-menu");
aboutMeHamburgerMenu.addEventListener('click', () => {
    sidebarMenu.style.transform = "translateX(-100%)";
});