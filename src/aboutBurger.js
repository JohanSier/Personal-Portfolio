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
// ------------------------------------------------- CHATGPT CODE TO TOGGLE LANGUAGE -----------------------------------------------
 
const englishLink = document.querySelector(".english");
const spanishLink = document.querySelector(".spanish");
let activeES = false;
let activeEN = false;

// -------------------------------------------------- ELEMENTS TO CHANGE ITS LANGUAGE

const title = document.querySelector("title")

const greet = document.querySelector(".greet")
const firstP = document.querySelector(".l-first-p")
const secondP = document.querySelector(".l-second-p")
const thirdP = document.querySelector(".r-third-p")
const fourthP = document.querySelector(".r-fourth-p")

const hobbiesContainer = document.querySelector(".hobbies-container")
const hobbiesH3 = hobbiesContainer.querySelector("h3")

const firstHobbieCont = document.querySelector(".first")
const firstHobbieH4 = firstHobbieCont.querySelector("h4")
const firstHobbieP = firstHobbieCont.querySelector("p")

const secondHobbieCont = document.querySelector(".second")
const secondHobbieH4 = secondHobbieCont.querySelector("h4")
const secondHobbieP = secondHobbieCont.querySelector("p")

const thirdHobbieCont = document.querySelector(".third")
const thirdHobbieH4 = thirdHobbieCont.querySelector("h4")
const thirdHobbieP = thirdHobbieCont.querySelector("p")


spanishLink.addEventListener("click", (e) => {
    if (!spanishLink.classList.contains("active-language")) {
        spanishLink.classList.add("active-language");
        englishLink.classList.remove("active-language");
        activeES = true;
        activeEN = false;

        title.textContent = "Sobre Mí | Johan Sierra"

        greet.textContent = "Hola De Nuevo !"
        firstP.textContent = "¡Soy Johan! El joven que hace magia digital, combinando creatividad con el toque justo de código. Mi objetivo es hacer que los sitios web no solo sean funcionales, sino que también estén llenos de personalidad."
        secondP.textContent = "Desde el colegio, mi curiosidad se convirtió en un amor total por el código. Desde esos primeros días, he estado convirtiendo diseños complejos en código que no solo funciona a la perfección, sino que también ofrece una excelente experiencia de usuario."
        thirdP.textContent = "Vivo en Bogotá, Colombia, y en cuanto al desarrollo frontend, soy completamente autodidacta con un impulso de algunos cursos en línea, incluidos algunos de The Odin Project, Google e IBM. Aprender no es solo una tarea para mí; es una pasión. Cada día es una oportunidad para absorber nuevos conocimientos porque, bueno, simplemente lo disfruto."
        fourthP.textContent = "Hagamos este viaje juntos, donde cada línea de código cuente una historia y cada interfaz de usuario sea un lienzo de genialidad. ¡Emocionado por conectar y crear magia!"

        hobbiesH3.innerHTML = "Otros de mis intereses</span>"
        firstHobbieH4.textContent = "Jugar Baloncesto"
        firstHobbieP.textContent = "Recientemente, jugar baloncesto se ha convertido en una de las actividades que más hago con mis amigos, y lo disfruto demasiado"

        secondHobbieH4.textContent = "Leer Cosas Interesantes"
        secondHobbieP.textContent = "Con más de 40 libros, puedo decir que la lectura es mi recurso principal para explorar nuevos mundos y aprender cualquier cosa. Es una actividad que alimenta mi creatividad y que em motiva a crear cosas nuevas "

        thirdHobbieH4.textContent = "Aprender Cosas Nuevas"
        thirdHobbieP.textContent = "Cada día es una oportunidad para aprender algo nuevo. Mantiene la vida interesante, amplía perspectivas y alimenta mi curiosidad. Aprender es una aventura diaria."
        
    }
});

englishLink.addEventListener("click", (e) => {
    if (!englishLink.classList.contains("active-language")) {
        englishLink.classList.add("active-language");
        spanishLink.classList.remove("active-language");
        activeES = false;
        activeEN = true;

        title.textContent = "About Me | Johan Sierra"

        greet.textContent = "Hey again !"
        firstP.textContent = "I'm Johan! the guy making digital magic happen, blending creativity with just the right touch of code. My goal is to make websites not just functional but infused with personality."
        secondP.textContent = "Back in high school, my curiosity turned into a full-blown love for coding. Since those early days, I've been transforming complex designs into code that not only works flawlessly but also provides an excellent user experience."
        thirdP.textContent = "I'm based in Bogota, Colombia and when it comes to frontend development, I'm completely self-taught with a boost from online courses, including ones from The Odin Project, Google and IBM.  Learning isn't just a checkbox for me; it's a passion. Every day is a chance to soak up new knowledge because, well, I absolutely love it."
        fourthP.textContent = "Let's make this journey together, where every code line tells a story, and every user interface is a canvas for awesomeness. Excited to connect and create some magic!"

        hobbiesH3.innerHTML = "What I love beyond the code <span>& design</span>"
        firstHobbieH4.textContent = "Playing Basketball"
        firstHobbieP.textContent = "Recently playing basketball has become one of the most frequent things that I do along with my friends and I enjoy it a lot!"

        secondHobbieH4.textContent = "Leer Cosas Interesantes"
        secondHobbieP.textContent = "With over 40 books, I can say that reading is my main resource for exploring new worlds and learning anything. It’s an activity that fuels my creativity and motivates me to create new things."

        thirdHobbieH4.textContent = "Learning New Things"
        thirdHobbieP.textContent = "Every day is a chance to learn something new. It keeps life interesting, broadens perspectives, and fuels my curiosity. Learning is a daily adventure."
    }

});