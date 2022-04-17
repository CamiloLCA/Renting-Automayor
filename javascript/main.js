let listElements = document.querySelectorAll('.list__button--click');
let stepElements = document.querySelectorAll('.steps__list-info');
let menuToggle = document.getElementById('button-menu--toggle');
let listResponsive = document.getElementById('nav');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
    })
});


let stepElementsButton = document.querySelectorAll('.steps__list-button--second-step');

stepElementsButton.forEach(stepElementButton =>{
    stepElementButton.addEventListener('click', ()=>{

        let secondStepElement = document.querySelector('.list__show--first-menu');
        stepElementButton.nextElementSibling.classList.toggle('steps__list-info--visible');
        
        let height = 0;
        let infoHeight = 0;
        let showInfo = stepElementButton.nextElementSibling;
        if(showInfo.clientHeight >= "0"){
            infoHeight = showInfo.scrollHeight;
        }
        height = secondStepElement.scrollHeight;

        secondStepElement.style.height = `${height}px`;
        showInfo.style.height = `${infoHeight}px`;
        showInfo.style.background = `rgb(170 170 170)`;
    })
})

let thirdStepElementsButton = document.querySelectorAll('.steps__list-button--third-step');

thirdStepElementsButton.forEach(thirdStepElementButton =>{
    thirdStepElementButton.addEventListener('click', ()=>{

        let thirdStepElement = document.querySelector('.list__show--second-menu');
        thirdStepElementButton.nextElementSibling.classList.toggle('steps__list-info--visible');
        
        let height = 0;
        let infoHeight = 0;
        let showInfo = thirdStepElementButton.nextElementSibling;
        if(showInfo.clientHeight >= "0"){
            infoHeight = showInfo.scrollHeight;
        }
        height = thirdStepElement.scrollHeight;
        thirdMenuHeight = thirdStepElement.scrollHeight;

        thirdStepElement.style.height = `${thirdMenuHeight}px`;
        showInfo.style.height = `${infoHeight}px`;
        showInfo.style.background = `rgb(170 170 170)`;
    })
})

menuToggle.addEventListener('click', ()=>{
    listResponsive.classList.toggle('nav--translate');
});