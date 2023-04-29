//open more pfotos in photogalery
const shortPhotosBtn =document.querySelector('.photogallery__change-short');
const longPhotosBtn =document.querySelector('.photogallery__change-long')
const mapPageabout =document.querySelector('.pageabout__map');
const listShort = document.querySelector('.list__short');
const listLong =document.querySelector('.list__long');
const separationPageLong =document.querySelector('.useky');  


shortPhotosBtn.addEventListener('click',() => {
    listShort.classList.add('visually-hidden');       
    listLong.classList.remove('visually-hidden');
    separationPageLong.classList.remove('visually-hidden');
    mapPageabout.classList.add('visually-hidden');
    shortPhotosBtn.classList.add('visually-hidden');
    longPhotosBtn.classList.remove('visually-hidden');                  
});

longPhotosBtn.addEventListener('click',() => {
    listLong.classList.add('visually-hidden');
    listShort.classList.remove('visually-hidden');
    separationPageLong.classList.add('visually-hidden');
    mapPageabout.classList.remove('visually-hidden');
    longPhotosBtn.classList.add('visually-hidden');
    shortPhotosBtn.classList.remove('visually-hidden');
})
