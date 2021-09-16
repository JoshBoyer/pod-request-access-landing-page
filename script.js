const email = document.querySelector('.input');
const btn = document.querySelector('.btn');
const error = document.querySelector('.input__error');

email.addEventListener('input', handleFormError);
btn.addEventListener('click', handleFormError);

function handleFormError(e) {
    if (!email.validity.valid) {
        e.preventDefault();
        if (e.type === 'click' && email.value.length == 0) {
            error.textContent = `Oops! Please add your email`;
        } else {
            error.textContent = `Opps! Please check your email`;
        }
    }
    else {
        error.textContent = ``;
    }
}
