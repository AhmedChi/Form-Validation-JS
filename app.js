
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('postcode').addEventListener('blur', validatePostcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
    const name = document.getElementById('name');
    const re = /^[A-Za-z]{2,10}$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }
}

function validatePostcode(){
    const postcode = document.getElementById('postcode');
    const re = /^[A-Za-z][0-9]{2}\s?[0-9][A-Za-z]{2}$/;

    if(!re.test(postcode.value)){
        postcode.classList.add('is-invalid');
    } else {
        postcode.classList.remove('is-invalid');
        postcode.classList.add('is-valid');
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}

function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^[0-9]{11}$/; 
    const reUS = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; 

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }
}

