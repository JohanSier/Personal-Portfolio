document.addEventListener("DOMContentLoaded", function() {
    // CURSOR ANIMATION
    // const cursorElement = document.getElementById("cursor");
    // const uxProjectsBoxes = document.querySelectorAll(".box");
    // const frontendProjectBoxes = document.querySelectorAll(".boxF");

    // function enableCursorAnimation(projectType) {
    //     projectType.forEach((box) => {
    //         box.addEventListener("mousemove", (e) => {
    //             let x = e.pageX;
    //             let y = e.pageY;

    //             box.style.cursor = "none";
    //             cursorElement.style.display = "block";
    //             cursorElement.style.top = y + "px";
    //             cursorElement.style.left = x + "px";
    //     });

    //         box.addEventListener("mouseout", () => {
    //                 cursorElement.style.display = "pointer";
    //         });
    //     });
    // }

    //     enableCursorAnimation(uxProjectsBoxes);
    //     enableCursorAnimation(frontendProjectBoxes);

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

    /* // -------- DROPDOWN Variables
    dropBtn = document.querySelector(".dropbtn");
    dropDownContent = document.querySelector(".dropdown-content");
    frontendBtn = document.querySelector(".frontend")
    uxBtn = document.querySelector(".ux")

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
        if (!spanishLink.classList.contains("active-language")) {
            dropBtn.textContent = "Frontend Dev"

        }
        else{
            dropBtn.textContent = "Programación"
        }
        frontendBtn.classList.add("default")
        uxBtn.classList.remove("default")

        showGrid(uxGrid, frontendGrid)
    });

    uxBtn.addEventListener("mouseenter", ()=>{
        frontendBtn.classList.add("default")
    })

    //Current Option
    uxBtn.addEventListener("click", () => {
        if (!spanishLink.classList.contains("active-language")) {
            dropBtn.textContent = "UX Design"
        }
        else{
            dropBtn.textContent = "Diseño UX"
        }

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
    }; */

/* ----------------------------------------------  CREATING BURGUER MENU LOGIC  ---------------------------------------------------- */
// Assuming you have a button that toggles the menu with id="menu-toggle"
const openMenuBtn = document.querySelector(".nav_open-btn");
const hiddenMenu = document.getElementById("hidden-menu");
const closeMenuBtn = document.querySelector(".hiddenMenu_close-btn");
// Creating the link hover interaction (that changes the image)
const menuImages = document.getElementById("menu-images");

const logo = document.getElementById("logo")

homeLink = document.querySelector(".menu_link-home");
projectLink = document.querySelector(".menu_link-projects");
skillsLink = document.querySelector(".menu_link-skills");
aboutLink = document.querySelector(".menu_link-about");

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
        }, 130); // Adjust the duration (in milliseconds) based on your preference
    });
}

setImage(homeLink, "./Images/base-image.avif")
setImage(projectLink, "./Images/projectDev-1.avif");
setImage(skillsLink, "./Images/skills.webp");
setImage(aboutLink, "./Images/mom.avif");

/* ---------------------------------------------  CREATING RESUME BUTTON LOGIC  ---------------------------------------------------- */

resumeBtn = document.querySelector(".resume-btn")
resumeText = document.querySelector(".resume-text")
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
mainCta = document.querySelector(".main-cta")
const footerBtn = document.querySelector(".footer_btn")

mainCta.addEventListener("click", ()=>{
    scrollToSection("footer")
    setInterval(() => {
        footerBtn.classList.add("animation") 
    }, 500);
    footerBtn.classList.remove("animation") 
})
});

// ------------------------------------------------- FUNCTIONALITY TO CHANGE PROJECT-DEV-2 IMAGE ON SCREENS FEWER THAN 1310PEXELS ---------------

function checkScreenWidth() {
  projectDevImage = document.querySelector('.twoF');
  if (window.innerWidth < 1310) {
    projectDevImage.src = './Images/projectDevMobile-2.avif';
  } else {
    projectDevImage.src = './Images/projectDev-2.avif';
  }
}

// Check screen width on load
checkScreenWidth();

// Check screen width on resize
window.addEventListener('resize', checkScreenWidth);

// ------------------------------------------------- CHATGPT CODE TO TOGGLE LANGUAGE -----------------------------------------------
 
