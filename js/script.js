//slider
new Swiper('.presentation__slider', {
    // Optional parameters
    slidesPerView:3.5,
    direction: 'horizontal',
    loop: true,
    spaceBetween:16,
    
    
    // Navigation arrows
    navigation: {
    nextEl: '.presentation__btn-left',
    prevEl: '.presentation__btn-right',
    },
    autoplay:{
        delay:3000,
    },
    breakpoints:{
        860:{
            spaceBetween:8,
        },
        410:{
            spaceBetween:3,
        }
    },    
});
//validator and API
const validator = new JustValidate('.forma',{
    errorLabelCssClass: 'imput-error',
    errorLabelStyle: {
        color: 'red',
        bottom:'80px',
    }
});
validator
.addField('#name', [
    {
        rule: 'required',
        errorMessage:'what`s your name?',
    },
    {
        rule: 'minLength',
        value: 3,
    },
    {
        rule: 'maxLength',
        value: 30,
    },
    ])
.addField('#mail',[
    {
        rule: 'required',
        
    },
    {
        rule: 'email',
    },
])
.addField('#sprava',[
    {
        rule: 'required',
        
    },
    {
        rule: 'minLength',
        value: 3,
    },
    {
        rule: 'maxLength',
        value: 200,
    },
]);

const forma =document.querySelector('.forma');
const inputName = forma.querySelector('.input__name');
const inputMail =forma.querySelector('.input__email');
const message = forma.querySelector('.textarea');

validator.onSuccess( (event) => {
const form = event.currentTarget;
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    name:form.name,
    email:form.mail,
    message:form.sprava,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => {
    inputName.value = '';
    inputMail.value = '';
    message.value = '';
    alert(`thank you,your message number: ${data.id}`);
    })
});

separationPageLong =document.querySelector('.useky');
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

//choice language

function toggleLanguage(){    
    const languageOptions = document.querySelector('#language__header');    
    if(languageOptions.style.display==='block'){
        languageOptions.style.display='none';       
    }else{
        languageOptions.style.display='block';        
    }
};
function toggleLanguagePopup(){    
    const languageOptionsPopup =document.querySelector('#language__popup');
    if(languageOptionsPopup.style.display==='block'){
        languageOptionsPopup.style.display='none';       
    }else{
        languageOptionsPopup.style.display='block';        
    }
};

//open popup
const openBtn = document.querySelector('.popupopen__btn');
const closeBtn =document.querySelector('.mainclose__btn');

const popup = document.querySelector('.main__popup');

const slider = document.querySelector('.presentation__slider');

openBtn.addEventListener('click', () =>{    
        popup.classList.remove('visually-hidden');
        slider.classList.add('visually-hidden')        
});
closeBtn.addEventListener('click', () =>{
    popup.classList.add('visually-hidden');
    slider.classList.remove('visually-hidden')
});



/*const API_URL ='https://jsonplaceholder.typicode.com/posts';
const forma =document.querySelector('.forma');
const inputName = forma.querySelector('.input__name');
const inputMail =forma.querySelector('.input__email');
const message = forma.querySelector('.textarea');
const submitBtn =forma.querySelector('.forma__btn')


inputName.addEventListener('input',() =>{
    
    return  valueName = inputName.value;

});

inputMail.addEventListener('input',() => {
    return valueMail = inputMail.value;
})    
message.addEventListener('input', () => {
    return valueMessage =message.textContent;
}); 

submitBtn.addEventListener('click', async (event)=>{
    event.preventDefault();   
    try{
        let response = await fetch(API_URL,{
            method:'post',
            body:new FormData(forma),  
        });
        let result = await response.json();
        
        showMessage(result.message, response.status == 200 ? 'success' : 'error');
    }catch (error) {
        showMessage(error.message, 'error');
    }
});
const showMessage = (message, type = 'success') => {
    message.innerHTML = `
        <div class="alert alert-${type}">
        ${message}
        </div>
    `;
};
const setFetch =() => {     
        data = {
            name:valueName,
            email:valueMail,
            message:valueMessage,
        }
        console.log(data);
        if(data){
            fetch('https://api.publicapis.org/entries',{
                method:'POST',
                body:JSON.stringify({data}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },            
            })
            .then((response) => response.json())
            .then((data) => {
                valueName ='';
                valueMail = '';
                valueMessage = '';
            alert(`thank you for your order number: ${data.id},we will call back you`)
            });
        }else{
            const erMessage = createElement('.p');
            erMessage.classList.add(er_text);
            erMessage.textContent ='you`v just fogotten to write message';
            erMessage.style.color ='red';
            erMessage.style.fontsize = '36px';
            forma.append(erMessage);
            setInterval(erMessage.remove(),3000);
        }        
    };
        submitBtn.addEventListener('submit',setFetch);*/