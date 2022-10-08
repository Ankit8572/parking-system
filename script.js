// const toggleSwitch = document.querySelector('.theme-switch input[type = "checkbox"]');

// function switchTheme(e){
//     if(e.target.checked){
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else{
//         document.documentElement.setAttribute('data-theme', 'Light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

const name = document.getElementById('name');
const email = document.getElementById('email');
const massage = document.getElementById('massage');
const contactForm = document.getElementById('contact-form');
const errorElement= document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

const validate =(e) => {
    e.preventDefault();

if(name.value.lenght < 3) {
    errorElement.innerHTML = 'your name should be at least 3 character long.';
    return false;
}
if(!(email.value.includes('.') && (email.value.includes('@')))){
    errorElement.innerHTML = 'please enter valid email address.';
    return false;
}
if(!emailISValid(email.value)){
    errorElement.innerHTML = 'please enter your valid email address';
    return false;
}
if(massage.value.lenght < 20){
    errorElement.innerHTML ='please write longer massage';
    return false;
}
errorElement.innerHTML =' ';
successMsg.innerHTML ='Thanks you! I will get back to you as soon as possible';

// e.preventDefault();
// setTimeout(function () {
//     successMsg.innerHTML= ' ';
//     document.getElementById('contact-form').reset();
// }, 6000);
// return false;
}

const emailISValid = email=> { 
    return /^[^s@]+[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);