// -------------------------------------------- CREATING FIXED NAVIGATION INTERACTION -----------------------------------------------
const fixedNav = document.getElementById("fixed-nav")
const heroSection = document.querySelector(".about-hero")
const languagesContainer = document.querySelector(".languages")


window.addEventListener("scroll",()=>{
    fixedNav.classList.toggle("scrollEffect", window.scrollY> 10)
    languagesContainer.classList.toggle("removeLanguagesOnMobile", window.scrollY> 10)

    if(window.scrollY> 10){
        heroSection.style.marginTop = "105px"
    }
    else{
        heroSection.style.marginTop = "32px"
    }
})

/* ----------------------------------------------  CREATING BURGUER MENU LOGIC  ---------------------------------------------------- */
// Assuming you have a button that toggles the menu with id="menu-toggle"
const openMenuBtn = document.querySelector(".nav_open-btn");
const hiddenMenu = document.getElementById("hidden-menu");
const closeMenuBtn = document.querySelector(".hiddenMenu_close-btn");

// Creating the link hover interaction (that changes the image)
const menuImages = document.getElementById("menu-images");

const homeLink = document.querySelector(".menu_link-home")
const projectLink = document.querySelector(".menu_link-projects");
const skillsLink = document.querySelector(".menu_link-skills");
const aboutLink = document.querySelector(".menu_link-about");
const contactLink = document.querySelector(".menu_link-contact");

openMenuBtn.addEventListener("click", () => {
    hiddenMenu.style.visibility = "visible";

    //Remove the scroll effect that makes the background black while scrolling
    fixedNav.classList.remove("scrollEffect");
    heroSection.style.marginTop = "auto";

    //To make the body tag overflow Y and X not visible
    document.body.style.overflow = "hidden";
    hiddenMenu.classList.add("show");
    menuImages.setAttribute("src", "./Images/about.avif");
});

closeMenuBtn.addEventListener("click", () => {
    hiddenMenu.style.visibility = "hidden";
    fixedNav.classList.remove("scrollEffect");
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "scroll";

    //Readjust the margin of the section that is modified by the fixed nav
    heroSection.style.marginTop = "24px";
    hiddenMenu.classList.remove("show");
});

// Function to handle smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });

        // Check if the menu is open, and if so, hide it
        const computedVisibility = window.getComputedStyle(hiddenMenu).getPropertyValue("visibility");
        if (computedVisibility !== "hidden") {
            openMenuBtn.click(); // Simulate a click on the toggle button to close the menu
        }
    }
}


function setImage(link, src) {
    link.addEventListener("mouseenter", () => {
        menuImages.style.opacity = 0; // Set opacity to 0 before changing the image
        setTimeout(() => {
            menuImages.setAttribute("src", src);
            menuImages.style.opacity = 1; // Fade in by setting opacity to 1
        }, 300); // Adjust the duration (in milliseconds) based on your preference
    });
}

setImage(homeLink, "./Images/base-image.avif")
setImage(projectLink, "./Images/projects.webp");
setImage(skillsLink, "./Images/skills.webp");
setImage(aboutLink, "./Images/about.avif");
setImage(contactLink, "./Images/contact.avif");


// ---------------------------------------------- CHATGPT CODE TO TOGGLE LANGUAGE -------------------------------------------------- //
const englishLink = document.querySelector(".english");
const spanishLink = document.querySelector(".spanish");
let activeES = false;
let activeEN = false;

spanishLink.addEventListener("click", (e) => {
    if (!spanishLink.classList.contains("active-language")) {
        spanishLink.classList.add("active-language");
        englishLink.classList.remove("active-language");
        activeES = true;
        activeEN = false;

    }
    console.log("Spanish:" + " " + activeES)
    console.log("English:" + " " + activeEN)
});

englishLink.addEventListener("click", (e) => {
    if (!englishLink.classList.contains("active-language")) {
        englishLink.classList.add("active-language");
        spanishLink.classList.remove("active-language");
        activeES = false;
        activeEN = true;
    }
    console.log("English:" + " " + activeEN)
    console.log("Spanish:" + " " + activeES)
});