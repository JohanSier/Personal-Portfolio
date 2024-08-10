document.addEventListener("DOMContentLoaded", function() {
    // CURSOR ANIMATION
    const cursorElement = document.getElementById("cursor");
    const uxProjectsBoxes = document.querySelectorAll(".box");
    const frontendProjectBoxes = document.querySelectorAll(".boxF");

    function enableCursorAnimation(projectType) {
        projectType.forEach((box) => {
            box.addEventListener("mousemove", (e) => {
                let x = e.pageX;
                let y = e.pageY;

                box.style.cursor = "none";
                cursorElement.style.display = "block";
                cursorElement.style.top = y + "px";
                cursorElement.style.left = x + "px";
        });

            box.addEventListener("mouseout", () => {
                    cursorElement.style.display = "none";
            });
        });
    }

        enableCursorAnimation(uxProjectsBoxes);
        enableCursorAnimation(frontendProjectBoxes);

// -------------------------------------------- CREATING FIXED NAVIGATION INTERACTION -----------------------------------------------

const fixedNav = document.getElementById("fixed-nav")
const heroSection = document.getElementById("hero")
const languagesContainer = document.querySelector(".languages")

window.addEventListener("scroll",()=>{
    fixedNav.classList.toggle("scrollEffect", window.scrollY> 10)
    languagesContainer.classList.toggle("removeLanguagesOnMobile", window.scrollY> 10)

    if(window.scrollY> 10){
        heroSection.style.marginTop = "138px"
    }
    else{
        heroSection.style.marginTop = "24px"
    }
})


// --------------------------------------------------- CREATING BANNER SCROLLING INTERACTION -----------------------------------------------

const banner = document.querySelector("#banner");
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  let direction = scrollTop > lastScrollTop ? -1 : 1; // Change direction to -1 for moving left on scroll down
  
  document.querySelectorAll("#banner h2").forEach((item, index) => {
    let moveAmount = (scrollTop / 5) * direction;
    item.style.transform = `translateX(${moveAmount}px)`;
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


    /* -------------------------------------------- CREATING "HR" HOVER ANIMATION ------------------------------------------------ */
    //Getting DOM elements

    // Function to set width and transition for an element
    const setWidthAndTransition = (element, width, duration) => {
        element.style.width = width;
        element.style.transition = `width ${duration}s ease`;
    };

    // Function to add hover effects for a container and corresponding HR element
    const addHoverEffect = (containerSelector, hrSelector, initialWidth, hoverWidth, duration) => {
        const container = document.querySelector(containerSelector);
        const hr = document.querySelector(hrSelector);

        container.addEventListener("mouseover", () => {
            setWidthAndTransition(hr, hoverWidth, duration);
        });

        container.addEventListener("mouseout", () => {
            setWidthAndTransition(hr, initialWidth, duration);
        });
    };

    // Adding hover effects for devContainer
    addHoverEffect(".dev-skills", ".features-divider-dev", "3rem", "8rem", 0.5);

    // Adding hover effects for designContainer
    addHoverEffect(".design-skills", ".features-divider-des", "3rem", "8rem", 0.5);


    /*CREATING "features div" HOVER ANIMATION */
    const setMarginAndTransition = (element, marginBottom, duration) => {
        element.style.marginBottom = marginBottom;
        element.style.transition = `margin-bottom ${duration}s ease`;
    };


    // Function to add hover effects for a container and corresponding HR element
    const addHoverEffectMargin = (containerSelector, h4Selector, initialMargin, hoverMargin, duration) => {
        const container = document.querySelector(containerSelector);
        const h4 = document.querySelector(h4Selector);

        container.addEventListener("mouseover", () => {
            setMarginAndTransition(h4, hoverMargin, duration);
        });

        container.addEventListener("mouseout", () => {
            setMarginAndTransition(h4, initialMargin, duration);
        });
    };


    // Adding hover effects for devContainer
    addHoverEffectMargin(".dev-skills", ".dev-title", "0", "8px", .1);

    // Adding hover effects for designContainer
    addHoverEffectMargin(".design-skills", ".des-title", "0", "8px", .1);


    //Hover Effect for Paragraphs
    addHoverEffectMargin(".dev-skills", ".dev-p", "0", "20px", .5);

    addHoverEffectMargin(".design-skills", ".des-p", "0", "20px", .5);


    /* -------------------------------------------- CREATING SMOOTH SCROLLING EFFECT ------------------------------------------------ */
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add("show")
            } else{
                entry.target.classList.remove("show")
            }
        })
    })

    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el) => observer.observe(el))


    /* -------------------------------------------- CREATING DROPDOWN -------------------------------------------------------- */
    /* --------------------------------------  AND GRID HIDDEN OR NOT HIDDEN ------------------------------------------------ */

    // -------- DROPDOWN Variables
    const dropBtn = document.querySelector(".dropbtn");
    const dropDownContent = document.querySelector(".dropdown-content");
    const frontendBtn = document.querySelector(".frontend")
    const uxBtn = document.querySelector(".ux")
    // -------- GRID Variables
    const uxGrid = document.querySelector(".ux-projects-grid")
    const frontendGrid = document.querySelector(".frontend-projects-grid")

    function showGrid(gridHide, gridShow){
        gridHide.style.display = "none"
        gridShow.style.display = "grid"
    }

    dropBtn.addEventListener("click", () => {
        dropDownContent.classList.toggle("show-dropdown");
        if(!uxBtn.classList.contains("default")){
            frontendBtn.classList.add("default")
        }
        else{
            frontendBtn.classList.remove("default")
        }
    });

    //Current Option
    frontendBtn.addEventListener("click", () => {
        dropBtn.textContent = "Frontend Dev"

        uxBtn.classList.remove("default")
        frontendBtn.classList.add("default")

        showGrid(uxGrid, frontendGrid)
    });

    frontendBtn.addEventListener("mouseenter", ()=>{
        uxBtn.classList.remove("default")
    })

    //Current Option
    uxBtn.addEventListener("click", () => {
        dropBtn.textContent = "UX Design"
        if(!frontendBtn.classList.contains("default")){
            frontendBtn.classList.remove("default")
            uxBtn.classList.add("default")
        }
        showGrid(frontendGrid, uxGrid)
    });
    uxBtn.addEventListener("mouseenter", ()=>{
        frontendBtn.classList.remove("default")
    })

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show-dropdown')) {
                    openDropdown.classList.remove('show-dropdown');
                }
            }
        }
    };

