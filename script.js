window.addEventListener("scroll", () => {
    let header = document.querySelector("header");

    if(window.scrollY >= 100) header.classList.add("header-active"); 
    else header.classList.remove("header-active")
})

window.addEventListener("load", () => {

    let toggleButton = document.querySelector("#toggleButton");


    toggleButton.addEventListener("click", () => {

        console.log('es')
        toggleButton.firstChild().classList.toggle("toggleModeSun")
    })
})


let toggleButton = document.querySelector("#toggleButton");

toggleButton.addEventListener('click', () => {
    console.log('o')
}) 
