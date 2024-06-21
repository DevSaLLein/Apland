window.addEventListener('scroll', () => {

    let header = document.querySelector('header');

    if(window.scrollY >= 100) header.classList.add('header-active'); 
    else header.classList.remove('header-active');
});

window.addEventListener('load', () => {
    
    let toggleButton = document.querySelector('#toggleButton');
    
    toggleButton.addEventListener('click', () => {

        toggleButton.children.item(0).classList.toggle('toggleModeSun');
        document.body.classList.toggle('darkMode');
    });
});