/* ----------------------------------------------  CREATING BURGUER MENU LOGIC  ---------------------------------------------------- */
// Assuming you have a button that toggles the menu with id="menu-toggle"
const openMenuBtn = document.querySelector(".nav_open-btn");
const hiddenMenu = document.getElementById("hidden-menu");
const closeMenuBtn = document.querySelector(".hiddenMenu_close-btn");
// Creating the link hover interaction (that changes the image)
const menuImages = document.getElementById("menu-images");

const logo = document.getElementById("logo")

const homeLink = document.querySelector(".menu_link-home");
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
    menuImages.setAttribute("src", "./Images/base-image.avif");
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

        if (hiddenMenu.style.visibility = "visible") {
            closeMenuBtn.click(); // Simulate a click on the toggle button to close the menu
        }
    }
}

///Adding smooth scrolling event listeners to menu links
projectLink.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection("banner");
    // Toggle the class after the scrolling is complete
    setTimeout(() => {
        fixedNav.classList.toggle("scrollEffect");
    }, 1000);
    setTimeout(() => {
        fixedNav.classList.add("scrollEffect");
    }, 4000);
});

skillsLink.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection("my-skills");
    // Toggle the class after the scrolling is complete
    setTimeout(() => {
        fixedNav.classList.toggle("scrollEffect");
    }, 1000);
    setTimeout(() => {
        fixedNav.classList.add("scrollEffect");
    }, 4000);
});