const englishLink = document.querySelector(".english");
const spanishLink = document.querySelector(".spanish");
let activeES = false;
let activeEN = false;

// -------------------------------------------------- ELEMENTS TO CHANGE ITS LANGUAGE
const title = document.querySelector("title")

const header = document.querySelector("header");
const headerText = header.querySelector("h1");
const headerParagaph = header.querySelector("p");

tooltip = document.querySelector(".tooltiptext")

const bannerText = banner.querySelector("h2");

const flexProjects = document.querySelector(".flex-projects")
const projectsTitle = flexProjects.querySelector("h3")

const eyebrowText = document.querySelector(".eyebrow-text")
const skillsHeading = document.querySelector(".skills-heading")
const skillsH3 = skillsHeading.querySelector("h3")

const devTitle = document.querySelector(".dev-title")
const devP = document.querySelector(".dev-p")

const desTitle = document.querySelector(".des-title")
const desP = document.querySelector(".des-p")

const experiencedLevel = document.querySelectorAll(".experienced")
const intermediateLevel = document.querySelectorAll(".intermediate")
const basicLevel = document.querySelectorAll(".basic")

const aboutEyebrow = document.querySelector(".about-eyebrow")
const aboutContainer = document.querySelector(".about-right")
const aboutH4 = aboutContainer.querySelector("h4")
const aboutP = aboutContainer.querySelector("p")

const contactFooter = document.querySelector("#contact-footer")
const footerH3 = contactFooter.querySelector("h3")
const footerBtn = document.querySelector(".footer_btn")

const projectDev3Image = document.querySelector(".threeF")

const dropBtn = document.querySelector(".dropbtn");


spanishLink.addEventListener("click", (e) => {
    if (!spanishLink.classList.contains("active-language")) {
        spanishLink.classList.add("active-language");
        englishLink.classList.remove("active-language");
        activeES = true;
        activeEN = false;

        title.textContent = "Johan Sierra | Desarrollador Frontend"

        homeLink.textContent = "Inicio"
        projectLink.textContent = "Proyectos"
        skillsLink.textContent = "Mis Habilidades"
        aboutLink.textContent = "Sobre Mí"

        headerText.innerHTML = "Hola, soy Johan un <br> Desarrollador Frontend ✌️"
        headerParagaph.innerHTML = "Vivo en Colombia y me gusta crear productos frontend sólidos y escalables con excelentes experiencias de usuario. Además, tengo conocimientos en diseño UX, por lo que trabajar con diseñadores no es un problema";

        mainCta.textContent = "Trabajemos Juntos";
        resumeText.textContent = "Abrir CV";
        tooltip.textContent = "Hoja de Vida";
        resumeBtn.href = "https://www.dropbox.com/scl/fi/y6njdrmaku6e00q11ii2q/Hoja-de-Vida.pdf?rlkey=ewot9pijbc1saa188fldjwklt&st=cw1lgvog&dl=0"

        projectDevImage.src = './Images/projectDevEs-2.avif';
        projectDev3Image.src = "./Images/projectDevEs-3.avif"

        bannerText.textContent = "DISEÑADOR WEB • DESARROLLADOR FRONTEND • AUTODIDACTA • AMANTE DEL BASKET • DISEÑADOR WEB • DESARROLLADOR FRONTEND • AUTODIDACTA • AMANTE DEL BASKET • DISEÑADOR WEB • DESARROLLADOR FRONTEND • AUTODIDACTA • AMANTE DEL BASKET • DISEÑADOR WEB • DESARROLLADOR FRONTEND • AUTODIDACTA • AMANTE DEL BASKET";
        projectsTitle.textContent = "MIS PROYECTOS";

        dropBtn.textContent = "Diseño UX";
        // frontendBtn.textContent = "Programación";
        // uxBtn.textContent = "Diseño UX";

        eyebrowText.textContent = "Mis Habilidades"
        skillsH3.textContent = "Lo Que Sé Hacer"
        devTitle.textContent = "PROGRAMACIÓN"
        devP.textContent = "DESARROLLO FRONTEND/ HTML / CSS / JS / REACT /"
        desTitle.textContent = "DISEÑO"
        desP.textContent = "DISEÑADOR WEB/ UX / UI / ACCESIBILIDAD"

        experiencedLevel.forEach((element) =>{
            element.textContent = "Experimentado"
        })

        intermediateLevel.forEach((element) =>{
            element.textContent = "Intermedio"
        })

        basicLevel.forEach((element) =>{
            element.textContent = "Básico"
        })


        aboutEyebrow.textContent = "SOBRE MÍ";
        aboutH4.textContent = "Programador y Diseñador"
        aboutP.innerHTML = "Soy Johan, un apasionado desarrollador frontend autodidacta de Bogotá, Colombia, que te trae desarrollo y diseño web que cautiva. Actualmente estoy estudiando ingeniería de software en la Universidad Central y estoy disfrutando de este viaje :) <br><br> Además de programar y diseñar, me encanta jugar baloncesto, leer, viajar, ver películas, hacer ejercicio y, sobre todo, me encanta aprender cosas nuevas todos los días."

        footerH3.innerHTML = "NECESITAS UN DESARROLLADOR WEB?<br>CONSTRUYAMOS ALGO JUNTOS!"
        footerBtn.textContent = "CONTACTAME"
    }
});

