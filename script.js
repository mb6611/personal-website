// buttons
const homeButton = document.getElementById("home-button");
const aboutMeButton = document.getElementById("about-me-button");
const startupsButton = document.getElementById("startups-button");
const sidebarExitButton = document.getElementById("exit-container");

// pages
const mainPage = document.getElementById("main-page");
const aboutMePage = document.getElementById("about-me");
const startupsPage = document.getElementById("startups");
const pages = [mainPage, aboutMePage, startupsPage];

// hamburger menus
const mainHamburgerMenu = document.getElementById("home-hamburger-menu");
const aboutMeHamburgerMenu = document.getElementById("about-me-hamburger-menu");
const startupsHamburgerMenu = document.getElementById("startups-hamburger-menu");

// hover elements
const profileImageBox = document.getElementById("image-card");
const profileImage = document.getElementById("main-page-profile-image");

// sidebar
const sidebarMenu = document.getElementById("sidebar-menu")


function slideOutPage(page) {
    page.style.transform = "translateX(0%)";
}

function slideInPage(page) {
    page.style.transform = "translateX(-100%)";
}

function slideOutPagesExcept(page) {

    const indexOfPage = pages.indexOf(page);

    // slide out all pages that are not the target page
    for (let page = 0; page < pages.length; page++) {
        if (page !== indexOfPage) {
            slideOutPage(pages[page]);
        }
    }

    // slide in the target page
    slideInPage(pages[indexOfPage]);

    // slide out the sidebar
    slideOutPage(sidebarMenu);
}

// Implements .slide-in CSS class
function addSlideIn(HTMLId) {
    const element = document.querySelector("." + HTMLId);
    element.style.opacity = "1";
    element.classList.add("slide-in");
}


// Animate initial loading for home page
window.addEventListener("load", () => {
    slideInPage(mainPage);
    addSlideIn("image-container");
    addSlideIn("main-text-container");
    addSlideIn("navbar");
});


// Button event listeners
homeButton.addEventListener('click', () => {
    slideOutPagesExcept(mainPage);
});

aboutMeButton.addEventListener('click', () => {
    slideOutPagesExcept(aboutMePage);
});

startupsButton.addEventListener('click', () => {
    slideOutPagesExcept(startupsPage);
});

sidebarExitButton.addEventListener('click', () => {
    slideOutPage(sidebarMenu);
})


// Hamburger menu buttons
mainHamburgerMenu.addEventListener('click', () => {
    slideInPage(sidebarMenu);
});

aboutMeHamburgerMenu.addEventListener('click', () => {
    slideInPage(sidebarMenu);
});

startupsHamburgerMenu.addEventListener('click', () => {
    slideInPage(sidebarMenu);
});

// Main page
/*
profileImageBox.addEventListener('mouseover', () => {
    profileImage.style.backfaceVisibility = "hidden";
    profileImage.style.transform = "rotateY(180deg)";
});

profileImageBox.addEventListener('mouseout', () => {
    profileImage.style.transform = "rotateY(0deg)";
});*/

document.getElementById('image-front-face').addEventListener('click', function() {
    document.getElementById("image-card").style.transform = "rotateY(180deg)";
});

document.getElementById('image-back-face').addEventListener('click', ()=> {
    document.getElementById("image-card").style.transform = "rotateY(0deg)";
});

/*
const imageBackText = document.getElementById('image-back-face-text');
imageBackText.style.width = profileImage.style.width;
imageBackText.style.height = profileImage.style.height;
*/
