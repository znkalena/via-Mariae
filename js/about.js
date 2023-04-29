//open more pfotos in photogalery
const shortPhotosBtn =document.querySelector('.photogallery__change-short');
const longPhotosBtn =document.querySelector('.photogallery__change-long');
const listShort = document.querySelector('.list__short');
const listLong =document.querySelector('.list__long');



shortPhotosBtn.addEventListener('click',() => {
    listShort.classList.add('visually-hidden');       
    listLong.classList.remove('visually-hidden');    
    shortPhotosBtn.classList.add('visually-hidden');
    longPhotosBtn.classList.remove('visually-hidden');                  
});

longPhotosBtn.addEventListener('click',() => {
    listLong.classList.add('visually-hidden');
    listShort.classList.remove('visually-hidden');    
    longPhotosBtn.classList.add('visually-hidden');
    shortPhotosBtn.classList.remove('visually-hidden');
})
//open useky
const separationPageLong =document.querySelector('.useky');
const btnCloseLict  =document.querySelector('.separation__link-close') 
const btnOpenList =document.querySelector('.separation__link');

btnOpenList.addEventListener('click',() => {
    separationPageLong.classList.remove('visually-hidden');
    btnOpenList.classList.add('visually-hidden');
    btnCloseLict.classList.remove('visually-hidden');
});

btnCloseLict.addEventListener('click',() => {
    separationPageLong.classList.add('visually-hidden');
    btnCloseLict.classList.add('visually-hidden');
    btnOpenList.classList.remove('visually-hidden');
});