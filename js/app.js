const form = document.querySelector('form');
const input = document.querySelector('input')
const error = document.querySelector('.error');
const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = input.value.trim();
    if (input.value === "" || !re.test(inputValue)) {
        error.style.display = 'block';
        input.style.borderColor = '#ff5263'
        input.value = '';
        input.placeholder = 'Your email address...';
    } else {
        error.style.display = 'none';
        input.style.borderColor = '#969696';
    }
});