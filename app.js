const emailBox = document.querySelector('.email-box');
const emailLabel = document.querySelector('#email-label');
const email = document.querySelector('#email');
const errIcon = document.querySelector('.denger-icon ');
const submitBtn = document.querySelector('.submit-btn');
const errMsg = document.querySelector('.feed-msg');
const successIcon = document.querySelector('.success-icon');
const dengerIcon = document.querySelector('.denger-icon ');


// Animation
email.addEventListener('click', () => {

    if(!emailLabel.classList.contains('email-label-animate')) {
        emailLabel.classList.add('email-label-animate');
    }
    console.log('animate')
});

// Email Validation

function emailValidation() {

    let pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    // Reset all the styling to default wwhen the when nothing is entered 
    if (email.value.length <= 0) {
        // border of input fild and the color
        emailBox.style.borderColor = 'var(--text-clr)';
        emailLabel.style.borderColor =  'var(--text-clr)';
        emailLabel.style.color = 'var(--text-clr)';
        // Action on the  icons
        errMsg.style.visibility = 'hidden';
        successIcon.style.visibility = 'hidden'
        dengerIcon.style.visibility = 'hidden';
        return false;
    }

    // Whent the input is invalid
    // Condition for checking the email validation
    else if(!email.value.match(pattern)) {
       
        emailBox.style.borderColor = 'red';
        emailLabel.style.borderColor = 'red';
        // errMsg.style.color = 'red';
        // Action of icons
        errMsg.style.visibility = 'visible';
        dengerIcon.style.visibility = 'visible';
        successIcon.style.visibility = 'hidden'
        emailLabel.style.color = 'red';
        // Animation of the 
        // emailLabel.classList.add('email-label-animate');

        return false
    }

    // When the input is validated
    else {
        emailBox.style.borderColor = 'green';
        emailLabel.style.borderColor = 'green';
        emailLabel.style.color = 'green';

        errMsg.style.visibility = 'hidden';
        successIcon.style.visibility = 'visible';
        dengerIcon.style.visibility = 'hidden';
        emailLabel.classList.add('email-label-animate');
        return true
    }
}


// console.log(document.querySelector('.denger-icon img'))