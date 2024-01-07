// MY CODE TO TOGGLE LANGUAGE
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
// })



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