englishLink.addEventListener("click", (e) => {
    if (!englishLink.classList.contains("active-language")) {
        englishLink.classList.add("active-language");
        spanishLink.classList.remove("active-language");
        activeES = false;
        activeEN = true;

        title.textContent = "Johan Sierra | Frontend Developer"

        homeLink.textContent = "Home"
        projectLink.textContent = "Projects"
        skillsLink.textContent = "My Skills"
        aboutLink.textContent = "More About Me"

        headerText.innerHTML = "Hi, I'm Johan a Frontend <br> Developer 👋";
        headerParagaph.innerHTML = "I'm based in Colombia and I like to craft solid and scalable frontend products with great user experiences, also I got UX design knowledge so it isn't a problem working with designers";
        mainCta.textContent = "Let's work together";
        resumeText.textContent = "Resume";
        resumeBtn.href = "https://www.dropbox.com/scl/fi/8sx1f80ve6qf62cl9265t/Resume.pdf?rlkey=18loofui7h2fb3xdxcnlebru4&st=1xz7u01k&dl=0"

        projectDevImage.src = './Images/projectDev-2.avif';
        projectDev3Image.src = './Images/projectDev-3.avif';
        
        tooltip.textContent = "Open Resume";

        bannerText.textContent = "FRONTEND DEVELOPER • UI DESIGNER • VISUAL DESIGNER • SELF-TAUGHT PERSON • BASKETBALL LOVER • FRONTEND DEVELOPER • UI DESIGNER • VISUAL DESIGNER • SELF-TAUGHT PERSON • BASKETBALL LOVER • UI DESIGNER • VISUAL DESIGNER • SELF-TAUGHT PERSON • BASKETBALL LOVER";

        projectsTitle.textContent = "RECENT PROJECTS";

        dropBtn.textContent = "UX Design";
        // frontendBtn.textContent = "Frontend Dev";
        // uxBtn.textContent = "UX Design";

        eyebrowText.textContent = "My Skills"
        skillsH3.textContent = "Things I Do"
        devTitle.textContent = "DEVELOPMENT"
        devP.textContent = "JR FRONTEND DEV / HTML / CSS / JS / REACT /"
        desTitle.textContent = "DESIGN"
        desP.textContent = "PRODUCT DESIGN / UX / UI / ACCESSIBILITY"

        experiencedLevel.forEach((element) =>{
            element.textContent = "Experienced"
        })

        intermediateLevel.forEach((element) =>{
            element.textContent = "Intermediate"
        })

        basicLevel.forEach((element) =>{
            element.textContent = "Basic"
        })

        aboutEyebrow.textContent = "ABOUT ME";
        aboutH4.textContent = "Developer and Designer"
        aboutP.innerHTML = "I am Johan, a passionate self-taught frontend developer from Bogota, Colombia, bringing you web development and design that captivates. I'm currently studying software engineering in the Central University and I'm enjoying this journey :] <br><br> Apart from coding and design, I love playing basketball, reading, traveling, watching movies, working out, and, above all, I love learning new things every day  "

        footerH3.innerHTML = "NEED A WEB DEVELOPER?<br>LET'S BUILD SOMETHING!"
        footerBtn.textContent = "GET IN TOUCH"
    }

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

// Call the function to disable mouse events on touch devices
disableMouseEvents();