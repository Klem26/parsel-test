  import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

//форма где будуть сохраняться данные 
const formData = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

// refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));
// refs.textarea.addEventListener('input', onTextareaInput);





populateTextarea();

function onTextareaInput(evt) {
    const message = evt.target.value;
    
    // localStorage.setItem('STORAGE_KEY', message)
 
}


function onFormSubmit(evt) {
    evt.preventDefault(); 

    console.log('отправляем форму')
    evt.currentTarget.reset();
     localStorage.removeItem('STORAGE_KEY')

}
// function populateTextarea() {
//     const savedMassege = localStorage.getItem('STORAGE_KEY');
 

//     if (savedMassege ) {
//         console.log(savedMassege);
//         refs.textarea.value = savedMassege

//     }
    
// } 

//сохранить 2 значения в localstorage

refs.form.addEventListener('input', evt => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    formData[evt.target.name] = evt.target.value
    
    const myData = JSON.stringify(formData);
    localStorage.setItem('STORAGE_KEY ', myData);

    
    // console.log(formData)
})

function populateTextarea() {
    const savedMassege = localStorage.getItem('STORAGE_KEY');
    const saveNewMessage = JSON.parse(savedMassege)

    if (saveNewMessage ) {
        console.log(saveNewMessage);
        refs.textarea.value = saveNewMessage

    }
    
} 