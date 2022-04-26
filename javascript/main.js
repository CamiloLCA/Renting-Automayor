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

menuToggle.addEventListener('click', ()=>{
    listResponsive.classList.toggle('nav--translate');
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
    })
})

let thirdStepElementsButton = document.querySelectorAll('.steps__list-button--third-step');

thirdStepElementsButton.forEach(thirdStepElementButton =>{
    thirdStepElementButton.addEventListener('click', ()=>{

        let thirdStepElement = document.querySelector('.list__show--second-menu');
        thirdStepElementButton.nextElementSibling.classList.toggle('steps__list-info--visible');
        
        let infoHeight = 0;
        let showInfo = thirdStepElementButton.nextElementSibling;
        if(showInfo.clientHeight >= "0"){
            infoHeight = showInfo.scrollHeight;
        }
        thirdMenuHeight = thirdStepElement.scrollHeight;

        thirdStepElement.style.height = `${thirdMenuHeight}px`;
        showInfo.style.height = `${infoHeight}px`;
    })
})

let fivethStepElementsButton = document.querySelectorAll('.steps__list-button--fiveth-step');

fivethStepElementsButton.forEach(fivethStepElementButton =>{
    fivethStepElementButton.addEventListener('click', ()=>{

        let fivethStepElementMenu = document.querySelector('.list__show--third-menu');
        fivethStepElementButton.nextElementSibling.classList.toggle('steps__list-info--visible');

        let infoHeight = 0;
        let showInfo = fivethStepElementButton.nextElementSibling;
        if(showInfo.clientHeight >= "0"){
            infoHeight = showInfo.scrollHeight;
        }

        fivethMenuHeight = fivethStepElementMenu.scrollHeight;

        fivethStepElementMenu.style.height = `${fivethMenuHeight}px`;
        showInfo.style.height = `${infoHeight}px`;
    })
})

let sixthStepElementsButton = document.querySelectorAll('.steps__list-button--sixth-step');

sixthStepElementsButton.forEach(sixthStepElementButton =>{
    sixthStepElementButton.addEventListener('click', ()=>{

        let sixthStepElementMenu = document.querySelector('.list__show--fourth-menu');
        sixthStepElementButton.nextElementSibling.classList.toggle('steps__list-info--visible');

        let infoHeight = 0;
        let showInfo = sixthStepElementButton.nextElementSibling;
        if(showInfo.clientHeight >= "0"){
            infoHeight = showInfo.scrollHeight;
        }

        sixthMenuHeight = sixthStepElementMenu.scrollHeight;

        sixthStepElementMenu.style.height = `${sixthMenuHeight}px`;
        showInfo.style.height = `${infoHeight}px`;
    })
})