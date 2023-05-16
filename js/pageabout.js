const openPageaboutPopup = document.querySelector('.pageabout__popupopen');
const closePageaboutPopup =document.querySelector('.closepopupabout__btn');
const popupAbout = document.querySelector('.popup__pageabout');

openPageaboutPopup.addEventListener('click',()=> {
    popupAbout.classList.remove('visually-hidden');
});
closePageaboutPopup.addEventListener('click', () =>{
    popupAbout.classList.add('visually-hidden');
});