logo.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.scrollIntoView({
        behavior: 'smooth'
    });
});


function setImage(link, src) {
    link.addEventListener("mouseover", () => {
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

/* ---------------------------------------------  CREATING RESUME BUTTON LOGIC  ---------------------------------------------------- */

const resumeBtn = document.querySelector(".resume-btn")
const resumeText = document.querySelector(".resume-text")
const resumeSvg = document.querySelector(".resume-svg")

function showResumeText(element){
    element.addEventListener("mouseover", ()=>{
        resumeBtn.style.width = "140px"
        resumeText.style.visibility = "visible"
    })
}

function hideResumeText(element){
    element.addEventListener("mouseleave", ()=>{
        resumeText.style.visibility = "hidden"
        //Fixes overposition bug
        setTimeout(()=>{
            resumeBtn.style.width = "43px"
        }, 200)
    })
}

showResumeText(resumeBtn)
showResumeText(resumeSvg)
hideResumeText(resumeBtn)


//SCROLL EFFECT FOR THE MAIN CTA
const mainCta = document.querySelector(".main-cta")
const footerBtn = document.querySelector(".footer_btn")

mainCta.addEventListener("click", ()=>{
    scrollToSection("footer")
    setInterval(() => {
        footerBtn.classList.add("animation") 
    }, 500);
    footerBtn.classList.remove("animation") 
})
});

/* ---------------------------- CREATING LOGIC TO DISABLE SOME MOUSE EVENTS ON MOBILE ---------------------------------------------------- */

function disableMouseEvents() {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        document.addEventListener('mouseover', function(e) {
            e.stopPropagation();
        }, true);

        document.addEventListener('mouseout', function(e) {
            e.stopPropagation();
        }, true);

        document.addEventListener('mouseenter', function(e) {
            e.stopPropagation();
        }, true);

        document.addEventListener('mouseleave', function(e) {
            e.stopPropagation();
        }, true);
    }
}


// ------------------------------------------------- CHATGPT CODE TO TOGGLE LANGUAGE -----------------------------------------------

const translations = {
    en: {
      header: "Hi, I'm Johan a Frontend Developer",
      about: "I'm a Frontend Developer with UX Design knowledge",
      projects: "My Projects",
      skills: "My Skills",
      contact: "Contact Me"
    },
    es: {
      header: "Hola, soy Johan un Desarrollador Frontend",
      about: "Soy Desarrollador Frontend con conocimientos en Diseño UX",
      projects: "Mis Proyectos",
      skills: "Mis Habilidades",
      contact: "Contáctame"
    }
  };
  
const appState = {
    language: "en",
    activeEN: true,
    activeES: false
};

function updateLanguage(lang) {
    appState.language = lang;
    appState.activeEN = lang === "en";
    appState.activeES = lang === "es";
}

function updateContent() {
    const header = document.querySelector("header");
    const headerText = header.querySelector("h1");
    const about = document.querySelector(".about-text");
    const projects = document.querySelector(".projects-text");
    const skills = document.querySelector(".skills-text");
    const contact = document.querySelector(".contact-text");

    headerText.textContent = translations[appState.language].header;
    about.textContent = translations[appState.language].about;
    projects.textContent = translations[appState.language].projects;
    skills.textContent = translations[appState.language].skills;
    contact.textContent = translations[appState.language].contact;
}

const englishLink = document.querySelector(".english");
const spanishLink = document.querySelector(".spanish");

englishLink.addEventListener("click", (e) => {
if (!englishLink.classList.contains("active-language")) {
    englishLink.classList.add("active-language");
    spanishLink.classList.remove("active-language");
    updateLanguage("en");
    updateContent();
}
});

spanishLink.addEventListener("click", (e) => {
if (!spanishLink.classList.contains("active-language")) {
    spanishLink.classList.add("active-language");
    englishLink.classList.remove("active-language");
    updateLanguage("es");
    updateContent();
}
});

// Call the function to disable mouse events on touch devices
disableMouseEvents();