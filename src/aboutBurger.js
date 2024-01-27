/* ----------------------------------------------  CREATING BURGUER MENU LOGIC  ---------------------------------------------------- */
// Assuming you have a button that toggles the menu with id="menu-toggle"
const menuToggleBtn = document.querySelector(".menu-open-toggle");
const hiddenMenu = document.getElementById("hidden-menu");


// Creating the link hover interaction (that changes the image)
const menuImages = document.getElementById("menu-images");

const homeLink = document.querySelector(".menu_link-home")
const aboutLink = document.querySelector(".menu_link-about");
const contactLink = document.querySelector(".menu_link-contact");

menuToggleBtn.addEventListener("click", () => {
    const computedVisibility = window.getComputedStyle(hiddenMenu).getPropertyValue("visibility")
    hiddenMenu.style.visibility = computedVisibility === "hidden" ? "visible" : "hidden";


    if (computedVisibility === "hidden") {
        // Show the menu with a smooth transition
        menuToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49982 9.4139L13.1568 15.0709C13.3454 15.2531 13.598 15.3539 13.8602 15.3516C14.1224 15.3493 14.3732 15.2441 14.5586 15.0587C14.744 14.8733 14.8492 14.6225 14.8515 14.3603C14.8538 14.0981 14.753 13.8455 14.5708 13.6569L8.91382 7.9999L14.5708 2.34291C14.753 2.1543 14.8538 1.9017 14.8515 1.6395C14.8492 1.37731 14.744 1.12649 14.5586 0.941087C14.3732 0.755679 14.1224 0.65051 13.8602 0.648231C13.598 0.645953 13.3454 0.746747 13.1568 0.928905L7.49982 6.58591L1.84282 0.928905C1.65337 0.75125 1.40224 0.654271 1.14255 0.658487C0.882871 0.662704 0.635015 0.767787 0.451433 0.951499C0.26785 1.13521 0.162943 1.38314 0.15891 1.64283C0.154877 1.90251 0.252034 2.15358 0.429823 2.34291L6.08582 7.9999L0.428823 13.6569C0.333313 13.7492 0.257131 13.8595 0.204722 13.9815C0.152313 14.1035 0.124727 14.2347 0.123573 14.3675C0.122419 14.5003 0.147721 14.632 0.198001 14.7549C0.248282 14.8778 0.322535 14.9894 0.416428 15.0833C0.510321 15.1772 0.621973 15.2514 0.744869 15.3017C0.867766 15.352 0.999445 15.3773 1.13222 15.3762C1.265 15.375 1.39622 15.3474 1.51823 15.295C1.64023 15.2426 1.75058 15.1664 1.84282 15.0709L7.49982 9.4139Z" fill="black"/>
      </svg>`;
        document.body.style.overflow = "hidden";

        // Add the 'show' class to apply the transition
        hiddenMenu.classList.add("show");

    } else {
        // Hide the menu with a smooth transition
        menuToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="#"> <path d="M1.40625 1.53125H18.5938M1.40625 7H18.5938M10 12.4687H18.5938" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>`;
        document.body.style.overflow = "auto";
        
        // Remove the 'show' class to apply the transition
        hiddenMenu.classList.remove("show");
        
        if (menuImages.getAttribute("src") !== "../Images/about.png") {
            // Change the 'src' attribute
            menuImages.setAttribute("src", "../Images/contact.png");
        }
    }
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
            menuToggleBtn.click(); // Simulate a click on the toggle button to close the menu
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

setImage(homeLink, "../Images/base-image.jpg")
setImage(aboutLink, "../Images/about.png");
setImage(contactLink, "../Images/contact.png");

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