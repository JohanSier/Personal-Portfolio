/* MY CODE TO TOGGLE LANGUAGE
// const englishLink = document.querySelector(".english")
// const spanishLink = document.querySelector(".spanish")

// spanishLink.addEventListener("click", (e) =>{
//     if(spanishLink.getAttribute("active-language") == null ){
//         spanishLink.setAttribute("class", "active-language")
//         englishLink.removeAttribute("class", "active-language")
//     }
// })

// englishLink.addEventListener("click", (e) =>{
//     if(englishLink.getAttribute("active-language") == null ){
//         englishLink.setAttribute("class", "active-language")
//         spanishLink.removeAttribute("class", "active-language")
//     }
// })*/

// CHATGPT CODE TO TOGGLE LANGUAGE
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

/*CREATING "HR" HOVER ANIMATION */
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
